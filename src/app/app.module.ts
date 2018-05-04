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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    JobListComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    RegisterService,
    LoginService,
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
