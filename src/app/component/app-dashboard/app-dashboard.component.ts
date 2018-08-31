import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent {
  Totaldate = { day: '', date: '', month: '', year: '', time:'' }

  constructor(){
 /*    const newDate =new Date();

    this.Totaldate.time =newDate.toLocaleTimeString().toString();
    console.log(newDate.toLocaleTimeString());
    console.log(newDate.toLocaleDateString());
 */

    
  }
}
