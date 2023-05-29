import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import * as OrderActions from '../actions/order.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OrderService } from '../../services/orders.service';

@Injectable()
export class OrderEffects {
    loadOrders$ = createEffect(() =>
        this.actions$.pipe(
            ofType(OrderActions.loadOrders),
            switchMap(() =>
                from(this.OrderService.getOrders()).pipe(
                    map((response) => {
                        return OrderActions.loadOrdersSuccess({ response });
                    }),
                    catchError((error) => {
                        return of(OrderActions.loadOrdersFail());
                    })
                )
            )
        )
    );

    getOrder$ = createEffect(() =>
        this.actions$.pipe(
            ofType(OrderActions.loadOrder),
            switchMap((action) =>
                from(this.OrderService.getOrder(action.request)).pipe(
                    map((response) => {
                        return OrderActions.loadOrderSuccess({ response });
                    }),
                    catchError((error) => {
                        return of(OrderActions.loadOrderFail());
                    })
                )
            )
        )
    )

    createOrder$ = createEffect(() =>
        this.actions$.pipe(
            ofType(OrderActions.createOrder),
            switchMap((action) =>
                from(this.OrderService.createOrder(action.request)).pipe(
                    map((response) => {
                        return OrderActions.createOrderSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(OrderActions.createOrderFail());
                    })
                )
            )
        )
    )

    updateOrder$ = createEffect(() =>
        this.actions$.pipe(
            ofType(OrderActions.updateOrder),
            switchMap((action) =>
                from(this.OrderService.updateOrder(action.request)).pipe(
                    map((response) => {
                        return OrderActions.updateOrderSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(OrderActions.updateOrderFail({error}));
                    })
                )
            )
        )
    )

    deleteOrder = createEffect(() =>
        this.actions$.pipe(
            ofType(OrderActions.deleteOrder),
            switchMap((action) =>
                from(this.OrderService.deleteOrder(action.request)).pipe(
                    map((response) => {
                        return OrderActions.deleteOrderSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(OrderActions.deleteOrderFail())
                    })
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private OrderService: OrderService
    ) {

    }
}

