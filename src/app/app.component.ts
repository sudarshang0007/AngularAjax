import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: any[];
  title = 'app';
  year: string;

  constructor() {
    this.images = [];
    this.year = new Date().getFullYear().toString();
  }
