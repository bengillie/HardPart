import { Css } from './css.model';

export class Period {
	schoolId: string;
	periodId: string;
	periodName: string;
	periodNameShort: string;
	day: string;
	startDateTime: string;
	endDateTime: string;
	lessonDetail: string;
	displayName: string;
	weeklyCycle: number;
	// Display Field
	css: Css = new Css();
}
