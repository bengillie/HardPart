export class UserModel {
    email: string;
    password: string;
    birthdate: Date;   
    usertype: UserType; 
}

export enum UserType {
    student = 0,
    parent = 1
}
