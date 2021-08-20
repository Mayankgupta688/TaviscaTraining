import { Component, EventEmitter } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { IEmployee } from "../../interfaces/employee.interface";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  salary: number = 100000;

  alertEvent = new EventEmitter<string>();
  currentTimeDisplay: string = "";

  empList: IEmployee[] = [];

    deleteEmployee(empId: string) {
      debugger;
      this.empList = this.empList.filter((emp) => {
        return emp.id != empId
      })
    }

    constructor(private _dataService: DataService) {

      setInterval(() => {
        var currentTime = new Date()
        this.alertEvent.emit(`the Current Time is ${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`);
      }, 1000)

      this.alertEvent.subscribe((timeInfo) => {
        this.currentTimeDisplay = timeInfo;
      })

      this.empList = this._dataService.empList;
    }
}
