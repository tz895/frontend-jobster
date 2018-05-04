import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Job} from '../models/job';
import 'rxjs/add/operator/catch';


@Injectable()
export class JobService {
  constructor (private http: HttpClient) {}

  private apiRootUrl = 'http://localhost:8080/rest';

  getJobs(): Observable<Job[]> {
    console.log(localStorage.getItem('authorization'));
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
      return this.http.get(this.apiRootUrl + '/jobs', {headers: headers})
        .catch(this.defaultErrorHandler());
  }

  getJobById (jobId: number): Observable<Job> {
    console.log(localStorage.getItem('authorization'));
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));

    return this.http.get(this.apiRootUrl + '/job/' + jobId , {headers: headers});
  }

  private defaultErrorHandler() {
    return (error: any) => {
      console.log(error);
      return Observable.throw('Server error');
    };
  }
}
