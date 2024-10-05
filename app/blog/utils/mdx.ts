import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownit from 'markdown-it';
import { DatasetLayer, StoryData } from 'app/types/veda';

const md = markdownit();

export function resolveConfigFunctions<T>(datum, bag);
export function resolveConfigFunctions<T extends any[]>(datum, bag);
export function resolveConfigFunctions(datum, bag): any {
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
      console.error(
        'Failed to resolve function %s(%o) with error %s',
        datum.name,
        bag,
        error.message,
      );
      return null;
    }
  }

  return datum;
}

function parseAttributes(obj) {
  const convert = (obj) => {
    return Object.keys(obj).reduce(
      (acc, key) => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          acc[key] = convert(obj[key]);
        } else if (typeof obj[key] === 'string') {
          if (obj[key].includes('::markdown')) {
            const v = obj[key];
            const p = v.replace(/^::markdown ?/, '');
            // Conver the string to HTML
            const parsedVal = md.render(p);
            acc[key] = parsedVal.replaceAll(/(\r\n|\n|\r)/gm, '');
            return acc;
          }

          if (obj[key].includes('::js')) {
            const v = obj[key];
            const p = v.replace(/^::js ?/, '').replaceAll('\\n', '\n');
            acc[key] = p;
            return acc;
          } else {
            acc[key] = obj[key];
          }
        } else {
          acc[key] = obj[key];
        }
        return acc;
      },
      Array.isArray(obj) ? [] : {},
    );
  };

  return convert(obj);
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const parsedData = matter(rawContent);
  return parsedData;
}

function getMDXData(dir) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { content, data } = readMDXFile(path.join(dir, file));
    const parsedData = parseAttributes(data);
    const slug = path.basename(file, path.extname(file));

    return {
      metadata: parsedData as DatasetLayer | StoryData,
      slug,
      content,
    };
  });
}

function getMDXMetaData(dir) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { data } = readMDXFile(path.join(dir, file));
    const parsedData = parseAttributes(data);
    const slug = path.basename(file, path.extname(file));

    return {
      metadata: parsedData as DatasetLayer | StoryData,
      slug,
    };
  });
}

export function getDatasetsMetadata() {
  return getMDXMetaData(path.join(process.cwd(), 'app', 'blog', 'datasets'));
}

export function getDatasets() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'datasets'));
}

export function getStories() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'stories'));
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'datasets'));
}
