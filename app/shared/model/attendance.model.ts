export class Attendance {
    id: number;
    date: Date;
    amMark: AttendanceMark;
    pmMark: AttendanceMark;
}

export enum AttendanceMark {
    present = 0xea10, 
    late = 0xe94d, 
    authorised = 0xe94e, 
    unauthorised = 0xe94f
}