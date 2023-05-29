import { createAction, props } from '@ngrx/store';
import { CreateOrderRequest } from '../../models/create-order.request';
import { OrderModel } from '../../models/order.model';
import { UpdateOrderRequest } from '../../models/update-order.request';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { ResponseModel } from 'src/app/components/models/response.model';

export const clearStoreFlags = createAction('[Order] Clear Store Flags');

export const clearOrders = createAction('[Order] Clear Orders');

export const loadOrders = createAction(
    '[Order] Load Orders'
);

export const loadOrdersSuccess = createAction(
    '[Order] Load Orders Success',
    props<{ response: ResponseModel<OrderModel> }>()
);

export const loadOrdersFail = createAction('[Order] Load Orders Fail');

// Get Order
export const loadOrder = createAction(
    '[Order] Load Order',
    props<{ request: GetItemRequest }>()
);

export const loadOrderSuccess = createAction(
    '[Order] Load Order Success',
    props<{ response: ResponseModel<OrderModel> }>()
)

export const loadOrderFail = createAction(
    '[Order] Load Order Fail'
)


// Create Order
export const createOrder = createAction(
    '[Order] Create Order',
    props<{ request: CreateOrderRequest }>()
)

export const createOrderSuccess = createAction(
    '[Order] Create Order Success',
    props<{ response: OrderModel }>()
)

export const createOrderFail = createAction(
    '[Order] Create Order Fail'
)

// Update Order
export const updateOrder = createAction(
    '[Order] Update Order',
    props<{ request: UpdateOrderRequest }>()
)

export const updateOrderSuccess = createAction(
    '[Order] Update Order Success',
    props<{ response: OrderModel }>()
)

export const updateOrderFail = createAction(
    '[Order] Update Order Fail',
    props<{ error: any }>()
)

// Delete Order
export const deleteOrder = createAction(
    '[Order] Delete Order',
    props<{ request: any }>()
)

export const deleteOrderSuccess = createAction(
    '[Order] Delete Order Success',
    props<{ response: any }>()
)

export const deleteOrderFail = createAction(
    '[Order] Delete Order Fail'
)
