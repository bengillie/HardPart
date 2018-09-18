export class User {
    id: number;
    fname: string;
    mname: string;
    lname: string;
    username: string;
    parentid: number | null;
    birthdate: Date;   
    usertype: UserType;
}

export enum UserType {
    student = 0,
    parent = 1
}