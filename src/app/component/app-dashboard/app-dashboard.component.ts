import { Component } from '@angular/core';
import { importantLinks } from '../../constant/implinks.constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent {
  Totaldate = { day: '', date: '', month: '', year: '', time:'' }

  readonly importantLinks ;
  constructor(){
    this.importantLinks=importantLinks;
  }
}
