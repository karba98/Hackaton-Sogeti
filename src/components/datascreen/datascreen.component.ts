import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fileURLToPath } from 'url';
import { ServiceUsers } from 'src/app/services/serviceusers.service';
import { Global } from './../../global/global';


@Component({
  selector: 'app-datascreen',
  templateUrl: './datascreen.component.html',
  styleUrls: ['./datascreen.component.scss']
})
export class DatascreenComponent implements OnInit {

  public empleados : Array<Number>
  authenticated:boolean
  constructor(private _service:ServiceUsers) { 
    this.authenticated=true;
    this.empleados = new Array<Number>();
  }

  ngOnInit(): void {
    for(let i=0;i<115;i++){
      this.empleados.push(1)
    }
    this._service.getUsers(Global.token).subscribe(response=>{
      console.log(response);
      console.log("hola");
    });
    this._service.getJobs(Global.token).subscribe(response=>{
      console.log(response);
      console.log("hola");
    });
  }
}
