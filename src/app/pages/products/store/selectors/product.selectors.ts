import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromProductStore from '../reducers/product-store.reducer';

export const selectProductStoreState =
  createFeatureSelector<fromProductStore.ProductStoreState>(
    fromProductStore.productStoreFeatureKey
  );

export const selectProducts = createSelector(
  selectProductStoreState,
  (state: fromProductStore.ProductStoreState) =>
    state.productStore.ProductsResponse
);

export const createProductResponse = createSelector(
  selectProductStoreState,
  (state: fromProductStore.ProductStoreState) =>
    state.productStore.createProductResponse
);

export const selectProduct = createSelector(
  selectProductStoreState,
  (state: fromProductStore.ProductStoreState) =>
    state.productStore.Product
);

export const selectUpdateProductResponse = createSelector(
  selectProductStoreState,
  (state: fromProductStore.ProductStoreState) =>
    state.productStore.updateProductResponse
);

export const selectDeleteProductResponse = createSelector(
  selectProductStoreState,
  (state: fromProductStore.ProductStoreState) =>
    state.productStore.deleteProductResponse
);
