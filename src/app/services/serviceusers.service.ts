
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './../../global/global';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class ServiceUsers {

    private url: string;
    constructor(private _httpService:HttpClient){
        this.url=Global.url;
    }
    
    jobs(tokenjobs){
        console.log(tokenjobs);
    }
    users(tokenusers){
        console.log(tokenusers);
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