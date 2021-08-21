import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  employees: any;

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this._httpClient.get("http://localhost:3000/employees").subscribe((empList: any) => {
      this.employees = empList;
    })
  }

  deleteEmployee(empId: string) {
    alert(`Deleting Employee with Id ${empId}`);

    this._httpClient.delete(`http://localhost:3000/employees/${empId}`).subscribe(() => {
      this._httpClient.get("http://localhost:3000/employees").subscribe((empList: any) => {
        this.employees = empList;
      })
    })
  }

  showDetails(empId: string, empName: string) {
    this._router.navigate(["employee", empId, empName])
  }

}
