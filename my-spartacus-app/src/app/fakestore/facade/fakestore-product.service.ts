import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Product } from '@spartacus/core';
import { FakestoreLoaderState, StateWithFakestore } from '../store/fakestore-state';
import * as FakestoreActions from '../store/actions/fakestore.actions';
import * as FakestoreSelectors from '../store/selectors/fakestore.selectors';

@Injectable({ providedIn: 'root' })
export class FakestoreProductService {
  constructor(private store: Store<StateWithFakestore>) {}

  // Explicit command-style method: call when you want to trigger a fetch.
  load(id: string): void {
    this.store.dispatch(FakestoreActions.loadFakestoreProduct({ id }));
  }

  // Query-style method: returns data and can auto-dispatch if not loaded yet.
  get(id: string): Observable<Product | null> {
    return this.store.pipe(
      select(FakestoreSelectors.getFakestoreProductState(id)),
      tap((state) => {
        if (!state || (!state.loading && !state.success && !state.error)) {
          this.load(id);
        }
      }),
      filter((state): state is FakestoreLoaderState => !!state?.success),
      map((state) => state.value)
    );
  }

  // Read-only selectors for UI state.
  isLoading(id: string): Observable<boolean> {
    return this.store.pipe(select(FakestoreSelectors.isFakestoreProductLoading(id)));
  }

  getError(id: string): Observable<any> {
    return this.store.pipe(select(FakestoreSelectors.getFakestoreProductError(id)));
  }

  getState(id: string): Observable<FakestoreLoaderState | undefined> {
    return this.store.pipe(select(FakestoreSelectors.getFakestoreProductState(id)));
  }
}
