import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-flight-component',
  templateUrl: './flight-component.component.html',
  styleUrls: ['./flight-component.component.css']
})
export class FlightComponentComponent implements OnInit {
  flightsData: any = [];
  constructor(private _store: Store<any>) { }

  ngOnInit(): void {
    this._store.select("flights").subscribe((data: any) => {
      debugger;
      this.flightsData = data.flights;
    })
  }

  addData() {
    this._store.dispatch({
      type: "Add Flight Data"
    })
  }

}
