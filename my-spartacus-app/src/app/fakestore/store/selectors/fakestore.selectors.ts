import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FAKESTORE_FEATURE, FakestoreState } from '../fakestore-state';

// Feature-level selector (root of the fakestore slice).
const getFakestoreState = createFeatureSelector<FakestoreState>(FAKESTORE_FEATURE);

export const getFakestoreProductState = (id: string) =>
  createSelector(getFakestoreState, (state) => state.details[id]);

// Read-only selectors so the UI can stay dumb and declarative.
export const getFakestoreProduct = (id: string) =>
  createSelector(getFakestoreProductState(id), (state) => state?.value ?? null);

export const isFakestoreProductLoading = (id: string) =>
  createSelector(getFakestoreProductState(id), (state) => state?.loading ?? false);

export const getFakestoreProductError = (id: string) =>
  createSelector(getFakestoreProductState(id), (state) => state?.error ?? null);
