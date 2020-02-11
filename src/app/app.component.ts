import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
<<<<<<< HEAD

=======
  calendarPlugins = [dayGridPlugin];
>>>>>>> eaed9cf88a7751f33ffcb0f6f48644c29e4404e0
}
