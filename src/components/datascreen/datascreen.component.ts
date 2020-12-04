import { Vehicle } from './../../app/models/vehicle';
import { Job_grade } from './../../app/models/job_grade';
import { Job } from './../../app/models/job';
import { Identity } from './../../app/models/identity';
import { User } from './../../app/models/user';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceUsers } from 'src/app/services/serviceusers.service';
import { Global } from 'src/global/global';
import { fileURLToPath } from 'url';
import { JsonPipe } from '@angular/common';

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

  public users:Array<User>;
  authenticated:boolean
  constructor(private _service:ServiceUsers) { 
    this.authenticated=true;
    this.empleados = new Array<Number>();
    this.name = ElementRef.prototype;
    this.firstname = ElementRef.prototype;
    this.secondname = ElementRef.prototype;
    this.users = new Array<User>();
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
      let json = response; 
      for (var i in json) {
        let bank_money = json[i].bank_money;
        let job = json[i].job;
        
        let identifier = json[i].identifier;
        let job_grade = json[i].job_grade;
        let identity = json[i].identity;
        let vehicles = json[i].vehicles;
        let licenses = json[i].licenses;
        let phone_calls = json[i].phone_calls;
        let validated = json[i].validated;
        let house_id = json[i].house_id;
        let phone_number = json[i].phone_number;

        let userJOb:Job = this.getJob(job,job_grade);

        let userlicenses:Map<String,String> =new Map<String,String>()
        for(let elemKey of Object.keys(licenses)){
          for (let elemvalue of Object.values(licenses)) {
            userlicenses.set(elemKey,elemvalue.toString());
          }
        }
        //vehicles
        let userVehicles: Map<String,Vehicle> = new Map<String,Vehicle>();
        for(let elemKey of Object.keys(vehicles)){
          for (let elemvalue of Object.values(vehicles)) {
          let vehicle = elemvalue as Vehicle;
          let vehiclename = elemKey;
            userVehicles.set(vehiclename,vehicle);
          }
        }

        //juagor encontrado
        let jugador :User;
        jugador = new User(
          identifier,
          identity,
          userJOb,
          bank_money,
          phone_number,
          userlicenses,
          phone_calls,
          validated,
          house_id,
          userVehicles
        );

        this.users.push(jugador)
        console.log(jugador);
    }
      
    },error=>{//error de peticion user

    });

  }
  getJob(job: any,job_grade:any) {
    let userJob:Job;
    this._service.getJobs(Global.token).subscribe(response=>{

      let objecttrabajo = response[job];//filtro de job
      let label = objecttrabajo.label;
      let name = objecttrabajo.name;
      let job_grades = objecttrabajo.job_grades;

      
      
      //jobgrade
      let userJobGrade:Job_grade//lo que meteremos en objeto job
      for (let elem of Object.values(job_grades)) {
        let jobgradeObject = elem as Job_grade;//cada jobgrade de array job_grades
       if(jobgradeObject.grade ==job_grade){//si el numero grade es el mismo que el del user recibido
        userJobGrade = jobgradeObject;
        }

      } 
      //job
      userJob = new Job(label,name,userJobGrade);
      
    },error=>{//error de peticion job

    });
    return userJob;
  }

}
