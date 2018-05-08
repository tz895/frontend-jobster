import {Component} from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../services/job.service';
import {ActivatedRoute, Params} from '@angular/router';
import {StudentService} from '../../services/student.service';
import {Student} from '../../models/student';


@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html'
})

export class JobDetailComponent {
  job: Job;
  jobId: number;
  isApplied: boolean;
  student: Student;
  students: Student[] = [];
  thisStudent: number;
  isStudent: boolean;

  constructor ( private jobService: JobService, private studentService: StudentService, private route: ActivatedRoute) {
    if (localStorage.getItem('type') === 'student') {
      this.isStudent = true;
    } else {
      this.isStudent = false;
    }
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
    this.studentService.getFriends().subscribe(
      data => {
        data.forEach(element => {
          this.student = element.pk.friend;
          this.students.push(this.student);
        });
      },
      error => console.log(error)
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

  forwardJob() {
    this.jobService.forwardJob(this.jobId, this.thisStudent).subscribe(
      data => {
        alert('Forward successfully');
        this.isApplied = false;
      },
      error => {
        alert('Already forward this Job to your friend!');
      }
    );
  }
}
