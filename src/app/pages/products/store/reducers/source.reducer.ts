import { Action, createReducer, on } from '@ngrx/store';
import { SourceModel } from '../../models/source.model';
import * as SourceActions from '../actions/source.action';
import { ResponseModel } from 'src/app/components/models/response.model';

export const SourceFetureKey = 'Source';

export interface SourceState {
    SourcesResponse: ResponseModel<SourceModel> | undefined;
    Source: ResponseModel<SourceModel> | undefined;
    createSourceResponse: SourceModel | undefined;
    updateSourceResponse: SourceModel | undefined;
    deleteSourceResponse: any | undefined;
    errors: any| undefined;
}

export const initialSourceState: SourceState = {
    SourcesResponse: undefined,
    Source: undefined,
    createSourceResponse: undefined,
    updateSourceResponse: undefined,
    deleteSourceResponse: undefined,
    errors: undefined
};

export const SourceReducer = createReducer(
    initialSourceState,
    on(SourceActions.clearStoreFlags, (state: SourceState) => ({
        ...state,
        SourcesResponse: undefined,
        createSourceResponse: undefined,
        Source: undefined,
        updateSourceResponse: undefined,
        deleteSourceResponse: undefined,
        errors: undefined
    })),
    on(SourceActions.deleteSourceSuccess, (state: SourceState) => ({
        ...state,
        SourcesResponse: undefined,
    })),
    on(
        SourceActions.loadSourcesSuccess,
        (state: SourceState, { response }) => ({
            ...state,
            SourcesResponse: response,
        })
    ),
    on(SourceActions.loadSourcesFail, (state: SourceState) => ({
        ...state,
        SourcesResponse: undefined,
    })),
    // Get Source
    on(SourceActions.loadSource, (state: SourceState) => ({
        ...state,
        Source: undefined
    })),
    on(SourceActions.loadSourceSuccess, (state: SourceState, { response }) => ({
        ...state,
        Source: response
    })),
    on(SourceActions.loadSourceFail, (state: SourceState) => ({
        ...state,
        Source: undefined
    })),

    // Create Source
    on(SourceActions.createSource, (state: SourceState) => ({
        ...state,
        createSourceResponse: undefined
    })),
    on(SourceActions.createSourceSuccess, (state: SourceState, { response }) => ({
        ...state,
        createSourceResponse: response
    })),
    on(SourceActions.createSourceFail, (state: SourceState) => ({
        ...state,
        createSourceResponse: undefined
    })),

    // Update Source
    on(SourceActions.updateSource, (state: SourceState) => ({
        ...state,
        updateSourceResponse: undefined
    })),
    on(SourceActions.updateSourceSuccess, (state: SourceState, { response }) => ({
        ...state,
        updateSourceResponse: response
    })),
    on(SourceActions.updateSourceFail, (state: SourceState, { error }) => ({
        ...state,
        errors: error
    })),

    // Delete Source
    on(SourceActions.deleteSource, (state: SourceState) => ({
        ...state,
        updateSourceResponse: undefined
    })),
    on(SourceActions.deleteSourceSuccess, (state: SourceState, { response }) => ({
        ...state,
        deleteSourceResponse: response
    })),
    on(SourceActions.deleteSourceFail, (state: SourceState) => ({
        ...state,
        deleteSourceResponse: undefined
    }))
);

export function sourceReducerFunc(
    state: SourceState | undefined,
    action: Action
): any {
    return sourceReducerFunc(state, action);
}

