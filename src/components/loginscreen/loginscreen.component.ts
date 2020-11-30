import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  public active:boolean;
  @ViewChild('user') user:ElementRef;
  @ViewChild('pass') pass:ElementRef;
  public token :string;
  constructor() { 
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
    this.active=true;
    
    console.log(this.user.nativeElement.value);
    console.log(this.pass.nativeElement.value);

    //Guardamos el token obtenido del servide
    this.token ="";

    //Mostramos los iconos y damos acceso a p2 (la pagina principal de busqueda de usuarios)
    document.getElementById('uno').style.visibility="visible";
    document.getElementById('dos').style.visibility="visible";
    document.getElementById('p2').style.visibility="visible";
  
  }

}
