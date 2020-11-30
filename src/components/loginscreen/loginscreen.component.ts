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
        this.active=true;
        //Mostramos los iconos y damos acceso a p2 (la pagina principal de busqueda de usuarios)
        document.getElementById('uno').style.visibility="visible";
        document.getElementById('dos').style.visibility="visible";
        document.getElementById('p2').style.visibility="visible";
        //document.getElementById('p2').style.transform= 'translateX(-90%)';
        //HAY QUE HACER AQUI UN ROUTERLINK O HREF A #T2 PARA QUE SE ACTIVE LA ANIMACION
      }else{
        document.getElementById('userimp').style.border = '1px solid #cc0033';
        document.getElementById('passimp').style.border = '1px solid #cc0033';
        let br = document.createElement('br');
        let info = document.createElement('a');
        info.style.color='red';
        info.style.fontSize="15px"
        info.innerText="*Usuario o contraseña incorrectos";
        document.getElementById('loginformh').appendChild(br);
        document.getElementById('loginformh').appendChild(info);
      }
    },error=>{
      
    });

   
  
  }

}
