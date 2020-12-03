import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-datascreen',
  templateUrl: './datascreen.component.html',
  styleUrls: ['./datascreen.component.scss']
})
export class DatascreenComponent implements OnInit {

  @ViewChild('name') name :ElementRef;
  @ViewChild('firstname') firstname :ElementRef;
  @ViewChild('secondname') secondname :ElementRef;
  public empleados : Array<Number>
  authenticated:boolean
  constructor() { 
    this.authenticated=true;
    this.empleados = new Array<Number>();
    this.name = ElementRef.prototype;
    this.firstname = ElementRef.prototype;
    this.secondname = ElementRef.prototype;
  }

  ngOnInit(): void {
    for(let i=0;i<3;i++){
      this.empleados.push(1)
    }
  }
  search(){
    console.log(this.name.nativeElement.value);
    console.log(this.firstname.nativeElement.value);
    console.log(this.secondname.nativeElement.value);

  }

}
