import { stringify } from 'querystring';

export class Vehicle{
    model:String;
    plate:String;
    constructor(
        model:String,
        plate:String
    ){
        this.model=model;
        this.plate=plate;
    }
}