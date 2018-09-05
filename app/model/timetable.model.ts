import { Time } from "@angular/common";

export class Lessons {
    userid: number;
    startDate: Date;
    endDate: Date;
    teacher: string;
    subject: string;
    class: string;
}

export class Periods {
    name: string;
    startDate: Date;
    endDate: Date;
}