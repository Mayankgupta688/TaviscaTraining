import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Selector from 'src/selectors/employee.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-sample';
  employeeList: any = [];
  constructor(private _store: Store<any>) { }

  ngOnInit() {
    this._store.select(Selector.employeeDataSelector).subscribe((data: any) => {
      debugger;
      this.employeeList = data.employees;
    })
  }

  getData() {
    this._store.dispatch({
      type: "Clear Data"
    })
  }

  addData() {
    this._store.dispatch({
      type: "Add Employee Data"
    })
  }
}
