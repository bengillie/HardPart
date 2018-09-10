export class UserModel {
    id: number;
    username: string;
    password: string;
    birthdate: Date;   
    usertype: UserType; 
}

export enum UserType {
    student = 0,
    parent = 1
}

export class Parent {
    id: number;
    childId: number[];
}
