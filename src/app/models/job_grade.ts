export class Job_grade{

    grade: number;
    salary: number;
    skin_male: any[];
    skin_female: any[];
    label: string;
    name: string;
    job_name: string;

    constructor(
        grade: number,
        salary: number,
        skin_male: any[],
        skin_female: any[],
        label: string,
        name: string,
        job_name: string
    ){
       this.grade = grade;
       this.salary = salary;
       this.skin_male = skin_male;
       this.skin_female =skin_female;
       this.label = label;
       this.name =name;
       this.job_name = job_name;
    }

    
}