import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../services/login.service';
import {Student} from '../models/student';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  private model = {'username': '', 'password': ''};
  private newStudent: Student = new Student();
  private currentUserName;
  private headers;

  constructor (private loginService: LoginService) {
    this.currentUserName = localStorage.getItem('currentUserName');
  }

  onSubmit() {
    this.loginService.sendCredential(this.model).subscribe(
      resp => {
        // console.log(resp.headers.get('Authorization'));
        localStorage.setItem('authorization', resp.headers.get('Authorization'));
        this.loginService.sendToken(localStorage.getItem('authorization')).subscribe(
          data => {
            this.currentUserName = this.model.username;
            localStorage.setItem('currentUserName', this.model.username);
            this.newStudent.username = '';
            this.newStudent.password = '';
            // console.log(JSON.stringify(data));
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );

  }


}
