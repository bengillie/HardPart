export class Attendance {
    id: number;
    date: Date;
    isPresent: boolean;
    isLateAM: boolean;
    isLatePM: boolean;
    isAbsenceAuthorised: boolean | null;
}