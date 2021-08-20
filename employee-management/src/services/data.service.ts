import { Injectable, EventEmitter } from "@angular/core";
import { IEmployee } from "../interfaces/employee.interface";

import * as data from "../data/employees.json"
import { Observable, Subject, BehaviorSubject  } from "rxjs";
import { delay, tap } from "rxjs/operators"
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class DataService {
    empList: IEmployee[] = null;
    stockObservale: any;
    invokeIdeaPrice = new BehaviorSubject<string>("6")
    oldPrice = "";
    newPrice = "";

    constructor(private _httpClient: HttpClient) { 
        var employeeData = data;
        this.empList = employeeData["employees"];
    }

    getStockData() {
        this.stockObservale = new Observable((observer) => {
            setInterval(() => {
            this._httpClient.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").subscribe((res: any) => {
                this.newPrice = res.data.pricecurrent;
                if(this.newPrice != this.oldPrice) {
                    this.oldPrice = this.newPrice;
                    observer.next(res.data)
                }
            })
            }, 5000)
        }).pipe(
            tap((data: any) => {
                console.log(data.pricecurrent)
            })
        )

        return this.stockObservale;
    }


    getIdeaStockPrice() {
        debugger;
        return this._httpClient.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/IC8");
    }
}