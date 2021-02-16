import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import {HttpClientModule} from '@angular/common/http';
// import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      creditCard : reducer
    }),
    // StoreModule.forRoot(reducers, {
    //   metaReducers
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
