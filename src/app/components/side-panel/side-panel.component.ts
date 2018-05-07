import {Component} from '@angular/core';
import {ControlService} from '../../services/control.service';

@Component({
  selector:'side-panel',
  templateUrl: './side-panel.component.html'
})
export class SidePanelComponent {

  constructor(private controlService: ControlService) {}

  applyJobs() {
    this.controlService.applyJobs();
  }

  subscribedComapanies() {
    this.controlService.subscribedComapanies();
  }

  Noti() {
    this.controlService.Noti();
  }

  friends() {
    this.controlService.friends();
  }

  Mess() {
    this.controlService.Mess();
  }
}
