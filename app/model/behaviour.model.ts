export class Behaviour {
    id: number;
    userId: number;
    subject: string;
    type: BehaviourType;
    score: number;
    date: Date;
}

export enum BehaviourType {
    homework = "Homework",
    disruption = "Disruption",
    organisation = "Organisation",
}