import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginscreenComponent } from '../components/loginscreen/loginscreen.component';
import { DatascreenComponent } from '../components/datascreen/datascreen.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent,
    DatascreenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports:[DatascreenComponent],
  providers: [],
  bootstrap: [AppComponent,DatascreenComponent]
})
export class AppModule { }
