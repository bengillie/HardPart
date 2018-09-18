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

export enum Break {
    amBreak = "Morning Break",
    pmBreak = "Afternoon Break"
}