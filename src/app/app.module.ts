import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListerTodosComponent } from './lister-todos/lister-todos.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { MenuComponent } from './menu/menu.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [
    AppComponent,
    ListerTodosComponent,
    CalendrierComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule, CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
