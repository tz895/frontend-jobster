import {Injectable} from '@angular/core';

@Injectable()
export class ControlService {

  public sidePanelControl = '1';

  constructor() {}

  allJobs() {
    this.sidePanelControl = '1';
    console.log(this.sidePanelControl);
  }

  applyJobs() {
    this.sidePanelControl = '2';
    console.log(this.sidePanelControl);
  }

  Noti() {
    this.sidePanelControl = '3';
  }

  Mess() {
    this.sidePanelControl = '4';
  }

  getControl() {
    return this.sidePanelControl;
  }
}
