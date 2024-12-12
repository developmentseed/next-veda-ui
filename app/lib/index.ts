'use client';

import {
  CatalogView,
  PageHero,
  useFiltersWithQS,
  ReactQueryProvider,
  DevseedUiThemeProvider,
  EnvConfigProvider,
  PageMainContent,
  Block,
  Prose,
  Figure,
  Caption,
  Image,
  MapBlock,
  CompareImage,
  PageHeader,
  NavItem,
  InternalNavLink,
  ExplorationAndAnalysis,
  DatasetSelectorModal,
  timelineDatasetsAtom,
  useTimelineDatasetAtom,
  StoriesHubContent,
  externalDatasetsAtom
} from '@developmentseed/veda-ui';

/**
 * This file is to...
 * Quickly identify client specific library components being used throughout this application
 * And to mark these with the client side directive so other parts of the page are still Server Components and can stay as-is
 */

export {
  // Providers
  DevseedUiThemeProvider,
  ReactQueryProvider,
  EnvConfigProvider,

  // Components
  CatalogView,
  PageHero,
  PageMainContent,
  PageHeader,
  ExplorationAndAnalysis,
  DatasetSelectorModal,
  StoriesHubContent,

  // MDX Components
  Block,
  Prose,
  Figure,
  Caption,
  Image,
  MapBlock,
  CompareImage,

  // Hooks
  useFiltersWithQS,

  // State
  timelineDatasetsAtom,
  useTimelineDatasetAtom,
  externalDatasetsAtom
};

export type { NavItem, InternalNavLink };
