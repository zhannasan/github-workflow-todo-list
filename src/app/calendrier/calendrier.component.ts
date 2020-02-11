import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  public minDate: Date = new Date ('05/07/2020');
  public maxDate: Date = new Date ('08/27/2020');
  public value: Date = new Date ('05/16/2020');
  constructor() {}

  ngOnInit() {
  }

}
