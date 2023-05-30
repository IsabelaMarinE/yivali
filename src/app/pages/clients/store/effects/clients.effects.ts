import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import * as ClientActions from '../actions/clients.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ClientService } from '../../services/clients.service';

@Injectable()
export class ClientEffects {
    loadClients$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientActions.loadClients),
            switchMap(() =>
                from(this.ClientService.getClients()).pipe(
                    map((response) => {
                        return ClientActions.loadClientsSuccess({ response });
                    }),
                    catchError((error) => {
                        return of(ClientActions.loadClientsFail());
                    })
                )
            )
        )
    );

    getClient$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientActions.loadClient),
            switchMap((action) =>
                from(this.ClientService.getClient(action.request)).pipe(
                    map((response) => {
                        return ClientActions.loadClientSuccess({ response });
                    }),
                    catchError((error) => {
                        return of(ClientActions.loadClientFail());
                    })
                )
            )
        )
    )

    createClient$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientActions.createClient),
            switchMap((action) =>
                from(this.ClientService.createClient(action.request)).pipe(
                    map((response) => {
                        return ClientActions.createClientSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(ClientActions.createClientFail());
                    })
                )
            )
        )
    )

    updateClient$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientActions.updateClient),
            switchMap((action) =>
                from(this.ClientService.updateClient(action.request)).pipe(
                    map((response) => {
                        return ClientActions.updateClientSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(ClientActions.updateClientFail({error}));
                    })
                )
            )
        )
    )

    deleteClient = createEffect(() =>
        this.actions$.pipe(
            ofType(ClientActions.deleteClient),
            switchMap((action) =>

                from(this.ClientService.deleteClient(action.request)).pipe(
                    map((response) => {
                        return ClientActions.deleteClientSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(ClientActions.deleteClientFail())
                    })
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private ClientService: ClientService
    ) {

    }
}

