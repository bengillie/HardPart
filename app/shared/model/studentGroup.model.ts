import { Employee } from './employee.model';
import { StudentGroupType } from './enums/studentGroupType.model';
import { Subject } from './subject.model';

export class StudentGroup {
	id: string;
	groupName: string;
	academicYearId: string;
	studentGroupType: StudentGroupType;
	expired: boolean;
	subject: Subject;
	schoolId: string;
	schoolName: string;
	subjectId: string;
	subjectName: string;
	employees: Array<Employee>;
}
