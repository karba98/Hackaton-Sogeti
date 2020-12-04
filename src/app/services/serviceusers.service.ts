
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

    getJobs(accesstoken){
        let request = "/jobs";
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'access-token':accesstoken,
            'Access-Control-Allow-Origin':'*','Vary':'Origin'});

        return this._httpService.get(this.url+request,{headers:headers});
    }
    getUsers(accesstoken,name,firstname,secondname){
        let request = "/users";
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'access-token':accesstoken,
            'name':name,
            'firstname': firstname,
            'secondname': secondname,
            'Access-Control-Allow-Origin':'*','Vary':'Origin'});
            
        return this._httpService.get(this.url+request,{headers:headers});
    }

    login (user, password):Observable <any>{
        let request = "/authenticate";
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'user':user,
            'password':password,
            'Access-Control-Allow-Origin':'*','Vary':'Origin'});        
        console.log(headers);

        return this._httpService.post(this.url+request,null,{headers:headers});
    }
}