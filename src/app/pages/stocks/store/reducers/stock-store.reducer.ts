import { combineReducers } from '@ngrx/store';

//Reducers
import { StockReducer } from './stock.reducer';

//States
import {StockState} from './stock.reducer';

export const stockStoreFeatureKey = 'StockStore';

export type StockStoreState = {
  stockStore: StockState
};

export const stockStoreReducer = combineReducers<StockStoreState>({
  stockStore: StockReducer
});
