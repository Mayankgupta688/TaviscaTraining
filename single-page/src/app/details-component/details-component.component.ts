import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {

  empDetails : any = null;

  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {

    this._httpClient.get(`http://localhost:3000/employees/${this._route.snapshot.params.id}`).subscribe((data: any) => {
      this.empDetails = data;
    })
  }

  redirectToHome() {
    this._router.navigate(["home"])
  }

}
