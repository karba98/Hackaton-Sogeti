
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

    login ():Observable <any>{
        let request = "/authenticate";
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._httpService.post(this.url+request,{headers:headers});
    }
}