import { Css } from './css.model';
import { Lesson } from './lesson.model';
import { StudentGroup } from './studentGroup.model';
import { EventCategory } from './enums/eventcategory.model';

export class Event {
	id: string;
	classId: string;
	classNames: Array<string>;
	createdAt: string;
	employeeId: string;
	employeeName: string;
	endDateTime: string;
	eventCategory: EventCategory;
	lessons: Array<Lesson>;
	locationId: string;
	locationCode: string;
	locationName: string;
	periodId: string;
	periodName: string;
	periodInstanceId: number;
	pupilCount: number;
	schoolId: string;
	schoolName: string;
	startDateTime: string;
	studentGroups: Array<StudentGroup>;
	subjectId: string;
	subjectName: string;
	updatedAt: string;

	// Display Fields
	checked: boolean;
	css: Css = new Css();
	displayCheckBox: boolean;
	highlighted: boolean;
}
