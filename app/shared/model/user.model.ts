export class User {
    id: number;
    fname: string;
    mname: string;
    lname: string;
    username: string;
    password: string;
    birthdate: string;
    phoneprimary: string;
    phonesecondary: string;
    emailprimary: string;
    emailsecondary: string;
    isfirsttime: boolean;
    usertype: UserType;
    hasIncompleteHomework: boolean | null;
    image: string;
    children: User[];
    lastpwupdate: Date;
    lastlogin: Date;
}

export enum UserType {
    student = 0,
    parent = 1
}