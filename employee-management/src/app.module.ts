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
import { TwoWatComponent } from './app/two-wat/two-wat.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TransformPipe } from "./app/pipes/transform.pipe";
import { ReactiveFormComponent } from './app/reactive-form/reactive-form.component';

@NgModule({
    declarations: [TransformPipe, AppSecondComponent, AppThirdComponent, AppComponent, DataInterpolationComponent, EmployeeListComponent, EmployeeDetailsComponent, EmployeeCountComponent, StockPriceComponent, InvokePriceComponent, TwoWatComponent, ReactiveFormComponent],
    imports: [ BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule ],
    bootstrap: [ ReactiveFormComponent ]
})
export class AppModule {}


