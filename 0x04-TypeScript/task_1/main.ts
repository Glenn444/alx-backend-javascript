interface Teacher{
    readonly firstName: string;
    readonly lastName:string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName:string]: any;
}
const teacher1:Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "New York",
    degree: "Bachelor's",
    subjectsTaught: ["Math", "Science", "English"]
}

console.log(teacher1);
