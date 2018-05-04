import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RegisterService {
  constructor (private http: HttpClient) {}

  sendUser(user: User) {
    console.log('submit test222');
    const url = 'http://localhost:8080/users/signup';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(url, JSON.stringify(user), {headers: headers});
  }
}
