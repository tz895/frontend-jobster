import {Component} from '@angular/core';
import {JobService} from '../../services/job.service';
import {Router} from '@angular/router';
import {Student} from '../../models/student';
import {Job} from '../../models/job';
import {StudentService} from '../../services/student.service';


@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html'
})
export class RequestListComponent {
  senders: Student[] = [];
  sender: Student;
  myarray: String[] = [];
  status: String[] = [];
  selectedStudent: Student;

  constructor(private studentService: StudentService, private router: Router) {
    this.studentService.getRequests().subscribe(
      data => {
        data.forEach(element => {
          this.sender = element.pk.sender;
          this.senders.push(this.sender);
          this.myarray.push(element.request_time);
          this.status.push(element.status);
        });
      },
      error => console.log(error)
    );
  }

  onSelectProfile(student: Student) {
    this.selectedStudent = student;
    this.router.navigate(['/studentDetail', this.selectedStudent.studentId]);
  }

  requestRes(studentId: number, reps: number) {
    this.studentService.requestRes(studentId, reps).subscribe(
      data => {
        this.studentService.getRequests().subscribe(
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
