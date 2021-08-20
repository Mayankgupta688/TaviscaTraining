import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  @Input() emp: any;
  @Output() deleteEvent = new EventEmitter<string>();

  constructor() {}

  deleteFromChild(empId: string) {
    debugger;
    this.deleteEvent.emit(empId);
  }
}
