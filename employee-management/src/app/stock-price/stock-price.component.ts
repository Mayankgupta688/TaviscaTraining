import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.css']
})
export class StockPriceComponent {
  ideaPrice: string = "NOT AVAILABLE"
  sbiStockPrice = {
    pricecurrent: "",
    pricechange: "",
    pricepercentchange: ""
  };

  stockObservale: Observable<any>;
  constructor(private _dataService: DataService) { 
    this._dataService.getStockData().subscribe((data) => {
      this.sbiStockPrice = data;
    })

    this._dataService.invokeIdeaPrice.subscribe((data) => {
      if(data != "StockPrice") {
        this._dataService.getIdeaStockPrice().subscribe((response: any) => {
          debugger;
          this.ideaPrice = response.data.pricecurrent
        })
      }
    })
  }

  emitEvent() {
    this._dataService.invokeIdeaPrice.next("StockPrice")
  }
}
