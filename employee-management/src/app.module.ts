import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/AppComponent/app.component";
import { AppSecondComponent } from "./app/AppSecondComponent/second.component";
import { AppThirdComponent } from "./app/AppThirdComponent/third.component";
import { DataInterpolationComponent } from './app/data-interpolation/data-interpolation.component';
import { EmployeeListComponent } from './app/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './app/employee-details/employee-details.component';
import { EmployeeCountComponent } from './app/employee-count/employee-count.component';
import { StockPriceComponent } from './app/stock-price/stock-price.component';
import { InvokePriceComponent } from './app/invoke-price/invoke-price.component';

@NgModule({
    declarations: [AppSecondComponent, AppThirdComponent, AppComponent, DataInterpolationComponent, EmployeeListComponent, EmployeeDetailsComponent, EmployeeCountComponent, StockPriceComponent, InvokePriceComponent],
    imports: [ BrowserModule, HttpClientModule ],
    bootstrap: [ StockPriceComponent, InvokePriceComponent ]
})
export class AppModule {}


