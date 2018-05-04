import {Component} from '@angular/core';
import {Job} from '../models/job';
import construct = Reflect.construct;
import {JobService} from '../services/job.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html'
})

export class JobDetailComponent {
  job: Job;
  jobId: number;

  constructor ( private jobService: JobService, private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.jobId = Number.parseInt(params['id']);
    });
    this.jobService.getJobById(this.jobId).subscribe(
      data => console.log(this.job = data),
      error => console.log(error)
    );
  }
}
