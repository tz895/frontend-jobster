import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ModuleWithProviders} from '@angular/core';
import {JobListComponent} from './components/job-list/job-list.component';
import {JobDetailComponent} from './components/job-detail/job-detail.component';
import {StudentDetailComponent} from './components/student-detail/student-detail.component';
import {Company} from './models/company';
import {CompanyDetailComponent} from './components/company-detail/company-detail.component';
import {CompanyListComponent} from './components/company-list/company-list.component';
import {StudentListComponent} from './components/student-list.component/student-list.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'jobList',
    component: JobListComponent
  },
  {
    path: 'jobDetail/:id',
    component: JobDetailComponent
  },
  {
    path: 'studentDetail/:id',
    component: StudentDetailComponent
  },
  {
    path: 'companyDetail/:id',
    component: CompanyDetailComponent
  },
  {
    path: 'companyList',
    component: CompanyListComponent
  },
  {
    path: 'studentList',
    component: StudentListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
