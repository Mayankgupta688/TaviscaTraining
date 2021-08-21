import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

 userName: string = "";
 userId: string = ""; 

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this._httpClient.post("http://localhost:3000/employees/", {
      id: this.userId,
      name: this.userName,
      avatar: "Sample",
      createdAt: "Today"
    }).subscribe(() => {
      this._router.navigate(["home"]);
    })
  } 

  redirectToHome() {
    this._router.navigate(["home"]);
  }

}
