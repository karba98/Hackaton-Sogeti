import { Global } from './../../global/global';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimeoutError } from 'rxjs';
import { ServiceUsers } from 'src/app/services/serviceusers.service';


@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {
  token:string;
  public active:boolean;
  disable:boolean;
  @ViewChild('user') user:ElementRef;
  @ViewChild('pass') pass:ElementRef;

  constructor(private _service:ServiceUsers) { 
    this.user = ElementRef.prototype;
    this.pass = ElementRef.prototype;
    this.disable=false;
  }

  ngOnInit(): void {
    //Ocultamos el menu y la pagina de datos de users
    this.active=false;
    document.getElementById('uno').style.visibility="hidden";
    document.getElementById('dos').style.visibility="hidden";
    document.getElementById('p2').style.visibility="hidden";
  }
 
  login(){
    var usuario = this.user.nativeElement.value;
    var password = this.pass.nativeElement.value;

    this.disable=true;
    if(usuario=="" || password==""){
      this.setErrorMessage("*Usuario o contraseña incorrectos");
    }else{
      this.disable=false;
      this.subscribeToAuth(usuario,password);
    }
    
  
  }
  setErrorMessage(error:string){
      document.getElementById('userimp').style.border = '1px solid #cc0033';
      document.getElementById('passimp').style.border = '1px solid #cc0033';
      document.getElementById('bicon').className="entypo-lock";
      document.getElementById('info').innerText=error;
      this.pass.nativeElement.value="";
      this.disable=false;
  }
  subscribeToAuth(usuario,password){
    document.getElementById('bicon').className="fa fa-circle-o-notch fa-spin";
    this._service.login(usuario,password).subscribe(response=>{

      if(response.auth==true){
        this.active=true; //Damos acceso al menu pricipal

        Global.token=response.token;
        
        //Mostramos los iconos y damos acceso a p2 (la pagina principal de busqueda de usuarios)
        document.getElementById('uno').style.visibility="visible";
        document.getElementById('dos').style.visibility="visible";
        document.getElementById('p2').style.visibility="visible";
        //document.getElementById('p2').style.transform= 'translateX(-90%)';
        //HAY QUE HACER AQUI UN ROUTERLINK O HREF A #T2 PARA QUE SE ACTIVE LA ANIMACION
       
      }else{
        this.setErrorMessage("*Usuario o contraseña incorrectos");
      }
    },error=>{
      this.setErrorMessage("*Error de conexión, inténtelo más tarde");
      
    });
  }

}
