import {Component} from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../services/job.service';
import {Router} from '@angular/router';


@Component({
  selector: 'applied-jobs',
  templateUrl: './applied-jobs.component.html'
})
export class AppliedJobsComponent {
  job: Job;
  jobs: Job[] = [];
  selectedJob: Job;

  constructor (private jobService: JobService, private router: Router) {
    this.jobService.getAppliedJobs().subscribe(
      data => {
        data.forEach(element => {
          // console.log(element.pk.job);
          // console.log('-----------');
          this.job = element.pk.job;
          this.jobs.push(this.job);
        });
      },
      error => console.log(error)
    );
  }

  onSelect(job: Job) {
    this.selectedJob = job;
    this.router.navigate(['/jobDetail', this.selectedJob.jobId]);
  }
}
