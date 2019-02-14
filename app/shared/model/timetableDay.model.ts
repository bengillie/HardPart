import { DayOfWeek } from './dayOfWeek.model';
import { Period } from './period.model';

export class TimetableDay {
	date: Date;
	day: DayOfWeek;
	dayName: string;
	events: Array<Event>;
	periods: Array<Period>;

	public constructor(date: Date, dayOfweek: DayOfWeek) {
		this.date = new Date(date);
		this.day = dayOfweek;
		this.events = new Array<Event>();
		this.periods = new Array<Period>();
	}
}
