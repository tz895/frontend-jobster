import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Job} from '../models/job';
import {Company} from '../models/company';

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) {}

  private apiRootUrl = 'http://localhost:8080/rest';

  getCompanies(): Observable<Company[]> {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/companies', {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  subCompany(companyId: number) {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.post(this.apiRootUrl + '/companysub/student/' + localStorage.getItem('id') + '/company/' + companyId , 123 , {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  unsubCompany(companyId: number) {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.delete(this.apiRootUrl + '/companysub/student/' + localStorage.getItem('id') + '/company/' + companyId  , {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  getCompanyById (companyId: number): Observable<Company> {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/company/' + companyId , {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  checkSubExist(companyId: number) {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/companysub/student/' + localStorage.getItem('id') + '/company/' + companyId, {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  getSubCompanies() {
    const headers = new HttpHeaders()
      .set('Authorization' , localStorage.getItem('authorization'));
    return this.http.get(this.apiRootUrl + '/companysubs/student/' + localStorage.getItem('id'), {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  private defaultErrorHandler() {
    return (error: any) => {
      console.log(error);
      return Observable.throw('Server error');
    };
  }
}
