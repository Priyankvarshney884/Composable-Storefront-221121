import { createAction, props } from '@ngrx/store';
import { Product } from '@spartacus/core';

export const loadFakestoreProduct = createAction(
  '[Fakestore] Load Product',
  props<{ id: string }>()
);

// Fired when the API returns a product for the requested id.
export const loadFakestoreProductSuccess = createAction(
  '[Fakestore] Load Product Success',
  props<{ id: string; product: Product }>()
);

// Fired when the API call fails for the requested id.
export const loadFakestoreProductFail = createAction(
  '[Fakestore] Load Product Fail',
  props<{ id: string; error: any }>()
);
