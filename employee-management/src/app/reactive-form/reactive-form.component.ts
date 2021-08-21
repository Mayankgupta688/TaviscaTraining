import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  userValues: any = null;

  ngOnInit() {
    this.userDetailsForm.get('userAge').valueChanges.subscribe((data) => {
      alert(data)
    })

    this.userDetailsForm.get('userName').valueChanges.subscribe((data) => {
      alert(data)
    })

    this.userDetailsForm.get('userDesignation').valueChanges.subscribe((data) => {
      alert(data)
    })

    this.userDetailsForm.valueChanges.subscribe((data) => {
      alert("Form Value Updated....");
    })
  }

  userDetailsForm = new FormGroup({
    userName: new FormControl("TechnoFunnel", [Validators.required, Validators.minLength(3)]),
    userAge: new FormControl("100", Validators.required),
    userDesignation: new FormControl("Developer", Validators.required)
  })

  submitFormFunction() {

    debugger;
    this.userValues = {
      name: this.userDetailsForm.get("userName").value,
      age: this.userDetailsForm.get("userAge").value,
      designation: this.userDetailsForm.get("userDesignation").value
    }

    debugger;
  }

}
