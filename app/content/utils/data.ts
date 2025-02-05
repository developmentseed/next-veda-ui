import type { DatasetData, StoryData, VedaData } from '@lib';
import type {
  DatasetMetadataWithSlug,
  DatasetWithContent,
} from 'app/types/content';

export function isDataset(data) {
  return data.layers;
}

export function processTaxonomies(data): DatasetData | StoryData {
  const updatedTax = data.taxonomy.map((t) => {
    const updatedVals = t.values.map((v) => {
      return {
        id: v.replace(/ /g, '_').toLowerCase(),
        name: v,
      };
    });
    return { ...t, values: updatedVals };
  });
  return { ...data, taxonomy: updatedTax };
}

export const transformToDatasetsList = (
  content: DatasetMetadataWithSlug[],
): DatasetData[] => {
  return content?.map((post) => ({
    ...post.metadata,
  }));
};

export const transformToVedaData = (
  datasets: DatasetWithContent[],
): VedaData<DatasetData> => {
  const transformed = {};
  datasets?.map((dataset) => {
    const id = dataset.metadata.id;
    transformed[id] = {
      content: dataset.content,
      data: dataset.metadata,
    };
  });
  return transformed;
};
