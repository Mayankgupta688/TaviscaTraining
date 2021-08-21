import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-invoke-price',
  templateUrl: './invoke-price.component.html',
  styleUrls: ['./invoke-price.component.css']
})
export class InvokePriceComponent {

  constructor(private _dataService: DataService) { 
    this._dataService.invokeIdeaPrice.subscribe(() => {
      alert("clicked")
    })
  }

  getStockValue() {
    this._dataService.invokeIdeaPrice.next("InvokePrice");
  }



}
