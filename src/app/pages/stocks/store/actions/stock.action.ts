import { createAction, props } from '@ngrx/store';
import { CreateStockRequest } from '../../models/create-stock.request';
import { StockModel } from '../../models/stock.model';
import { UpdateStockRequest } from '../../models/update-stock.request';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { ResponseModel } from 'src/app/components/models/response.model';

export const clearStoreFlags = createAction('[Stock] Clear Store Flags');

export const clearStocks = createAction('[Stock] Clear Stocks');

export const loadStocks = createAction(
    '[Stock] Load Stocks'
);

export const loadStocksSuccess = createAction(
    '[Stock] Load Stocks Success',
    props<{ response: ResponseModel<StockModel> }>()
);

export const loadStocksFail = createAction('[Stock] Load Stocks Fail');

// Get Stock
export const loadStock = createAction(
    '[Stock] Load Stock',
    props<{ request: GetItemRequest }>()
);

export const loadStockSuccess = createAction(
    '[Stock] Load Stock Success',
    props<{ response: ResponseModel<StockModel> }>()
)

export const loadStockFail = createAction(
    '[Stock] Load Stock Fail'
)


// Create Stock
export const createStock = createAction(
    '[Stock] Create Stock',
    props<{ request: CreateStockRequest }>()
)

export const createStockSuccess = createAction(
    '[Stock] Create Stock Success',
    props<{ response: StockModel }>()
)

export const createStockFail = createAction(
    '[Stock] Create Stock Fail'
)

// Update Stock
export const updateStock = createAction(
    '[Stock] Update Stock',
    props<{ request: UpdateStockRequest }>()
)

export const updateStockSuccess = createAction(
    '[Stock] Update Stock Success',
    props<{ response: StockModel }>()
)

export const updateStockFail = createAction(
    '[Stock] Update Stock Fail',
    props<{ error: any }>()
)

// Delete Stock
export const deleteStock = createAction(
    '[Stock] Delete Stock',
    props<{ request: any }>()
)

export const deleteStockSuccess = createAction(
    '[Stock] Delete Stock Success',
    props<{ response: any }>()
)

export const deleteStockFail = createAction(
    '[Stock] Delete Stock Fail'
)
