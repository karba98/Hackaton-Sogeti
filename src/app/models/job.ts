import { Job_grade } from './job_grade';
export class Job{
    constructor(
        label:String,
        name:String,
        job_grades:Map<String,Job_grade>
    ){}
}