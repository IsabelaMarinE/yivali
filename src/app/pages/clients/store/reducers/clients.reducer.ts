import { Action, createReducer, on } from '@ngrx/store';
import { ClientModel } from '../../models/client.model';
import * as ClientActions from '../actions/clients.action';
import { ResponseModel } from 'src/app/components/models/response.model';

export const clientFetureKey = 'client';

export interface ClientState {
    ClientsResponse: ResponseModel<ClientModel> | undefined;
    Client: ResponseModel<ClientModel> | undefined;
    createClientResponse: ClientModel | undefined;
    updateClientResponse: ClientModel | undefined;
    deleteClientResponse: any | undefined;
    errors: any| undefined;
}

export const initialClientState: ClientState = {
    ClientsResponse: undefined,
    Client: undefined,
    createClientResponse: undefined,
    updateClientResponse: undefined,
    deleteClientResponse: undefined,
    errors: undefined
};

export const clientReducer = createReducer(
    initialClientState,
    on(ClientActions.clearStoreFlags, (state: ClientState) => ({
        ...state,
        ClientsResponse: undefined,
        createClientResponse: undefined,
        Client: undefined,
        updateClientResponse: undefined,
        deleteClientResponse: undefined,
        errors: undefined
    })),
    on(ClientActions.deleteClientSuccess, (state: ClientState) => ({
        ...state,
        ClientsResponse: undefined,
    })),
    on(
        ClientActions.loadClientsSuccess,
        (state: ClientState, { response }) => ({
            ...state,
            ClientsResponse: response,
        })
    ),
    on(ClientActions.loadClientsFail, (state: ClientState) => ({
        ...state,
        ClientsResponse: undefined,
    })),
    // Get Client
    on(ClientActions.loadClient, (state: ClientState) => ({
        ...state,
        Client: undefined
    })),
    on(ClientActions.loadClientSuccess, (state: ClientState, { response }) => ({
        ...state,
        Client: response
    })),
    on(ClientActions.loadClientFail, (state: ClientState) => ({
        ...state,
        Client: undefined
    })),

    // Create Client
    on(ClientActions.createClient, (state: ClientState) => ({
        ...state,
        createClientResponse: undefined
    })),
    on(ClientActions.createClientSuccess, (state: ClientState, { response }) => ({
        ...state,
        createClientResponse: response
    })),
    on(ClientActions.createClientFail, (state: ClientState) => ({
        ...state,
        createClientResponse: undefined
    })),

    // Update Client
    on(ClientActions.updateClient, (state: ClientState) => ({
        ...state,
        updateClientResponse: undefined
    })),
    on(ClientActions.updateClientSuccess, (state: ClientState, { response }) => ({
        ...state,
        updateClientResponse: response
    })),
    on(ClientActions.updateClientFail, (state: ClientState, { error }) => ({
        ...state,
        errors: error
    })),

    // Delete Client
    on(ClientActions.deleteClient, (state: ClientState) => ({
        ...state,
        updateClientResponse: undefined
    })),
    on(ClientActions.deleteClientSuccess, (state: ClientState, { response }) => ({
        ...state,
        deleteClientResponse: response
    })),
    on(ClientActions.deleteClientFail, (state: ClientState) => ({
        ...state,
        deleteClientResponse: undefined
    }))
);

export function clientReducerFunc(
    state: ClientState | undefined,
    action: Action
): any {
    return clientReducerFunc(state, action);
}

