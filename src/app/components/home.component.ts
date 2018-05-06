import { Component } from '@angular/core';
import {SidePanelComponent} from './side-panel.component';
import {ControlService} from '../services/control.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private controlService: ControlService) {
  }

}
