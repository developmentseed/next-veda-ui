import type { DatasetData, StoryData } from '@lib';

interface MetadataWithSlug<T> {
  metadata: T;
  slug: string;
}

interface WithContent<T> extends MetadataWithSlug<T> {
  content: string;
}

export type DatasetMetadata = MetadataWithSlug<DatasetData>;
export type DatasetWithContent = WithContent<DatasetData>;

export type StoryMetadata = MetadataWithSlug<StoryData>;
export type StoryWithContent = WithContent<StoryData>;

export type ContentMetadata = MetadataWithSlug<DatasetData | StoryData>;
