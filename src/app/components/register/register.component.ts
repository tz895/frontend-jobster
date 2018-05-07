import {Component} from '@angular/core';


@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  studentRegister = true;
  constructor() {}

  toggle() {
    if (this.studentRegister) {
      this.studentRegister = false;
    } else {
      this.studentRegister = true;
    }
  }

  studentSelected() {
      this.studentRegister = true;
  }
  companySelected() {
    this.studentRegister = false;
  }
}
