import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';
import {Student} from '../models/student';
import {Company} from '../models/company';

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

  sendStudent(student: Student) {
    console.log('submit student');
    const url = 'http://localhost:8080/rest/student';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(url, JSON.stringify(student), {headers: headers});
  }

  sendCompany(company: Company) {
    console.log('submit company');
    const url = 'http://localhost:8080/rest/company';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(url, JSON.stringify(company), {headers: headers});
  }
}
