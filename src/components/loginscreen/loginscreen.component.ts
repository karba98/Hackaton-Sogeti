import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceUsers } from 'src/app/services/serviceusers.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  public active:boolean;
  @ViewChild('user') user:ElementRef;
  @ViewChild('pass') pass:ElementRef;

  constructor(private _service:ServiceUsers) { 
    this.user = ElementRef.prototype;
    this.pass = ElementRef.prototype;
  }

  ngOnInit(): void {
    this.active=false;
    document.getElementById('uno').style.visibility="hidden";
    document.getElementById('dos').style.visibility="hidden";
    document.getElementById('p2').style.visibility="hidden";
  }
  login(){
    //Damos acceso a las paginas
    
    var usuario = this.user.nativeElement.value;
    var password = this.pass.nativeElement.value;

    console.log(usuario+"  "+password);
    this._service.login(usuario,password).subscribe(response=>{
      if(response.auth==true){
        this.active;
         //Mostramos los iconos y damos acceso a p2 (la pagina principal de busqueda de usuarios)
        document.getElementById('uno').style.visibility="visible";
        document.getElementById('dos').style.visibility="visible";
        document.getElementById('p2').style.visibility="visible";
      }else{

      }
    },error=>{

    });

   
  
  }

}
