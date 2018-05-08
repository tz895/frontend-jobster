import {Job} from '../../models/job';
import {Router} from '@angular/router';
import {JobService} from '../../services/job.service';
import {Component} from '@angular/core';

@Component({
  selector: 'posted-jobs',
  templateUrl: './posted-jobs.component.html'
})
export class PostedJobsComponent {
  job: Job;
  jobs: Job[] = [];
  selectedJob: Job;

  constructor (private jobService: JobService, private router: Router) {
    this.jobService.getPostedJobs().subscribe(
      data => {
        this.jobs = data;
      },
      error => console.log(error)
    );
  }

  onSelect(job: Job) {
    this.selectedJob = job;
    this.router.navigate(['/jobDetail', this.selectedJob.jobId]);
  }

  delete(jobId: number) {
    this.jobService.deleteJob(jobId).subscribe(
      data => alert('Delete successfully!'),
      error => alert('Internal Server Error!')
    );
  }
}
