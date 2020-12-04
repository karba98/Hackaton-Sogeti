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
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-datascreen',
  templateUrl: './datascreen.component.html',
  styleUrls: ['./datascreen.component.scss']
})
export class DatascreenComponent implements OnInit {

  @ViewChild('name') name :ElementRef;
  @ViewChild('firstname') firstname :ElementRef;
  @ViewChild('secondname') secondname :ElementRef;

  public users:Array<User>;
  public jobs : Array<Job>;

  authenticated:boolean
  constructor(private _service:ServiceUsers) { 
    this.authenticated=true;

    this.name = ElementRef.prototype;
    this.firstname = ElementRef.prototype;
    this.secondname = ElementRef.prototype;
    this.users = new Array<User>();
    this.jobs = new Array<Job>();
  }

  ngOnInit(): void {
   
  }
  search(){
    //PRIMERO OBTENEMOS JOBS y actualizamos la lista
    this.users.splice(0,this.users.length)
    this.getJobs();
 
    let name:String = this.name.nativeElement.value;
    let firstname:String = this.firstname.nativeElement.value;
    let secondname:String = this.secondname.nativeElement.value;


    this.getUser(name,firstname,secondname);
  }
  getUser(name,firstname,secondname){
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

        let userJob:Job;
        //let userJobGrade:Job_grade = null;

        for(let j of this.jobs){
          if(j.name == job){
            for (let elem of Object.values(j.Job_grades)) {
              let jobgradeObject = elem as Job_grade;
              if(jobgradeObject.grade ==job_grade){
              }
              userJob = new Job(j.label,j.name,null,jobgradeObject);
              console.log(userJob);
            }
          }
        }

        let useridentity:Identity = new Identity(
          identity.name,
          identity.firstname,
          identity.secondname,
          identity.sex,
          identity.dateofbirth,
          identity.height
          );
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
          useridentity,
          userJob,
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
  getJobs() {

    this.jobs.splice(0,this.jobs.length);

    let userJob:Job;
    this._service.getJobs(Global.token).subscribe(response=>{

      for(var i in response){
         let objecttrabajo = response[i];//filtro de job
        let label = objecttrabajo.label;
        let name = objecttrabajo.name;
        let job_grades = objecttrabajo.job_grades;
        let JobGrades:Array<Job_grade> = new Array<Job_grade>();

        for (let elem of Object.values(job_grades)) {
          let jobgradeObject = elem as Job_grade;
          JobGrades.push(jobgradeObject);
        }
        userJob = new Job(label,name,JobGrades,null);
        this.jobs.push(userJob);
      
    }},error=>{//error de peticion job

    });
    return userJob;
  }

}
