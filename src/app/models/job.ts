import { Job_grade } from './job_grade';
export class Job{
    label :String;
    name:String;
    Job_grades:Array<Job_grade>;
    Job_grade:Job_grade
    constructor(
        label:String,
        name:String,
        job_grades:Array<Job_grade>,
        Job_grade:Job_grade
    ){
        this.label= label;
        this.name=name;
        this.Job_grades=job_grades;
        this.Job_grade=Job_grade;
    }
}