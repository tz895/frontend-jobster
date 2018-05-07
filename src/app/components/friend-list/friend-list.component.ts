import {Component} from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../services/job.service';
import {Router} from '@angular/router';
import {Student} from '../../models/student';
import {StudentService} from '../../services/student.service';


@Component({
  selector: 'friend-list',
  templateUrl: './friend-list.component.html'
})
export class FriendListComponent {
  student: Student;
  students: Student[] = [];
  selectedStudent: Student;

  constructor (private studentService: StudentService, private router: Router) {
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

  onSelect(student: Student) {
    this.selectedStudent = student;
    this.router.navigate(['/studentDetail', this.selectedStudent.studentId]);
  }
}
