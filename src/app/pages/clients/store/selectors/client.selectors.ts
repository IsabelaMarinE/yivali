import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromClientStore from '../reducers/clients-store.reducer';

export const selectClientStoreState =
  createFeatureSelector<fromClientStore.ClientsStoreState>(
    fromClientStore.clientStoreFeatureKey
  );

export const selectClients = createSelector(
  selectClientStoreState,
  (state: fromClientStore.ClientsStoreState) =>
    state.clientsStore.ClientsResponse
);

export const createClientResponse = createSelector(
  selectClientStoreState,
  (state: fromClientStore.ClientsStoreState) =>
    state.clientsStore.createClientResponse
);

export const selectClient = createSelector(
  selectClientStoreState,
  (state: fromClientStore.ClientsStoreState) =>
    state.clientsStore.Client
);

export const selectUpdateClientResponse = createSelector(
  selectClientStoreState,
  (state: fromClientStore.ClientsStoreState) =>
    state.clientsStore.updateClientResponse
);

export const selectDeleteClientResponse = createSelector(
  selectClientStoreState,
  (state: fromClientStore.ClientsStoreState) =>
    state.clientsStore.deleteClientResponse
);
