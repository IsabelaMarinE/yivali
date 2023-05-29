import { combineReducers } from '@ngrx/store';

//Reducers
import { ProductReducer, ProductState } from './procut.reducer';
import { SourceReducer, SourceState } from './source.reducer';


export const productStoreFeatureKey = 'ProductStore';

export type ProductStoreState = {
  productStore: ProductState,
  sourceStore: SourceState
};

export const productStoreReducer = combineReducers<ProductStoreState>({
  productStore: ProductReducer,
  sourceStore: SourceReducer
});
