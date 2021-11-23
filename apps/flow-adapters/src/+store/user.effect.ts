import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { userActions } from './app.adapter';
import { delay, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffect {
  private num = 0;

  userSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.search),
      switchMap((action) => {
        this.num++;

        return of(
          this.num % 2
            ? userActions.searchFailed({
                error: {
                  message: 'Some api error',
                },
              })
            : userActions.searchSuccess({
                pagination: { perPage: 30, page: 1, total: 1 },
                entities: [
                  {
                    id: '23',
                    uniqId: '45444',
                    firstName: 'Dorin',
                    lastName: 'Turturean',
                  },
                ],
              })
        ).pipe(delay(1000));
      })
    )
  );

  constructor(private actions$: Actions) {}
}
