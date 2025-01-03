import * as dateFns from 'date-fns';

// ///////////////////////////////////////////////////////////////////////////
//  Datasets                                                                //
// ///////////////////////////////////////////////////////////////////////////
type DatasetLayerType = 'raster' | 'vector' | 'zarr' | 'cmr';

interface DatasetLayerCommonProps {
  zoomExtent?: number[];
  bounds?: number[];
  sourceParams?: Record<string, any>;
}

export type DatasetDatumFn<T> = (bag: DatasetDatumFnResolverBag) => T;
export type DatasetDatumReturnType = Primitives | Date;
interface DatasetLayerCommonCompareProps extends DatasetLayerCommonProps {
  mapLabel?: string | DatasetDatumFn<DatasetDatumReturnType>;
}

export interface DatasetLayerCompareSTAC
  extends DatasetLayerCommonCompareProps {
  stacCol: string;
  type: DatasetLayerType;
  name: string;
  description: string;
  legend?: LayerLegendCategorical | LayerLegendGradient;
}

export interface DatasetLayerCompareInternal
  extends DatasetLayerCommonCompareProps {
  datasetId: string;
  layerId: string;
}

export enum TimeDensity {
  YEAR = 'year',
  MONTH = 'month',
  DAY = 'day',
}
export interface LayerInfo {
  source: string;
  spatialExtent: string;
  temporalResolution: string;
  unit: string;
}
export interface DatasetLayer extends DatasetLayerCommonProps {
  id: string;
  stacCol: string;
  media?: Media;
  stacApiEndpoint?: string;
  tileApiEndpoint?: string;
  name: string;
  description: string;
  initialDatetime?: 'newest' | 'oldest' | string;
  projection?: ProjectionOptions;
  basemapId?: 'dark' | 'light' | 'satellite' | 'topo';
  type: DatasetLayerType;
  compare: DatasetLayerCompareSTAC | DatasetLayerCompareInternal | null;
  legend?: LayerLegendCategorical | LayerLegendGradient;
  analysis?: {
    metrics: string[];
    exclude: boolean;
    sourceParams?: Record<string, any>;
  };
  assetUrlReplacements?: {
    from: string;
    to: string;
  };
  time_density?: TimeDensity;
  info?: LayerInfo;
}
// A normalized compare layer is the result after the compare definition is
// resolved from DatasetLayerCompareSTAC or DatasetLayerCompareInternal. The
// difference with a "base" dataset layer is not having a name and
// description.
export interface DatasetLayerCompareBase
  extends DatasetLayerCommonCompareProps {
  id: string;
  stacCol: string;
  type: DatasetLayerType;
}
export interface DatasetLayerCompareNormalized
  extends DatasetLayerCommonCompareProps {
  id: string;
  name: string;
  description: string;
  stacApiEndpoint?: string;
  tileApiEndpoint?: string;
  time_density?: 'day' | 'month' | 'year';
  stacCol: string;
  type: DatasetLayerType;
  legend?: LayerLegendCategorical | LayerLegendGradient;
}

// export type DatasetLayerCompareNormalized = DatasetLayerCompareNoLegend | DatasetLayerCompareWLegend

// TODO: Complete once known
export interface DatasetDatumFnResolverBag {
  /* The date selected by the user */
  datetime?: Date;

  /*
    The date to use for the comparison if the user defined one.
  */
  compareDatetime?: Date;

  /* functions from date-fns package */
  dateFns: typeof dateFns;
}

interface LayerLegendUnit {
  label: string;
}

export interface LayerLegendGradient {
  type: 'gradient';
  unit?: LayerLegendUnit;
  min: string | number;
  max: string | number;
  stops: string[];
}

interface CategoricalStop {
  color: string;
  label: string;
}

export interface LayerLegendCategorical {
  type: 'categorical';
  unit?: LayerLegendUnit;
  stops: CategoricalStop[];
}

/**
 * Related Contents
 * editors can curate contents per each category with their ids
 */
export interface RelatedContentData {
  type: 'dataset' | 'story';
  id: string;
  thematic?: string;
}
/**
 * Link  Content
 * When the story is a link out to the external/internal content
 */

export interface LinkContentData {
  url: string;
}

export interface DatasetUsage {
  url: string;
  label: string;
  title: string;
}

export interface ContentCommonData {
  featured?: boolean;
  id: string;
  name: string;
  description: string;
  media?: Media;
  related?: RelatedContentData[];
  taxonomy: Taxonomy[];
}

/**
 * Data structure for the Datasets frontmatter.
 */
export interface DatasetData extends ContentCommonData {
  sourceExclusive?: string;
  infoDescription?: string;
  usage?: DatasetUsage[];
  layers: DatasetLayer[];
  disableExplore?: boolean;
}

// ///////////////////////////////////////////////////////////////////////////
//  Stories                                                             //
// ///////////////////////////////////////////////////////////////////////////

/**
 * Data structure for the Stories frontmatter.
 */
export interface StoryData extends ContentCommonData {
  pubDate: string;
  asLink?: LinkContentData;
}

// ///////////////////////////////////////////////////////////////////////////
//  General interfaces and types                                            //
// ///////////////////////////////////////////////////////////////////////////
type Primitives = string | number | boolean | null | undefined;

export interface Media {
  src: string;
  alt: string;
  author?: {
    name: string;
    url: string;
  };
}
