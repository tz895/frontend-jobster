import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {Company} from '../../models/company';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'sub-list',
  templateUrl: './sub-list.component.html'
})
export class SubListComponent {
  company: Company;
  companies: Company[] = [];
  selectedCompany: Company;



  constructor (private companyService: CompanyService, private router: Router) {
    this.companyService.getSubCompanies().subscribe(
      data => {
        data.forEach(element => {
          this.company = element.pk.company;
          this.companies.push(this.company);
        });
        console.log(this.companies);
      },
      error => console.log(error)
    );
  }

  onSelect(company: Company) {
    this.selectedCompany = company;
    this.router.navigate(['/companyDetail', this.selectedCompany.companyId]);
  }
}
