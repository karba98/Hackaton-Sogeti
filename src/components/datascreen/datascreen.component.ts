import { Component, OnInit } from '@angular/core';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-datascreen',
  templateUrl: './datascreen.component.html',
  styleUrls: ['./datascreen.component.scss']
})
export class DatascreenComponent implements OnInit {

  public empleados : Array<Number>
  authenticated:boolean
  constructor() { 
    this.authenticated=true;
    this.empleados = new Array<Number>();
  }

  ngOnInit(): void {
    for(let i=0;i<115;i++){
      this.empleados.push(1)
    }
  }

}
