import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Job} from '../models/job';
import {Observable} from 'rxjs/Observable';
import {Student} from '../models/student';

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

  getFriendList(): Observable<Student[]> {
    console.log(localStorage.getItem('authorization'));
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/jobs', {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  private defaultErrorHandler() {
    return (error: any) => {
      console.log(error);
      return Observable.throw('Server error');
    };
  }
}
