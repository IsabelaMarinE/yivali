import { createAction, props } from '@ngrx/store';
import { CreateSourceRequest } from '../../models/create-source.request';
import { SourceModel } from '../../models/source.model';
import { UpdateSourceRequest } from '../../models/update-source.request';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { ResponseModel } from 'src/app/components/models/response.model';

export const clearStoreFlags = createAction('[Source] Clear Store Flags');

export const clearSources = createAction('[Source] Clear Sources');

export const loadSources = createAction(
    '[Source] Load Sources'
);

export const loadSourcesSuccess = createAction(
    '[Source] Load Sources Success',
    props<{ response: ResponseModel<SourceModel> }>()
);

export const loadSourcesFail = createAction('[Source] Load Sources Fail');

// Get Source
export const loadSource = createAction(
    '[Source] Load Source',
    props<{ request: GetItemRequest }>()
);

export const loadSourceSuccess = createAction(
    '[Source] Load Source Success',
    props<{ response: ResponseModel<SourceModel> }>()
)

export const loadSourceFail = createAction(
    '[Source] Load Source Fail'
)


// Create Source
export const createSource = createAction(
    '[Source] Create Source',
    props<{ request: CreateSourceRequest }>()
)

export const createSourceSuccess = createAction(
    '[Source] Create Source Success',
    props<{ response: SourceModel }>()
)

export const createSourceFail = createAction(
    '[Source] Create Source Fail'
)

// Update Source
export const updateSource = createAction(
    '[Source] Update Source',
    props<{ request: UpdateSourceRequest }>()
)

export const updateSourceSuccess = createAction(
    '[Source] Update Source Success',
    props<{ response: SourceModel }>()
)

export const updateSourceFail = createAction(
    '[Source] Update Source Fail',
    props<{ error: any }>()
)

// Delete Source
export const deleteSource = createAction(
    '[Source] Delete Source',
    props<{ request: any }>()
)

export const deleteSourceSuccess = createAction(
    '[Source] Delete Source Success',
    props<{ response: any }>()
)

export const deleteSourceFail = createAction(
    '[Source] Delete Source Fail'
)
