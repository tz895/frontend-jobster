import {Component} from '@angular/core';
import {Job} from '../models/job';
import {JobService} from '../services/job.service';
import {Router} from '@angular/router';

@Component({
  selector: 'job-list',
  templateUrl: './job-list.component.html'
})
export class JobListComponent {
  jobs: Job[];
  selectedJob: Job;

  constructor (private jobService: JobService, private router: Router) {
    this.jobService.getJobs().subscribe(
      data => console.log(this.jobs = data),
      error => console.log(error)
    );
  }

  onSelect(job: Job) {
    this.selectedJob = job;
    this.router.navigate(['/jobDetail', this.selectedJob.jobId]);
  }
}
