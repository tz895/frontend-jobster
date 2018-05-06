import {Component} from '@angular/core';
import {ControlService} from '../services/control.service';

@Component({
  selector:'side-panel',
  templateUrl: './side-panel.component.html'
})
export class SidePanelComponent {

  constructor(private controlService: ControlService) {}

  allJobs() {
    this.controlService.allJobs();
  }

  applyJobs() {
    this.controlService.applyJobs();
  }

  Noti() {
    this.controlService.Noti();
  }

  Mess() {
    this.controlService.Mess();
  }
}
