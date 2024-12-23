import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownit from 'markdown-it';
import { DatasetLayer, StoryData } from 'app/types/veda';

const md = markdownit();

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

const transformData = (content: any) => {
  const data = content?.map((post) => ({
    ...post.metadata,
  }));

  const result = data?.map((d) => {
    const updatedTax = d.taxonomy.map((t) => {
      const updatedVals = t.values.map((v) => {
        return {
          id: v.replace(/ /g, '_').toLowerCase(),
          name: v,
        };
      });
      return { ...t, values: updatedVals };
    });
    return { ...d, taxonomy: updatedTax };
  });

  return result;
};

export function getStoriesMetadata() {
  return getMDXMetaData(path.join(process.cwd(), 'app', 'content', 'stories'));
}

export function getDatasetsMetadata() {
  return getMDXMetaData(path.join(process.cwd(), 'app', 'content', 'datasets'));
}

export function getDatasets() {
  return getMDXData(path.join(process.cwd(), 'app', 'content', 'datasets'));
}

export function getTransformedDatasetMetadata() {
  return transformData(getDatasetsMetadata());
}

export function getTransformedDatasets() {
  return transformData(getDatasets());
}

export function getStories() {
  return getMDXData(path.join(process.cwd(), 'app', 'content', 'stories'));
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'content', 'datasets'));
}
