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
        //let job = json[i].job;
        let job = "bahamas";
        let identifier = json[i].identifier;
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

          //identity
          let jugadorIdentity:Identity;
          jugadorIdentity = new Identity(
            identity.name,
            identity.firstname,
            identity.secondname,
            identity.sex,
            identity.dateofbirth,
            identity.height
          );
          
          //jobgrade
          let jg:Job_grade;
          for (let elem of Object.values(job_grades)) {
            console.log(elem)

            //LO MARCA COMO ERROR
            //PERO FUNCIONA EN EL NAVEGADOR
            //Y CREA EL OBJECTO JOB_GRADE
            //WTF??????????!!!!!!!!!!!!!
           if(elem.grade ==job_grade){
                jg = new Job_grade(
                 elem.grade,
                 elem.salary,
                 elem.skin_male,
                 elem.skin_female,
                 elem.label,
                 elem.name,
                 elem.job_name
               );
               
            }
          } 
          console.log(jg)
          //job
          //licenses
          //vehicles
          
          

          //juagor encontrado
          let jugador :User;
          jugador = new User(
            identifier,
            identity,
            null,
            bank_money,
            phone_number,
            null,
            null,
            validated,
            house_id,
            null
          );
          
        },error=>{

        });
    }
      
    },error=>{

    });

  }

}
