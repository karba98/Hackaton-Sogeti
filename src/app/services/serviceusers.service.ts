
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './../../global/global';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class ServiceUsers {

    private token:string;
    private url: string;
    constructor(private _httpService:HttpClient){
        this.url=Global.url;
        this.token="";
    }

    login (user, password):Observable <any>{
        let request = "/authenticate";
        let headers = new HttpHeaders();
        headers.set("password",password);
        headers.set("user",user);
        return this._httpService.post(this.url+request,{headers:headers});
    }
}s