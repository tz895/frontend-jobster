import { Component } from '@angular/core';
import {ControlService} from '../../services/control.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent {
  type;
  constructor(private controlService: ControlService) {
    this.type = localStorage.getItem('type');
  }

}
