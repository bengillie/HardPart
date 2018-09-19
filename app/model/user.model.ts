export class User {
    id: number;
    fname: string;
    mname: string;
    lname: string;
    username: string;
    password: string;
    parentid: number | null;
    birthdate: string;   
    usertype: UserType;
}

export enum UserType {
    student = 0,
    parent = 1
}