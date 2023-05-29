import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import * as StockActions from '../actions/stock.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { StockService } from '../../services/stocks.service';

@Injectable()
export class StockEffects {
    loadStocks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StockActions.loadStocks),
            switchMap(() =>
                from(this.StockService.getStocks()).pipe(
                    map((response) => {
                        return StockActions.loadStocksSuccess({ response });
                    }),
                    catchError((error) => {
                        return of(StockActions.loadStocksFail());
                    })
                )
            )
        )
    );

    getStock$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StockActions.loadStock),
            switchMap((action) =>
                from(this.StockService.getStock(action.request)).pipe(
                    map((response) => {
                        return StockActions.loadStockSuccess({ response });
                    }),
                    catchError((error) => {
                        return of(StockActions.loadStockFail());
                    })
                )
            )
        )
    )

    createStock$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StockActions.createStock),
            switchMap((action) =>
                from(this.StockService.createStock(action.request)).pipe(
                    map((response) => {
                        return StockActions.createStockSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(StockActions.createStockFail());
                    })
                )
            )
        )
    )

    updateStock$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StockActions.updateStock),
            switchMap((action) =>
                from(this.StockService.updateStock(action.request)).pipe(
                    map((response) => {
                        return StockActions.updateStockSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(StockActions.updateStockFail({error}));
                    })
                )
            )
        )
    )

    deleteStock = createEffect(() =>
        this.actions$.pipe(
            ofType(StockActions.deleteStock),
            switchMap((action) =>
                from(this.StockService.deleteStock(action.request)).pipe(
                    map((response) => {
                        return StockActions.deleteStockSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(StockActions.deleteStockFail())
                    })
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private StockService: StockService
    ) {

    }
}

