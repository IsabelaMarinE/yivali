import { combineReducers } from '@ngrx/store';

//Reducers
import { clientReducer } from './clients.reducer';

//States
import {ClientState} from './clients.reducer';

export const clientStoreFeatureKey = 'ClientStore';

export type ClientsStoreState = {
  clientsStore: ClientState
};

export const clientStoreReducer = combineReducers<ClientsStoreState>({
  clientsStore: clientReducer
});
