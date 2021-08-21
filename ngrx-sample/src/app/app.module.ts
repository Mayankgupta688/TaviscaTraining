import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from "@ngrx/store";
import { employeeReducer } from 'src/reducers/employee.reducer';
import { flightReducer } from 'src/reducers/flight.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponentComponent } from './flight-component/flight-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      employees: employeeReducer,
      flights: flightReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent, FlightComponentComponent]
})
export class AppModule { }
