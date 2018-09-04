import { Time } from "@angular/common";

export class Lessons {
    userid: number;
    date: Date;
    time: Time;
    teacher: string;
    subject: string;
    class: string;
}

export class Periods {
    name: string;
    date: Date;
    time: Time;
}