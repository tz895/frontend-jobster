import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Job} from '../models/job';
import {Observable} from 'rxjs/Observable';
import {Student} from '../models/student';
import {Company} from '../models/company';

@Injectable()
export class StudentService {
  constructor(private http: HttpClient) {}

  private apiRootUrl = 'http://localhost:8080/rest';

  getStudentById(studentId: number): Observable<Student> {
    console.log(localStorage.getItem('authorization'));
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('authorization')).append('Access-Control-Expose-Headers', 'Authorization');
    console.log(headers);
    return this.http.get(this.apiRootUrl + '/student/' + studentId, {headers: headers})
      .catch(this.defaultErrorHandler());
    }


    sendRequest(studentId: number) {
      console.log('this is freind request sending');
      console.log(localStorage.getItem('authorization'));
      const headers = new HttpHeaders()
        .set('Authorization' , localStorage.getItem('authorization')).append('Access-Control-Expose-Headers', 'Authorization');
      return this.http.post(this.apiRootUrl + '/friendrequest/sender/' + localStorage.getItem('id') +
        '/receiver/' + studentId , 123 , {headers: headers})
        .catch(this.defaultErrorHandler());
    }


  getStudents(): Observable<Student[]> {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/students', {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  checkRequest(studentId: number) {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/friendrequest/sender/' + localStorage.getItem('id') +
      '/receiver/' + studentId ,  {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  checkIsFriend(studentId: number) {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/friendrelation/student/' + localStorage.getItem('id') +
      '/friend/' + studentId ,  {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  getRequests() {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/friendrequests/receiver/' + localStorage.getItem('id') ,  {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  getFriends() {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/friendrelation/student/' + localStorage.getItem('id') ,  {headers: headers})
      .catch(this.defaultErrorHandler());
  }


  private defaultErrorHandler() {
    return (error: any) => {
      console.log(error);
      return Observable.throw('Server error');
    };
  }
}
