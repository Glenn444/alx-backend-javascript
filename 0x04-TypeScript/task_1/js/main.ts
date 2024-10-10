import { Teacher } from "../main";


interface Directors extends Teacher {
    numberOfReports: number;
}

//2
const director1:Directors = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "New York",
    degree: "Bachelor's",
    subjectsTaught: ["Math", "Science", "English"],
    numberOfReports: 100
}

console.log(director1);

//3
interface printTeacherFunc {
    (firstName: string, lastName: string): string;
}
const printTeacher:printTeacherFunc = (firstName:string,lastName:string)=>{
    return `${firstName.charAt(0)}. ${lastName}`
}

console.log(printTeacher("John", "Doe"));

//4
interface StudentConstructor {
    firstName: string;
    lastName:string;
}

interface StudentClass{
    workOnHomework():string;
    displayName():string;
}

class StudentClass implements StudentClass{
    firstname:string;
    lastname:string;
    constructor({firstName, lastName}:StudentConstructor){
        this.firstname = firstName;
        this.lastname = lastName;
    }

    workOnHomework() : string{
        return 'Currently working'
    }
    displayName() : string{
        return `${this.firstname}`
    }
}