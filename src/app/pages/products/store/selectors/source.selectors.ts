import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromSourceStore from '../reducers/product-store.reducer';

export const selectSourceStoreState =
  createFeatureSelector<fromSourceStore.ProductStoreState>(
    fromSourceStore.productStoreFeatureKey
  );

export const selectSources = createSelector(
  selectSourceStoreState,
  (state: fromSourceStore.ProductStoreState) =>
    state.sourceStore.SourcesResponse
);

export const createSourceResponse = createSelector(
  selectSourceStoreState,
  (state: fromSourceStore.ProductStoreState) =>
    state.sourceStore.createSourceResponse
);

export const selectSource = createSelector(
  selectSourceStoreState,
  (state: fromSourceStore.ProductStoreState) =>

    state.sourceStore.Source
);

export const selectUpdateSourceResponse = createSelector(
  selectSourceStoreState,
  (state: fromSourceStore.ProductStoreState) =>
    state.sourceStore.updateSourceResponse
);

export const selectDeleteSourceResponse = createSelector(
  selectSourceStoreState,
  (state: fromSourceStore.ProductStoreState) =>
    state.sourceStore.deleteSourceResponse
);
