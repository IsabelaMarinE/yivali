import { createAction, props } from '@ngrx/store';
import { CreateClientRequest } from '../../models/create-client.request';
import { ClientModel } from '../../models/client.model';
import { UpdateClientRequest } from '../../models/update-client.request';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { ResponseModel } from 'src/app/components/models/response.model';

export const clearStoreFlags = createAction('[Client] Clear Store Flags');

export const clearClients = createAction('[Client] Clear Clients');

export const loadClients = createAction(
    '[Client] Load Clients'
);

export const loadClientsSuccess = createAction(
    '[Client] Load Clients Success',
    props<{ response: ResponseModel<ClientModel> }>()
);

export const loadClientsFail = createAction('[Client] Load Clients Fail');

// Get Client
export const loadClient = createAction(
    '[Client] Load Client',
    props<{ request: GetItemRequest }>()
);

export const loadClientSuccess = createAction(
    '[Client] Load Client Success',
    props<{ response: ResponseModel<ClientModel> }>()
)

export const loadClientFail = createAction(
    '[Client] Load Client Fail'
)


// Create Client
export const createClient = createAction(
    '[Client] Create Client',
    props<{ request: CreateClientRequest }>()
)

export const createClientSuccess = createAction(
    '[Client] Create Client Success',
    props<{ response: ClientModel }>()
)

export const createClientFail = createAction(
    '[Client] Create Client Fail'
)

// Update Client
export const updateClient = createAction(
    '[Client] Update Client',
    props<{ request: UpdateClientRequest }>()
)

export const updateClientSuccess = createAction(
    '[Client] Update Client Success',
    props<{ response: ClientModel }>()
)

export const updateClientFail = createAction(
    '[Client] Update Client Fail',
    props<{ error: any }>()
)

// Delete Client
export const deleteClient = createAction(
    '[Client] Delete Client',
    props<{ request: any }>()
)

export const deleteClientSuccess = createAction(
    '[Client] Delete Client Success',
    props<{ response: any }>()
)

export const deleteClientFail = createAction(
    '[Client] Delete Client Fail'
)
