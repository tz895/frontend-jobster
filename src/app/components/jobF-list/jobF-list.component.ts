import {Component} from '@angular/core';
import {JobService} from '../../services/job.service';
import {Router} from '@angular/router';
import {Student} from '../../models/student';
import {Job} from '../../models/job';


@Component({
  selector: 'jobF-list',
  templateUrl: './jobF-list.component.html'
})
export class JobFComponent {
  job: Job;
  jobs: Job[] = [];
  senders: Student[] = [];
  sender: Student;
  myarray: String[] = [];
  status: String[] = [];
  selectedJob: Job;
  selectedStudent: Student;

  constructor(private jobService: JobService, private router: Router) {
    this.jobService.getForwardJobs().subscribe(
      data => {
        data.forEach(element => {
          this.job = element.pk.job;
          this.sender = element.pk.sender;
          this.jobs.push(this.job);
          this.senders.push(this.sender);
          console.log(element.forward_time);
          this.myarray.push(element.forward_time);
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

  onSelectProfile(student: Student) {
    this.selectedStudent = student;
    this.router.navigate(['/studentDetail', this.selectedStudent.studentId]);
  }
}
