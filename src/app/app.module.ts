import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {JobListComponent} from './components/job-list/job-list.component';
import {JobDetailComponent} from './components/job-detail/job-detail.component';
import {StudentRegisterComponent} from './components/register/student-register/student-register.component';
import {CompanyRegisterComponent} from './components/register/company-register/company-register.component';
import {AppliedJobsComponent} from './components/applied-jobs/applied-jobs.component';
import {NotificationComponent} from './components/notification/notification.component';
import {StudentDetailComponent} from './components/student-detail/student-detail.component';
import {JobFComponent} from './components/jobF-list/jobF-list.component';
import {SidePanelComponent} from './components/side-panel/side-panel.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import {JobService} from './services/job.service';
import {LoginService} from './services/login.service';
import {RegisterService} from './services/register.service';
import {StudentService} from './services/student.service';
import {ControlService} from './services/control.service';
import {CompanyService} from './services/company.service';
import {CompanyListComponent} from './components/company-list/company-list.component';
import {CompanyDetailComponent} from './components/company-detail/company-detail.component';
import {StudentListComponent} from './components/student-list.component/student-list.component';
import {RequestListComponent} from './components/request-list/request-list.component';
import {FriendListComponent} from './components/friend-list/friend-list.component';
import {SubListComponent} from './components/sub-list/sub-list.component';
import {CompanyPanelComponent} from './components/company-panel/company-panel.component';
import {PostJobComponent} from './components/post-job/post-job.component';
import {PostedJobsComponent} from './components/posted-jobs/posted-jobs.component';
import {SearchCandidateComponent} from './components/search-candidate/search-candidate.component';
import {PushListComponent} from './components/push-list/push-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    JobListComponent,
    JobDetailComponent,
    StudentRegisterComponent,
    CompanyRegisterComponent,
    SidePanelComponent,
    AppliedJobsComponent,
    JobFComponent,
    StudentDetailComponent,
    NotificationComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    StudentListComponent,
    RequestListComponent,
    FriendListComponent,
    SubListComponent,
    CompanyPanelComponent,
    PostJobComponent,
    PostedJobsComponent,
    SearchCandidateComponent,
    PushListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
  ],
  providers: [
    RegisterService,
    LoginService,
    JobService,
    ControlService,
    StudentService,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
