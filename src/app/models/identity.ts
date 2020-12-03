export class Identity {
    name: string;
    firstname: string;
    secondname: string;
    sex: string;
    dateofbirth: string;
    height: string;
    constructor(
        name: string,
        firstname: string,
        secondname: string,
        sex: string,
        dateofbirth: string,
        height: string
    ){
        this.name = name;
        this.firstname =  firstname;
        this.secondname = secondname;
        this.sex = sex.toUpperCase();
        this.dateofbirth =  dateofbirth;
        this.height = height;
    }
}