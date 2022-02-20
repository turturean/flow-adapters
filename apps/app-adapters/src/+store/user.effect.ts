import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { userSearch, userSearchFailed, userSearchSuccess } from './app.actions';

@Injectable()
export class UserEffect {
  private num = 0;

  userSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userSearch),
      switchMap((action) => {
        this.num++;

        return of(
          this.num % 2
            ? userSearchFailed({
                error: {
                  message: 'Some api error',
                },
              })
            : userSearchSuccess({
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
