import { Product } from '@spartacus/core';

export const FAKESTORE_FEATURE = 'fakestore';
export const FAKESTORE_DETAIL_ENTITY = '[Fakestore] Detail Entity';

export interface StateWithFakestore {
  [FAKESTORE_FEATURE]: FakestoreState;
}

export interface FakestoreState {
  details: Record<string, FakestoreLoaderState>;
}

export interface FakestoreLoaderState {
  // NgRx UI state for one product id.
  loading: boolean;
  success: boolean;
  error: any | null;
  value: Product | null;
}
