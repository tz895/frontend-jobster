import {ActivatedRoute, Params} from '@angular/router';
import {Component} from '@angular/core';
import {Company} from '../../models/company';
import {CompanyService} from '../../services/company.service';
import {Job} from '../../models/job';
import {JobService} from '../../services/job.service';
import {Router} from '@angular/router';

@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html'
})

export class CompanyDetailComponent {
  company: Company;
  companyId: number;
  jobs: Job[];
  selectedJob: Job;
  ifSub: boolean;

  constructor ( private companyService: CompanyService, private jobService: JobService, private route: ActivatedRoute, private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.companyId = Number.parseInt(params['id']);
    });
    this.companyService.getCompanyById(this.companyId).subscribe(
      data => console.log(this.company = data),
      error => console.log(error)
    );
    this.jobService.getJobByCompany(this.companyId).subscribe(
      data => console.log(this.jobs = data),
      error => console.log(error)
    );
    this.companyService.checkSubExist(this.companyId).subscribe(
      resp => {
        console.log('-----------------');
        if (resp === null || resp === '') {
          return this.ifSub = true;
        } else {
          return this.ifSub = false;
        }
      },
      error => {}
    );
  }

  subCompany() {
    this.companyService.subCompany(this.companyId).subscribe(
      data => {
        alert('Company Subscribe!');
        this.ifSub = false;
      },
      error => {
        alert('Already sub this Company!');
      }
    );
  }

  unsubCompany() {
    this.companyService.unsubCompany(this.companyId).subscribe(
      data => {
        alert('Company unSubscribe!');
        this.ifSub = true;
      },
      error => {
        alert('Already unsub this Company!');
      }
    );
  }

  onSelect(job: Job) {
    this.selectedJob = job;
    this.router.navigate(['/jobDetail', this.selectedJob.jobId]);
  }

}
