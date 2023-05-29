import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import * as SourceActions from '../actions/source.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SourceService } from '../../services/source.service';

@Injectable()
export class SourceEffects {
    loadSources$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SourceActions.loadSources),
            switchMap((action) =>
                from(this.SourceService.getSources(action.request)).pipe(
                    map((response) => {
                        return SourceActions.loadSourcesSuccess({ response });
                    }),
                    catchError((error) => {
                        return of(SourceActions.loadSourcesFail());
                    })
                )
            )
        )
    );

    getSource$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SourceActions.loadSource),
            switchMap((action) =>
                from(this.SourceService.getSource(action.request)).pipe(
                    map((response) => {
                        return SourceActions.loadSourceSuccess({ response });
                    }),
                    catchError((error) => {
                        return of(SourceActions.loadSourceFail());
                    })
                )
            )
        )
    )

    createSource$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SourceActions.createSource),
            switchMap((action) =>
                from(this.SourceService.createSource(action.request)).pipe(
                    map((response) => {
                        return SourceActions.createSourceSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(SourceActions.createSourceFail());
                    })
                )
            )
        )
    )

    updateSource$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SourceActions.updateSource),
            switchMap((action) =>
                from(this.SourceService.updateSource(action.request)).pipe(
                    map((response) => {
                        return SourceActions.updateSourceSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(SourceActions.updateSourceFail({error}));
                    })
                )
            )
        )
    )

    deleteSource = createEffect(() =>
        this.actions$.pipe(
            ofType(SourceActions.deleteSource),
            switchMap((action) =>
                from(this.SourceService.deleteSource(action.request)).pipe(
                    map((response) => {
                        return SourceActions.deleteSourceSuccess({ response })
                    }),
                    catchError((error) => {
                        return of(SourceActions.deleteSourceFail())
                    })
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private SourceService: SourceService
    ) {

    }
}

