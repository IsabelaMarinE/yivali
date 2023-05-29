import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromStockStore from '../reducers/stock-store.reducer';

export const selectStockStoreState =
  createFeatureSelector<fromStockStore.StockStoreState>(
    fromStockStore.stockStoreFeatureKey
  );

export const selectStocks = createSelector(
  selectStockStoreState,
  (state: fromStockStore.StockStoreState) =>
    state.stockStore.StocksResponse
);

export const createStockResponse = createSelector(
  selectStockStoreState,
  (state: fromStockStore.StockStoreState) =>
    state.stockStore.createStockResponse
);

export const selectStock = createSelector(
  selectStockStoreState,
  (state: fromStockStore.StockStoreState) =>
    state.stockStore.Stock
);

export const selectUpdateStockResponse = createSelector(
  selectStockStoreState,
  (state: fromStockStore.StockStoreState) =>
    state.stockStore.updateStockResponse
);

export const selectDeleteStockResponse = createSelector(
  selectStockStoreState,
  (state: fromStockStore.StockStoreState) =>
    state.stockStore.deleteStockResponse
);
