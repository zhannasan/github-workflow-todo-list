import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListerTodosComponent } from './lister-todos/lister-todos.component';
import { CalendrierComponent } from './calendrier/calendrier.component';

@NgModule({
  declarations: [
    AppComponent,
    ListerTodosComponent,
    CalendrierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
