import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import markdownit from 'markdown-it';
import { DatasetLayer, StoryData } from 'app/types/veda'

const md = markdownit();

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export function resolveConfigFunctions<T>(
  datum,
  bag
);
export function resolveConfigFunctions<T extends any[]>(
  datum,
  bag
);
export function resolveConfigFunctions(
  datum,
  bag
): any {
  if (Array.isArray(datum)) {
    return datum.map((v) => resolveConfigFunctions(v, bag));
  }

  if (datum != null && typeof datum === 'object') {
    // Use for loop instead of reduce as it faster.
    const ready = {};
    for (const [k, v] of Object.entries(datum as object)) {
      ready[k] = resolveConfigFunctions(v, bag);
    }
    return ready;
  }

  if (typeof datum === 'function') {
    try {
      return datum(bag);
    } catch (error) {
      /* eslint-disable-next-line no-console */
      // console.error(
      //   'Failed to resolve function %s(%o) with error %s',
      //   datum.name,
      //   bag,
      //   error.message
      // );
      return null;
    }
  }

  return datum;
}



function parseAttributes(obj) {
  const convert = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        acc[key] = Array.isArray(obj[key]) ? obj[key].map(convert) : convert(obj[key]);
      } else if (typeof obj[key] === 'string') {

        if (obj[key].includes('::markdown')) {
          const v = obj[key]
          const p = v.replace(/^::markdown ?/, '');
          // Conver the string to HTML
          const parsedVal = md.render(p);
          acc[key] = parsedVal.replaceAll(/(\r\n|\n|\r)/gm, '');
          return acc
        }
        
        if (obj[key].includes('::js')) {
          const v = obj[key]
          const p = v.replace(/^::js ?/, '')
          .replaceAll('\\n', '\n');
          acc[key] = p
          return acc
        } else {
          acc[key] = obj[key];
        }
      } else {
        acc[key] = obj[key];
      }
      return acc;
    }, Array.isArray(obj) ? [] : {});
  };

  return convert(obj);
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

// function readMDXFile(filePath) {
//   let rawContent = fs.readFileSync(filePath, 'utf-8')
//   return parseFrontmatter(rawContent)
// }

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  let parsedData = matter(rawContent);
  return parsedData
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { content, data } = readMDXFile(path.join(dir, file))
    const parsedData = parseAttributes(data)
    let slug = path.basename(file, path.extname(file))

    return {
      metadata: parsedData as (DatasetLayer | StoryData),
      slug,
      content
    }
  })
}


export function getDatasets() {
  // console.log(getMDXData(path.join(process.cwd(), 'app', 'blog', 'datasets')))
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'datasets'))
}

export function getStories() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'stories'))
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'datasets'))
}