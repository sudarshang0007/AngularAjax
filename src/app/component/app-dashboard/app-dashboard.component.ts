import { Component } from '@angular/core';
import { importantLinks, academicLinks } from '../../constant/implinks.constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent {
  Totaldate = { day: '', date: '', month: '', year: '', time: '' }

  readonly importantLinks;
  readonly academicLinks = academicLinks;
  constructor() {
    this.importantLinks = importantLinks;
  }
}
