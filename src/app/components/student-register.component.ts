import {Component} from '@angular/core';
import {User} from '../models/user';
import {RegisterService} from '../services/register.service';
import {HomeComponent} from './home.component';
import {Student} from '../models/student';

@Component({
  selector: 'student-register',
  templateUrl: './student-register.component.html'
})
export class StudentRegisterComponent {
  newStudent: Student = new Student();
  registered = false;

  constructor (private registerService: RegisterService) {}

  onSubmit() {
    console.log('submit student test');
    console.log(JSON.stringify(this.newStudent));
    this.registerService.sendStudent(this.newStudent)
      .subscribe(
        data => {
          this.registered = true;
          this.newStudent = new Student();
        },
        error => console.log(error)
      );
  }
}
