import { Action, createReducer, on } from '@ngrx/store';
import { ProductModel } from '../../models/product.model';
import * as ProductActions from '../actions/product.action';
import { ResponseModel } from 'src/app/components/models/response.model';

export const ProductFetureKey = 'Product';

export interface ProductState {
    ProductsResponse: ResponseModel<ProductModel> | undefined;
    Product: ProductModel | undefined;
    createProductResponse: ProductModel | undefined;
    updateProductResponse: ProductModel | undefined;
    deleteProductResponse: any | undefined;
    errors: any| undefined;
}

export const initialProductState: ProductState = {
    ProductsResponse: undefined,
    Product: undefined,
    createProductResponse: undefined,
    updateProductResponse: undefined,
    deleteProductResponse: undefined,
    errors: undefined
};

export const ProductReducer = createReducer(
    initialProductState,
    on(ProductActions.clearStoreFlags, (state: ProductState) => ({
        ...state,
        ProductsResponse: undefined,
        createProductResponse: undefined,
        Product: undefined,
        updateProductResponse: undefined,
        deleteProductResponse: undefined,
        errors: undefined
    })),
    on(ProductActions.deleteProductSuccess, (state: ProductState) => ({
        ...state,
        ProductsResponse: undefined,
    })),
    on(
        ProductActions.loadProductsSuccess,
        (state: ProductState, { response }) => ({
            ...state,
            ProductsResponse: response,
        })
    ),
    on(ProductActions.loadProductsFail, (state: ProductState) => ({
        ...state,
        ProductsResponse: undefined,
    })),
    // Get Product
    on(ProductActions.loadProduct, (state: ProductState) => ({
        ...state,
        Product: undefined
    })),
    on(ProductActions.loadProductSuccess, (state: ProductState, { response }) => ({
        ...state,
        Product: response.items[0]
    })),
    on(ProductActions.loadProductFail, (state: ProductState) => ({
        ...state,
        Product: undefined
    })),

    // Create Product
    on(ProductActions.createProduct, (state: ProductState) => ({
        ...state,
        createProductResponse: undefined
    })),
    on(ProductActions.createProductSuccess, (state: ProductState, { response }) => ({
        ...state,
        createProductResponse: response
    })),
    on(ProductActions.createProductFail, (state: ProductState) => ({
        ...state,
        createProductResponse: undefined
    })),

    // Update Product
    on(ProductActions.updateProduct, (state: ProductState) => ({
        ...state,
        updateProductResponse: undefined
    })),
    on(ProductActions.updateProductSuccess, (state: ProductState, { response }) => ({
        ...state,
        updateProductResponse: response
    })),
    on(ProductActions.updateProductFail, (state: ProductState, { error }) => ({
        ...state,
        errors: error
    })),

    // Delete Product
    on(ProductActions.deleteProduct, (state: ProductState) => ({
        ...state,
        updateProductResponse: undefined
    })),
    on(ProductActions.deleteProductSuccess, (state: ProductState, { response }) => ({
        ...state,
        deleteProductResponse: response
    })),
    on(ProductActions.deleteProductFail, (state: ProductState) => ({
        ...state,
        deleteProductResponse: undefined
    }))
);

export function productReducerFunc(
    state: ProductState | undefined,
    action: Action
): any {
    return productReducerFunc(state, action);
}

