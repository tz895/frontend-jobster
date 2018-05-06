import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../services/login.service';
import {Student} from '../models/student';
import {Company} from '../models/company';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  private model = {'username': '', 'password': ''};
  private newStudent: Student = new Student();
  private newCompany: Company = new Company();
  private currentUserName;
  private student = true;

  constructor (private loginService: LoginService) {
    this.currentUserName = localStorage.getItem('currentUserName');
  }

  toggle() {
    if (this.student) {
      this.student = false;
    } else {
      this.student = true;
    }
  }
  studentSelected() {
    this.student = true;
  }
  companySelected() {
    this.student = false;
  }

  onSubmit() {
    this.loginService.sendCredential(this.model).subscribe(
      resp => {
        // console.log(resp.headers.get('Authorization'));
        localStorage.setItem('authorization', resp.headers.get('Authorization'));

        if (this.student) {
          this.loginService.sendTokenStudent(localStorage.getItem('authorization'), this.model.username).subscribe(
            data => {
              console.log(data);
              this.currentUserName = this.model.username;
              console.log(this.model.username);
              this.newStudent = data;
              localStorage.setItem('id', this.newStudent.studentId.toString())
              localStorage.setItem('currentUserName', this.newStudent.username);
              localStorage.setItem('type', 'student');
              this.model.username = '';
              this.model.password = '';
            },
            error => {
              console.log(error);
            }
          );
        } else {
          this.loginService.sendTokenCompany(localStorage.getItem('authorization'), this.model.username).subscribe(
            data => {
              console.log(data);
              this.currentUserName = this.model.username;
              console.log(this.model.username);
              this.newCompany = data;
              localStorage.setItem('id', this.newCompany.companyId.toString())
              localStorage.setItem('currentUserName', this.newCompany.username);
              localStorage.setItem('type', 'company');
              this.model.username = '';
              this.model.password = '';
            },
            error => {
              console.log(error);
            }
          );
        }
      },
      error => {
        console.log(error);
        alert('Wrong Username or Password!');
      }
    );

  }


}
