import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FAKESTORE_FEATURE } from './store/fakestore-state';
import { fakestoreReducer } from './store/reducers/fakestore.reducer';
import { FakestoreEffects } from './store/effects/fakestore.effects';

@NgModule({
  imports: [
    // Register the feature state and its effects with the global store.
    StoreModule.forFeature(FAKESTORE_FEATURE, fakestoreReducer),
    EffectsModule.forFeature([FakestoreEffects]),
  ],
})
export class FakestoreStoreModule {}
