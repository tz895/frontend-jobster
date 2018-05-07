import {Component} from '@angular/core';
import {Company} from '../../../models/company';
import {RegisterService} from '../../../services/register.service';


@Component({
  selector: 'company-register',
  templateUrl: './company-register.component.html'
})
export class CompanyRegisterComponent {
  newCompany: Company = new Company();
  registered = false;

  constructor (private registerService: RegisterService) {}

  onSubmit() {
    console.log('submit company test');
    console.log(JSON.stringify(this.newCompany));
    this.registerService.sendCompany(this.newCompany)
      .subscribe(
        data => {
          this.registered = true;
          this.newCompany = new Company();
        },
        error => console.log(error)
      );
  }
}
