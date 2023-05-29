import { createAction, props } from '@ngrx/store';
import { CreateProductRequest } from '../../models/create-product.request';
import { ProductModel } from '../../models/product.model';
import { UpdateProductRequest } from '../../models/update-product.request';
import { GetItemRequest } from 'src/app/components/models/get-itme.request';
import { ResponseModel } from 'src/app/components/models/response.model';

export const clearStoreFlags = createAction('[Product] Clear Store Flags');

export const clearProducts = createAction('[Product] Clear Products');

export const loadProducts = createAction(
    '[Product] Load Products'
);

export const loadProductsSuccess = createAction(
    '[Product] Load Products Success',
    props<{ response: ResponseModel<ProductModel> }>()
);

export const loadProductsFail = createAction('[Product] Load Products Fail');

// Get Product
export const loadProduct = createAction(
    '[Product] Load Product',
    props<{ request: GetItemRequest }>()
);

export const loadProductSuccess = createAction(
    '[Product] Load Product Success',
    props<{ response: ResponseModel<ProductModel> }>()
)

export const loadProductFail = createAction(
    '[Product] Load Product Fail'
)


// Create Product
export const createProduct = createAction(
    '[Product] Create Product',
    props<{ request: CreateProductRequest }>()
)

export const createProductSuccess = createAction(
    '[Product] Create Product Success',
    props<{ response: ProductModel }>()
)

export const createProductFail = createAction(
    '[Product] Create Product Fail'
)

// Update Product
export const updateProduct = createAction(
    '[Product] Update Product',
    props<{ request: UpdateProductRequest }>()
)

export const updateProductSuccess = createAction(
    '[Product] Update Product Success',
    props<{ response: ProductModel }>()
)

export const updateProductFail = createAction(
    '[Product] Update Product Fail',
    props<{ error: any }>()
)

// Delete Product
export const deleteProduct = createAction(
    '[Product] Delete Product',
    props<{ request: any }>()
)

export const deleteProductSuccess = createAction(
    '[Product] Delete Product Success',
    props<{ response: any }>()
)

export const deleteProductFail = createAction(
    '[Product] Delete Product Fail'
)
