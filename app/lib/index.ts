'use client';
import {
  CatalogView,
  PageHero,
  useFiltersWithQS,
  ReactQueryProvider,
  DevseedUiThemeProvider,
  PageMainContent,
  Block,
  Prose,
  Figure,
  Caption,
  Image,
  MapBlock,
  CompareImage,
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

  // Components
  CatalogView,
  PageHero,
  PageMainContent,

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
};
