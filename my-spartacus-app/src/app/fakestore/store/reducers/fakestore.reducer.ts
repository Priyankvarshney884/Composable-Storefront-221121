import { createReducer, on } from '@ngrx/store';
import { FakestoreState } from '../fakestore-state';
import * as FakestoreActions from '../actions/fakestore.actions';

// Each product id gets its own loader state so multiple ids can be tracked independently.
const initialState: FakestoreState = { details: {} };

export const fakestoreReducer = createReducer(
  initialState,
  // Mark the id as loading when a fetch starts.
  on(FakestoreActions.loadFakestoreProduct, (state, { id }) => ({
    ...state,
    details: {
      ...state.details,
      [id]: { loading: true, success: false, error: null, value: null },
    },
  })),
  // Store the product on success.
  on(FakestoreActions.loadFakestoreProductSuccess, (state, { id, product }) => ({
    ...state,
    details: {
      ...state.details,
      [id]: { loading: false, success: true, error: null, value: product },
    },
  })),
  // Capture error state for the id on failure.
  on(FakestoreActions.loadFakestoreProductFail, (state, { id, error }) => ({
    ...state,
    details: {
      ...state.details,
      [id]: { loading: false, success: false, error, value: null },
    },
  }))
);
