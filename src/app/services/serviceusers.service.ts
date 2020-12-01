
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './../../global/global';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class ServiceUsers {

    private stringtoken:string;
    private url: string;
    constructor(private _httpService:HttpClient){
        this.url=Global.url;
        this.stringtoken = "";
    }
    
    setToken(token){
        this.stringtoken =token;
        console.log(this.stringtoken);
        return token;
    }
    jobs(){
        
    }
    users(){

    }

    login (user, password):Observable <any>{
        console.log(user+"  "+password);
        let request = "/authenticate";
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'user':user,
            'password':password,
            'Access-Control-Allow-Origin':'*','Vary':'Origin'});
        console.log("Entrando al servicio");

        console.log(headers);

        return this._httpService.post(this.url+request,null,{headers:headers});
    }
}