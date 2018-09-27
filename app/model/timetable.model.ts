export class Lesson {
    id: number;
    userId: number;
    startDate: Date;
    endDate: Date;
    teacher: string;
    subject: string;
    class: string;
    break: boolean;
}

export class Period {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
}

export enum Subject {
    art = "Art and Design",
    computing = "Computing",
    design = "Design and Technology",
    english = "English",
    geography = "Geography",
    history = "History",
    languages = "Languages",
    math = "Mathematics",
    music = "Music",
    pe = "Physical Education",
    reg = "Registration",
    science = "Science", 
}

export class TimetableTab {
    date: Date;
    lessons: Lesson[];
} 