import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <div>
            <h1>This is the First Angular Component from TechnoFunnel</h1>
            <app-data-interpolation></app-data-interpolation>
        </div>
    `
})
export class AppComponent {}