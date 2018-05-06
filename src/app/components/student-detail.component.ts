import {Component} from '@angular/core';
import {Job} from '../models/job';
import construct = Reflect.construct;
import {JobService} from '../services/job.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Student} from '../models/student';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html'
})

export class StudentDetailComponent {
  student: Student;
  studentId: number;

  constructor ( private studentServic: StudentService, private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.studentId = Number.parseInt(params['id']);
    });
    this.studentServic.getStudentById(this.studentId).subscribe(
      data => console.log(this.student = data),
      error => console.log(error)
    );
  }

  sendRequest() {
    this.studentServic.sendRequest(this.studentId).subscribe(
      data => {
        alert('Request sent!');
      },
      error => {
        alert('Already your friend!');
      }
    );
  }

  checkIsFriend() {
    this.studentServic.getFriendList().subscribe(
      data => {

      }
    )
  }

}
