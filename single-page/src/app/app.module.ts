import {Component, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./appComponent/app.component";
import { HomePageComponent } from './home-page/home-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ AppComponent, HomePageComponent, HelpPageComponent, AboutPageComponent, DetailsComponentComponent, AddEmployeeComponent ],
    imports: [
        BrowserModule, 
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: "", component: HomePageComponent },
            { path: "help", component: HelpPageComponent },
            { path: "about", component: AboutPageComponent },
            { path: "add", component: AddEmployeeComponent },
            { path: "employee/:id/:name", component: DetailsComponentComponent },
            { path: "**", component: HomePageComponent }
        ])
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}


