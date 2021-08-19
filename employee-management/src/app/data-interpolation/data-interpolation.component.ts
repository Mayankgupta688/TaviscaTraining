import { Component } from '@angular/core';

@Component({
  selector: 'app-data-interpolation',
  templateUrl: './data-interpolation.component.html',
  styleUrls: ['./data-interpolation.component.css']
})
export class DataInterpolationComponent {
  public userName = "Mayank Gupta";
  public userAge = "100";
  public userDesignation = "Trainer";

  employeeImage: string = "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8"

  getDetails() {
    return `User Age is ${this.userAge} and user Designation is ${this.userDesignation}`;
  }

  deleteEmployee() {
    alert("The Employee Would be Deleted....")
  }
}
