import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/AppComponent/app.component";
import { AppSecondComponent } from "./app/AppSecondComponent/second.component";
import { AppThirdComponent } from "./app/AppThirdComponent/third.component";
import { DataInterpolationComponent } from './app/data-interpolation/data-interpolation.component';
import { EmployeeListComponent } from './app/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './app/employee-details/employee-details.component';

@NgModule({
    declarations: [AppSecondComponent, AppThirdComponent, AppComponent, DataInterpolationComponent, EmployeeListComponent, EmployeeDetailsComponent],
    imports: [ BrowserModule ],
    bootstrap: [  EmployeeListComponent ]
})
export class AppModule {}


