import { Job_grade } from './job_grade';
export class Job{
    label :String;
    name:String;
    Job_grade:Job_grade;
    constructor(
        label:String,
        name:String,
        job_grades:Job_grade
    ){
        this.label= label;
        this.name=name;
        this.Job_grade=job_grades;
    }
}