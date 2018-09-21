export class User {
    id: number;
    fname: string;
    mname: string;
    lname: string;
    username: string;
    password: string;
    birthdate: string;
    email: string;
    usertype: UserType;
    hasIncompleteHomework: boolean | null;
    image: string;
    children: User[];
}

export enum UserType {
    student = 0,
    parent = 1
}