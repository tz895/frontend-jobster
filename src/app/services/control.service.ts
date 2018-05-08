import {Injectable} from '@angular/core';

@Injectable()
export class ControlService {

  public sidePanelControl = '1';

  constructor() {}

  subscribedComapanies() {
    this.sidePanelControl = '1';
    console.log(this.sidePanelControl);
  }

  applyJobs() {
    this.sidePanelControl = '2';
    console.log(this.sidePanelControl);
  }

  friends() {
    this.sidePanelControl = '3';
    console.log(this.sidePanelControl);
  }

  Noti() {
    this.sidePanelControl = '4';
  }

  Mess() {
    this.sidePanelControl = '5';
  }

  postedJobs() {
    this.sidePanelControl = '6';
  }

  postJob() {
    this.sidePanelControl = '7';
  }

  searchCandidate() {
    this.sidePanelControl = '8';
  }

  getControl() {
    return this.sidePanelControl;
  }
}
