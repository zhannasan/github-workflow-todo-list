import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  public minDate: Date = new Date ('05/07/2020');
  public maxDate: Date = new Date ('08/27/2020');
  public value: Date = new Date ('05/16/2020');
}
