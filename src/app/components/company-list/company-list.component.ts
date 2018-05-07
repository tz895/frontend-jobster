import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {Company} from '../../models/company';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent {
  companies: Company[];
  selectedCompany: Company;

  constructor (private companyService: CompanyService, private router: Router) {
    this.companyService.getCompanies().subscribe(
      data => console.log(this.companies = data),
      error => console.log(error)

    );
  }

  onSelect(company: Company) {
    this.selectedCompany = company;
    this.router.navigate(['/companyDetail', this.selectedCompany.companyId]);
  }
}
