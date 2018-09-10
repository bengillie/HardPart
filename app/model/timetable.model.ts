import { Time } from "@angular/common";

export class Lesson {
    id: number;
    userId: number;
    startDate: Date;
    endDate: Date;
    teacher: string;
    subject: string;
    class: string;
}

export class Period {
    name: string;
    startDate: Date;
    endDate: Date;
}