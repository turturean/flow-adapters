import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducers } from '../+store/app.reducer';
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
  bootstrap: [AppComponent],
})
export class AppModule {}
