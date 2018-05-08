import {Component} from '@angular/core';
import {JobService} from '../../services/job.service';
import {Job} from '../../models/job';
import {CompanyService} from '../../services/company.service';
import {Student} from '../../models/student';
import {Company} from '../../models/company';
import {Data} from '@angular/router';

@Component({
  selector: 'post-job',
  templateUrl: './post-job.component.html'
})

export class PostJobComponent {

  newJob: Job = new Job();
  thisCompany: Company = new Company();
  posted = false;
  due_time: Date;

  constructor (private jobService: JobService, private companyService: CompanyService) {}

  onSubmit() {
    // console.log('submit student test');
    // console.log(JSON.stringify(this.newStudent));
    this.companyService.getCompanyById(Number(localStorage.getItem('id')))
      .subscribe(
        data => {
          this.thisCompany = data;
          this.newJob.company = this.thisCompany;
          console.log(this.newJob.company);
          this.newJob.due_time = new Date(this.newJob.due_time).toISOString();
          this.newJob.post_time = new Date().toISOString();
          this.jobService.postJob(this.newJob)
            .subscribe(
              resp => {
                this.posted = true;
                this.newJob  = new Job();
              },
              error => console.log(error)
            );
        },
        error => console.log(error)
      );

  }

}
