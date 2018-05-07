import {Component} from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../services/job.service';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html'
})

export class JobDetailComponent {
  job: Job;
  jobId: number;
  isApplied: boolean;

  constructor ( private jobService: JobService, private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.jobId = Number.parseInt(params['id']);
    });
    this.jobService.getJobById(this.jobId).subscribe(
      data => console.log(this.job = data),
      error => console.log(error)
    );
    this.jobService.checkApply(this.jobId).subscribe(
      data => {
        if (data === null || data === '') {
          this.isApplied = true;
        } else {
          this.isApplied = false;
        }
      },
      error => {}
    );
  }

  applyJob() {
    this.jobService.applyJob(this.jobId).subscribe(
      data => {
        alert('Job applied!');
        this.isApplied = false;
      },
      error => {
        alert('Already apply this Job!');
      }
    );
  }
}
