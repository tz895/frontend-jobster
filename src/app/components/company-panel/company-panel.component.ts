import {Component} from '@angular/core';
import {ControlService} from '../../services/control.service';

@Component({
  selector:'company-panel',
  templateUrl: './company-panel.component.html'
})
export class CompanyPanelComponent {

  constructor(private controlService: ControlService) {
    this.controlService.postedJobs();
  }

  postedJobs() {
    this.controlService.postedJobs();
  }

  postJob() {
    this.controlService.postJob();
  }

  searchCandidate() {
    this.controlService.searchCandidate();
  }

}
