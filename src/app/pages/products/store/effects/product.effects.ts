import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import * as ProductActions from '../actions/product.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from '../../services/products.service';

@Injectable()
export class ProductEffects {
    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            switchMap(() =>
                from(this.ProductService.getProducts()).pipe(
                    map((response) => {
                        return ProductActions.loadProductsSuccess({ response });
                    }),
                    catchError((error) => {
                        return of(ProductActions.loadProductsFail());
                    })
                )
            )
        )
    );

    getProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.loadProduct),
            switchMap((action) =>
                from(this.ProductService.getProduct(action.request)).pipe(
                    map((response) => {
                        return ProductActions.loadProductSuccess({ response });
                    }),
                    catchError((error) => {
                        return of(ProductActions.loadProductFail());
                    })
                )
            )
        )
    )

    createProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.createProduct),
            switchMap((action) =>
                from(this.ProductService.createProduct(action.request)).pipe(
                    map((response) => {
                        return ProductActions.createProductSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(ProductActions.createProductFail());
                    })
                )
            )
        )
    )

    updateProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.updateProduct),
            switchMap((action) =>
                from(this.ProductService.updateProduct(action.request)).pipe(
                    map((response) => {
                        return ProductActions.updateProductSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(ProductActions.updateProductFail({error}));
                    })
                )
            )
        )
    )

    deleteProduct = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.deleteProduct),
            switchMap((action) =>
                from(this.ProductService.deleteProduct(action.request)).pipe(
                    map((response) => {
                        return ProductActions.deleteProductSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(ProductActions.deleteProductFail())
                    })
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private ProductService: ProductService
    ) {

    }
}

