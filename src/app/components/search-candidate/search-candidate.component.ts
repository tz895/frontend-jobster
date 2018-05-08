import {Student} from '../../models/student';
import {Router} from '@angular/router';
import {StudentService} from '../../services/student.service';
import {Component} from '@angular/core';
import {JobService} from '../../services/job.service';
import {Job} from '../../models/job';

@Component({
  selector: 'search-candidate',
  templateUrl: './search-candidate.component.html'
})
export class SearchCandidateComponent {
  private model = {'major': '', 'gpa': '', 'university': '', 'keyword': ''};
  students: Student[];
  student: Student;
  selectedStudent: Student;
  qualifiedCandidate;
  jobs: Job[] = [];
  thisJob: number;
  pushed = false;

  constructor (private studentService: StudentService, private jobService: JobService, private router: Router) {
    this.studentService.getStudents().subscribe(
      data => this.students = data,
      error => console.log(error)
    );
    this.jobService.getPostedJobs().subscribe(
      data => {
        console.log(this.jobs = data);
      },
      error => console.log(error)
    );
  }

  onSearch() {

    this.qualifiedCandidate = this.filterByMajor(this.students, this.model.major);
    this.qualifiedCandidate = this.filterByUniversity(this.qualifiedCandidate, this.model.university);
    this.qualifiedCandidate = this.filterByResume(this.qualifiedCandidate, this.model.keyword);
    this.qualifiedCandidate = this.filterByGpa(this.qualifiedCandidate, this.model.gpa);
    }

  filterByMajor(data, s) {
    return data.filter(e => e.major.includes(s));
  }

  filterByUniversity(data, s) {
    return data.filter(e => e.university.includes(s));
  }

  filterByResume(data, s) {
    return data.filter(e => String(e.resume).includes(s));
  }

  filterByGpa(data, s) {
    return data.filter(e => e.gpa >= s);
  }


  onSelect(student: Student) {
    this.selectedStudent = student;
    this.router.navigate(['/studentDetail', this.selectedStudent.studentId]);
  }

  pushJob() {
    for (this.student of this.qualifiedCandidate) {
      this.jobService.pushJob(this.thisJob, this.student.studentId)
        .subscribe(
          data => {},
          error => {
            console.log(error);
            alert('already pushed!');
          }
        );
    }
    this.pushed = true;
  }
}
