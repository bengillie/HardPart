import { Homework } from './homework.model';

export class Lesson {
	employeeId: string;
	eventId: string;
	lessonId: string;
	lessonTemplateId: string;
	moduleId: string;
	moduleTemplateId: string;
	name: string;
	orderInModule: number;
	schoolId: string;
	homeworks: Array<Homework>;

	// Dialog Data
	valid: boolean;
}
