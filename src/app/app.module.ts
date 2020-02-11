import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListerTodosComponent } from './lister-todos/lister-todos.component';
<<<<<<< HEAD
import { CalendrierComponent } from './calendrier/calendrier.component';
=======
import { MenuComponent } from './menu/menu.component';
>>>>>>> 04c656bc6b96cce8e0978cb3e7e0b968fe345ac6

@NgModule({
  declarations: [
    AppComponent,
    ListerTodosComponent,
<<<<<<< HEAD
    CalendrierComponent
=======
    MenuComponent
>>>>>>> 04c656bc6b96cce8e0978cb3e7e0b968fe345ac6
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
