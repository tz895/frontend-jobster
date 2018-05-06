import {Component} from '@angular/core';
import {User} from '../models/user';
import {RegisterService} from '../services/register.service';
import {HomeComponent} from './home.component';

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
