import { Action, createReducer, on } from '@ngrx/store';
import { StockModel } from '../../models/stock.model';
import * as StockActions from '../actions/stock.action';
import { ResponseModel } from 'src/app/components/models/response.model';

export const StockFetureKey = 'Stock';

export interface StockState {
    StocksResponse: ResponseModel<StockModel> | undefined;
    Stock: StockModel | undefined;
    createStockResponse: StockModel | undefined;
    updateStockResponse: StockModel | undefined;
    deleteStockResponse: any | undefined;
    errors: any| undefined;
}

export const initialStockState: StockState = {
    StocksResponse: undefined,
    Stock: undefined,
    createStockResponse: undefined,
    updateStockResponse: undefined,
    deleteStockResponse: undefined,
    errors: undefined
};

export const StockReducer = createReducer(
    initialStockState,
    on(StockActions.clearStoreFlags, (state: StockState) => ({
        ...state,
        StocksResponse: undefined,
        createStockResponse: undefined,
        Stock: undefined,
        updateStockResponse: undefined,
        deleteStockResponse: undefined,
        errors: undefined
    })),
    on(StockActions.deleteStockSuccess, (state: StockState) => ({
        ...state,
        StocksResponse: undefined,
    })),
    on(
        StockActions.loadStocksSuccess,
        (state: StockState, { response }) => ({
            ...state,
            StocksResponse: response,
        })
    ),
    on(StockActions.loadStocksFail, (state: StockState) => ({
        ...state,
        StocksResponse: undefined,
    })),
    // Get Stock
    on(StockActions.loadStock, (state: StockState) => ({
        ...state,
        Stock: undefined
    })),
    on(StockActions.loadStockSuccess, (state: StockState, { response }) => ({
        ...state,
        Stock: response.items[0]
    })),
    on(StockActions.loadStockFail, (state: StockState) => ({
        ...state,
        Stock: undefined
    })),

    // Create Stock
    on(StockActions.createStock, (state: StockState) => ({
        ...state,
        createStockResponse: undefined
    })),
    on(StockActions.createStockSuccess, (state: StockState, { response }) => ({
        ...state,
        createStockResponse: response
    })),
    on(StockActions.createStockFail, (state: StockState) => ({
        ...state,
        createStockResponse: undefined
    })),

    // Update Stock
    on(StockActions.updateStock, (state: StockState) => ({
        ...state,
        updateStockResponse: undefined
    })),
    on(StockActions.updateStockSuccess, (state: StockState, { response }) => ({
        ...state,
        updateStockResponse: response
    })),
    on(StockActions.updateStockFail, (state: StockState, { error }) => ({
        ...state,
        errors: error
    })),

    // Delete Stock
    on(StockActions.deleteStock, (state: StockState) => ({
        ...state,
        updateStockResponse: undefined
    })),
    on(StockActions.deleteStockSuccess, (state: StockState, { response }) => ({
        ...state,
        deleteStockResponse: response
    })),
    on(StockActions.deleteStockFail, (state: StockState) => ({
        ...state,
        deleteStockResponse: undefined
    }))
);

export function stockReducerFunc(
    state: StockState | undefined,
    action: Action
): any {
    return stockReducerFunc(state, action);
}

