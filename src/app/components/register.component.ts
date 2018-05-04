import {Component} from '@angular/core';
import {User} from '../models/user';
import {RegisterService} from '../services/register.service';
import {HomeComponent} from './home.component';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  newUser: User = new User();
  registered = false;

  constructor (private registerService: RegisterService) {}

  onSubmit() {
    console.log('submit test');
    console.log(JSON.stringify(this.newUser));
    this.registerService.sendUser(this.newUser)
      .subscribe(
        data => {
          this.registered = true;
          this.newUser = new User();
        },
        error => console.log(error)
      );
  }
}
