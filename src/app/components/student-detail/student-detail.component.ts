import {Component} from '@angular/core';
import {Student} from '../../models/student';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html'
})

export class StudentDetailComponent {
  student: Student;
  studentId: number;
  isFriend: boolean;
  isRequestSending: boolean;
  isYourProfile = false;

  constructor ( private studentServic: StudentService, private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.studentId = Number.parseInt(params['id']);
    });
    if (this.studentId === Number(localStorage.getItem('id')) && localStorage.getItem('type') === 'student') {
      console.log('...................');
      this.isYourProfile = true;
    } else {
      console.log('22222222222222222222');
    }
    this.studentServic.getStudentById(this.studentId).subscribe(
      data => console.log(this.student = data),
      error => console.log(error)
    );
    this.studentServic.checkRequest(this.studentId).subscribe(
      data => {
        if (data === null) {
          this.isRequestSending = true;
        } else {
          this.isRequestSending = false;
        }
      }
    );
    this.studentServic.checkIsFriend(this.studentId).subscribe(
      data => {
        if (data === null) {
          this.isFriend = true;
        } else {
          this.isFriend = false;
        }
      }
    );
  }


  sendRequest() {
    this.studentServic.sendRequest(this.studentId).subscribe(
      data => {
        alert('Request sent!');
        this.isRequestSending = false;
      },
      error => {
        alert('Already your friend!');
      }
    );
  }



}
