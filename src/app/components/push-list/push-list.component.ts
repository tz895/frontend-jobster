import {Component} from '@angular/core';
import {JobService} from '../../services/job.service';
import {Router} from '@angular/router';
import {Job} from '../../models/job';
import {Company} from '../../models/company';


@Component({
  selector: 'push-list',
  templateUrl: './push-list.component.html'
})
export class PushListComponent {
  job: Job;
  jobs: Job[] = [];
  company: Company;
  myarray: String[] = [];
  status: String[] = [];
  selectedJob: Job;
  selectedCompany: Company;

  constructor(private jobService: JobService, private router: Router) {
    this.jobService.getPushJobs().subscribe(
      data => {
        data.forEach(element => {
          this.job = element.pk.job;
          this.jobs.push(this.job);
          this.myarray.push(element.push_time);
          this.status.push(element.status);
        });
      },
      error => console.log(error)
    );
  }
  onSelect(job: Job) {
    this.selectedJob = job;
    this.router.navigate(['/jobDetail', this.selectedJob.jobId]);
  }

  onSelectComapny(company: Company) {
    this.selectedCompany = company;
    this.router.navigate(['/companyDetail', this.selectedCompany.companyId]);
  }

  requestRes(jobId: number, reps: number) {
    this.jobService.requestRes(jobId, reps).subscribe(
      data => {
        this.jobService.getPushJobs().subscribe(
          res => {
            res.forEach(element => {
              this.status = [];
              this.status.push(element.status);
            });
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }
}
