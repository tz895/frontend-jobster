import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home.component';
import {RegisterComponent} from './components/register.component';
import {LoginComponent} from './components/login.component';
import {ModuleWithProviders} from '@angular/core';
import {JobListComponent} from './components/job-list.component';


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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
