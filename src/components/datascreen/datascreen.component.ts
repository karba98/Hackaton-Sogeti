import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceUsers } from 'src/app/services/serviceusers.service';
import { Global } from 'src/global/global';
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
  constructor(private _service:ServiceUsers) { 
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
    let name:String = this.name.nativeElement.value;
    let firstname:String = this.firstname.nativeElement.value;
    let secondname:String = this.secondname.nativeElement.value;
    this._service.getUsers(Global.token,name,firstname,secondname).subscribe(response=>{
      console.log(response);
      let json = response; 
      for (var i in json) {
        let bank_money = json[i].bank_money;
        let job = json[i].job;
        let job_grade = json[i].job_grade;
        let identity = json[i].identity;
        let vehicles = json[i].vehicles;
        let licenses = json[i].licenses;
        let phone_calls = json[i].phone_calls;
        let validated = json[i].validated;
        let house_id = json[i].house_id;
        let phone_number = json[i].phone_number;
        this._service.getJobs(Global.token).subscribe(response=>{
          let objecttrabajo = response[job];
          let label = response[job].label;
          let name = response[job].name;
          let job_grades = response[job].job_grades;
          console.log(objecttrabajo);
          console.log(label);
        });
    }
      
    });

  }

}
