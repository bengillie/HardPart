export class Homework {
    id: number;
    studentId: number;
    subject: string;
    task: string;
    createdBy: string;
    createdDate: Date;
    attachedFiles: boolean;
    dueDate: Date;
    status: HomeworkStatus;
}

export enum HomeworkStatus {
    todo = "TODO",
    done = "DONE",
    removed = "REMOVED",
}