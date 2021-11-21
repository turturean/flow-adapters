import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducers } from '../+store/app.reducer';
import { UserModel } from '../+store/user-model';
import { createSearchModelFactory } from 'flow-adapters-search';
import { userAdapter } from '../+store/app.adapter';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from '../+store/user.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 3,
      autoPause: true,
    }),
    EffectsModule.forRoot([UserEffect]),
  ],
  providers: [
    {
      provide: UserModel,
      useFactory: createSearchModelFactory(userAdapter),
      deps: [Store],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
