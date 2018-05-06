import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from './components/register.component';
import {RegisterService} from './services/register.service';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './components/login.component';
import {LoginService} from './services/login.service';
import {NavBarComponent} from './components/nav-bar.component';
import {routing} from './app.routing';
import {JobListComponent} from './components/job-list.component';
import {JobService} from './services/job.service';
import {JobDetailComponent} from './components/job-detail.component';
import {StudentRegisterComponent} from './components/student-register.component';
import {CompanyRegisterComponent} from './components/company-register.component';
import {SidePanelComponent} from './components/side-panel.component';
import {AppliedJobsComponent} from './components/applied-jobs.component';
import {ControlService} from './services/control.service';
import {JobFComponent} from './components/jobF-list.component';
import {StudentService} from './services/student.service';
import {StudentDetailComponent} from './components/student-detail.component';
import {NotificationComponent} from './components/notification.component';

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
    NotificationComponent
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
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
