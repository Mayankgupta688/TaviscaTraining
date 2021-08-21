import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-two-wat',
  templateUrl: './two-wat.component.html',
  styleUrls: ['./two-wat.component.css']
})
export class TwoWatComponent {

  userName = "TechnoFunnel";
  userAge = 2;
  userDesignation = "Company";
  todayDate = Date.now();

  eventData: string = "TechnoFunnel Data from Event";

  testSubject = new BehaviorSubject("Sample");

  constructor() {

    this.testSubject.next("Other Sample Data 1");

    this.testSubject.next("Other Sample Data 2");

    this.testSubject.next("Other Sample Data 3");

    this.testSubject.subscribe((data: any) => {
      debugger;
      this.eventData = data;
    })
  }

  getValue() {
    alert(this.userAge);
    alert(this.userDesignation);
    alert(this.userName);
  }

  updateValue() {
    this.testSubject.next("MAyank Gupta")
  }

}
