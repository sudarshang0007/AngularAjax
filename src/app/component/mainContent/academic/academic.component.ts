import { Component, OnInit } from '@angular/core';
import { academicLinks } from '../../../constant/implinks.constant';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  readonly academicLinks= academicLinks;
  constructor() { }

  ngOnInit() {
  }

}
