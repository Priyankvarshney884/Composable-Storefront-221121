import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FakestoreProductAdapter } from '../../adapters/fakestore-product.adapter';
import * as FakestoreActions from '../actions/fakestore.actions';

@Injectable()
export class FakestoreEffects {
  // Effects should be side-effect only (HTTP). We inject here so fields are ready at init time.
  private actions$ = inject(Actions);
  private adapter = inject(FakestoreProductAdapter);

  // Listen for load actions, call the adapter, and emit success/fail actions.
  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FakestoreActions.loadFakestoreProduct),
      mergeMap(({ id }) =>
        this.adapter.load(id).pipe(
          map((product) => FakestoreActions.loadFakestoreProductSuccess({ id, product })),
          catchError((error) => of(FakestoreActions.loadFakestoreProductFail({ id, error })))
        )
      )
    )
  );
}
