import { Vehicle } from './vehicle';
import { Job } from './job';
import{Identity} from './identity'


export class User {
    identifier: string;
    identity: Identity;
    job: Job;
    bank_money: number;
    phone_number: string;
    licenses: Map<String,String>;
    phone_calls: any[];
    validated: boolean;
    house_id: String;

    vehicles: Map<String,Vehicle>
    constructor(
        identifier: string,
        identity: Identity,
        job: Job,
        bank_money: number,
        phone_number: string,
        licenses: Map<String,String>,
        phone_calls: any[],
        validated: boolean,
        house_id: String,
        vehicles: Map<String,Vehicle>
    ){
        this.identifier = identifier;
        this.identity = identity;
        this.job = job;
        this.bank_money = bank_money
        this.phone_number = phone_number;
        this.licenses = licenses;
        this.phone_calls =phone_calls;
        this.validated = validated;
        this.house_id = house_id;
        this.vehicles=vehicles;
    }
}



