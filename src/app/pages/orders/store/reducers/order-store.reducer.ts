import { combineReducers } from '@ngrx/store';

//Reducers
import { OrderReducer, OrderState } from './order.reducer';


export const orderStoreFeatureKey = 'OrderStore';

export type OrderStoreState = {
  orderStore: OrderState
};

export const orderStoreReducer = combineReducers<OrderStoreState>({
  orderStore: OrderReducer
});
