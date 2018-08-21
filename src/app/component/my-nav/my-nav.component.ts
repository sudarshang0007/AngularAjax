import { Component } from '@angular/core';
import { menuItems } from '../../constant/menu.constant';
import { applicationName } from '../../constant/applicationDetails.constant';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {

  menuList = [];
  readonly applicationName = applicationName;
  constructor() {
    this.menuList = menuItems;
  }




}
