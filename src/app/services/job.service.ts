import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Job} from '../models/job';
import 'rxjs/add/operator/catch';
import {JobApply} from '../models/jobApply';
import {Company} from '../models/company';
import {Student} from '../models/student';


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
      .set('Authorization' , localStorage.getItem('authorization')).append('Access-Control-Expose-Headers', 'Authorization');
    console.log(headers);
    return this.http.get(this.apiRootUrl + '/job/' + jobId , {headers: headers})
      .catch(this.defaultErrorHandler());
}

  applyJob(jobId: number) {
    console.log('this is apply job');
    console.log(localStorage.getItem('authorization'));
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization')).append('Access-Control-Expose-Headers', 'Authorization');
    return this.http.post(this.apiRootUrl + '/jobapply/student/' + localStorage.getItem('id') + '/job/' + jobId , 123 , {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  getAppliedJobs() {
    console.log('this is get applied jobs');
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization')).append('Access-Control-Expose-Headers', 'Authorization');
    return this.http.get(this.apiRootUrl + '/jobapply/student/' + localStorage.getItem('id'),  {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  getForwardJobs() {
    console.log('this is get forward jobs');
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization')).append('Access-Control-Expose-Headers', 'Authorization');
    return this.http.get(this.apiRootUrl + '/friendforwards/receiver/' + localStorage.getItem('id'),  {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  getPushJobs() {
    console.log('this is get push jobs');
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/companypushes/student/' + localStorage.getItem('id'),  {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  checkApply(jobId: number) {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/jobapply/student/' + localStorage.getItem('id') + '/job/' + jobId,  {headers: headers})
      .catch(this.defaultErrorHandler());
  }


  getJobByCompany (companyId: number): Observable<Job[]> {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/job/company/' + companyId, {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  postJob(job: Job) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json').append('Authorization' , localStorage.getItem('authorization'));
    return this.http.post(this.apiRootUrl + '/job', JSON.stringify(job), {headers: headers});
  }

  getPostedJobs(): Observable<Job[]>  {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/job/company/' + localStorage.getItem('id'), {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  deleteJob(jobId: number) {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.delete(this.apiRootUrl + '/job/' + jobId, {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  pushJob(jobId: number, studentId: number) {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.post(this.apiRootUrl + '/companypush/student/' + studentId + '/job/' + jobId, 123, {headers: headers});
  }

  comfirmForward(studentId: number, jobId: number) {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.put(this.apiRootUrl + '/friendforward/sender/' + studentId + '/receiver/' + localStorage.getItem('id') +
      '/job/' + jobId + '/status/1', 123, {headers: headers});
  }

  requestRes(jobId: number, reps: number) {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.put(this.apiRootUrl + '/companypush/student/' + localStorage.getItem('id') + '/job/' + jobId
      + '/status/' + reps ,  123 , {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  forwardJob(jobId: number, studentId: number) {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.post(this.apiRootUrl + '/friendforward/sender/' + localStorage.getItem('id') + '/receiver/' + studentId
      + '/job/' + jobId, 123, {headers: headers});
  }

  private defaultErrorHandler() {
    return (error: any) => {
      console.log(error);
      return Observable.throw('Server error');
    };
  }
}
