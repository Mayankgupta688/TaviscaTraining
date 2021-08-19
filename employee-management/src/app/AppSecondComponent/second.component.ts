import { Component } from "@angular/core";

@Component({
    selector: "app-component-second",
    template: `
        <div>
            <h1>This is the Second Angular Component from TechnoFunnel</h1>
            <app-component-third></app-component-third>
        </div>
    `
})
export class AppSecondComponent {}