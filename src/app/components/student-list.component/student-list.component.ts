import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {Company} from '../../models/company';
import {CompanyService} from '../../services/company.service';
import {Student} from '../../models/student';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
  students: Student[];
  selectedStudent: Student;

  constructor (private studentService: StudentService, private router: Router) {
    this.studentService.getStudents().subscribe(
      data => console.log(this.students = data),
      error => console.log(error)
    );
  }

  onSelect(student: Student) {
    this.selectedStudent = student;
    this.router.navigate(['/studentDetail', this.selectedStudent.studentId]);
  }
}
