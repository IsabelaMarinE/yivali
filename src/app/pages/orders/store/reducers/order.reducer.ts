import { Action, createReducer, on } from '@ngrx/store';
import { OrderModel } from '../../models/order.model';
import * as OrderActions from '../actions/order.action';
import { ResponseModel } from 'src/app/components/models/response.model';

export const OrderFetureKey = 'Order';

export interface OrderState {
    OrdersResponse: ResponseModel<OrderModel> | undefined;
    Order: OrderModel | undefined;
    createOrderResponse: OrderModel | undefined;
    updateOrderResponse: OrderModel | undefined;
    deleteOrderResponse: any | undefined;
    errors: any| undefined;
}

export const initialOrderState: OrderState = {
    OrdersResponse: undefined,
    Order: undefined,
    createOrderResponse: undefined,
    updateOrderResponse: undefined,
    deleteOrderResponse: undefined,
    errors: undefined
};

export const OrderReducer = createReducer(
    initialOrderState,
    on(OrderActions.clearStoreFlags, (state: OrderState) => ({
        ...state,
        OrdersResponse: undefined,
        createOrderResponse: undefined,
        Order: undefined,
        updateOrderResponse: undefined,
        deleteOrderResponse: undefined,
        errors: undefined
    })),
    on(OrderActions.deleteOrderSuccess, (state: OrderState) => ({
        ...state,
        OrdersResponse: undefined,
    })),
    on(
        OrderActions.loadOrdersSuccess,
        (state: OrderState, { response }) => ({
            ...state,
            OrdersResponse: response,
        })
    ),
    on(OrderActions.loadOrdersFail, (state: OrderState) => ({
        ...state,
        OrdersResponse: undefined,
    })),
    // Get Order
    on(OrderActions.loadOrder, (state: OrderState) => ({
        ...state,
        Order: undefined
    })),
    on(OrderActions.loadOrderSuccess, (state: OrderState, { response }) => ({
        ...state,
        Order: response.items[0]
    })),
    on(OrderActions.loadOrderFail, (state: OrderState) => ({
        ...state,
        Order: undefined
    })),

    // Create Order
    on(OrderActions.createOrder, (state: OrderState) => ({
        ...state,
        createOrderResponse: undefined
    })),
    on(OrderActions.createOrderSuccess, (state: OrderState, { response }) => ({
        ...state,
        createOrderResponse: response
    })),
    on(OrderActions.createOrderFail, (state: OrderState) => ({
        ...state,
        createOrderResponse: undefined
    })),

    // Update Order
    on(OrderActions.updateOrder, (state: OrderState) => ({
        ...state,
        updateOrderResponse: undefined
    })),
    on(OrderActions.updateOrderSuccess, (state: OrderState, { response }) => ({
        ...state,
        updateOrderResponse: response
    })),
    on(OrderActions.updateOrderFail, (state: OrderState, { error }) => ({
        ...state,
        errors: error
    })),

    // Delete Order
    on(OrderActions.deleteOrder, (state: OrderState) => ({
        ...state,
        updateOrderResponse: undefined
    })),
    on(OrderActions.deleteOrderSuccess, (state: OrderState, { response }) => ({
        ...state,
        deleteOrderResponse: response
    })),
    on(OrderActions.deleteOrderFail, (state: OrderState) => ({
        ...state,
        deleteOrderResponse: undefined
    }))
);

export function orderReducerFunc(
    state: OrderState | undefined,
    action: Action
): any {
    return orderReducerFunc(state, action);
}

