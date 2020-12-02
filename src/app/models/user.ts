import { Vehicle } from './vehicle';
import{Identity} from './identity'


export class User {
    constructor(
        identifier: string,
        identity: Identity,
        job: string,
        job_grade: number,
        bank_money: number,
        phone_number: string,

        licenses: Map<String,String>,
    
        phone_calls: any[],
    
        validated: boolean,
        house_id: String,

        vehicles: Map<String,Vehicle>
    ){}
}



