import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  token: String;
  constructor (private http: HttpClient) {}

  sendCredential(model) {
    const tokenUrl1 = 'http://localhost:8080/login';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return this.http.post(tokenUrl1, JSON.stringify(model), {headers: headers, observe: 'response'});
  }

  sendTokenStudent(token, studentUsername: string) {
    const tokenUrl2 = 'http://localhost:8080/rest/student/username/' + studentUsername;
    console.log('Bearer ' + token);

    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);

    return this.http.get(tokenUrl2, {headers: headers}).catch(this.defaultErrorHandler());
  }

  sendTokenCompany(token, companyUsername: string) {
    const tokenUrl2 = 'http://localhost:8080/rest/company/username/' + companyUsername;
    console.log('Bearer ' + token);

    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + token);

    return this.http.get(tokenUrl2, {headers: headers}).catch(this.defaultErrorHandler());
  }



  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('currentUserName', '');
    alert('You just logged out.');
  }

  checkLogin() {
    if (localStorage.getItem('currentUserName') !== null && localStorage.getItem('currentUserName') !== '' &&
localStorage.getItem('token') !== null && localStorage.getItem('token') !== '') {

      return true;
    } else {
      return false;
    }
  }

  private defaultErrorHandler() {
    return (error: any) => {
      console.log(error);
      return Observable.throw('Server error');
    };
  }
}
