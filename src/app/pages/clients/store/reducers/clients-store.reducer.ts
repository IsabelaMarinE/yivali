import { combineReducers } from '@ngrx/store';

//Reducers
import { patientReducer } from './clients.reducer';

//States
import {ClientState} from './clients.reducer';

export const noteStoreFeatureKey = 'NotesStore';

export type ClientsStoreState = {
  clientsStore: ClientState
};

export const clientStoreReducer = combineReducers<ClientsStoreState>({
  clientsStore: patientReducer
});
