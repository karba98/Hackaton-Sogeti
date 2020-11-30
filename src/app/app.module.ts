import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginscreenComponent } from '../components/loginscreen/loginscreen.component';
import { DatascreenComponent } from '../components/datascreen/datascreen.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ServiceUsers} from './../app/services/serviceusers.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent,
    DatascreenComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports:[DatascreenComponent],
  providers: [ServiceUsers],
  bootstrap: [AppComponent,DatascreenComponent]
})
export class AppModule { }
