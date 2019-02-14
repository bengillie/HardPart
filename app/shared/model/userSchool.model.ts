import { UserType } from "./enums/usertype.model";

export class UserSchool {
  userId: string;
  schoolId: string;

  userType: UserType;
  userTypeId: string;

  roles: Array<string>;

  employeeId?: string;
  studentId?: string;
}
