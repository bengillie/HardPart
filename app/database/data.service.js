// import { InMemoryDbService } from "angular-in-memory-web-api";
// import { Achievement } from "~/shared/model/achievement.model";
// import { Advert } from "~/shared/model/advert.model";
// import { Attendance, AttendanceMark } from "~/shared/model/attendance.model";
// import { Behaviour, BehaviourType } from "~/shared/model/behaviour.model";
// import { ContactDetails } from "../shared/model/contactus.model";
// import { Homework, HomeworkStatus } from "../shared/model/homework.model";
// import { Notification } from "~/shared/model/notification.model";
// // import { Lesson, Period, Subject } from "~/shared/model/timetable.model";
// import { User, UserType } from "../shared/model/user.model";
// export class DataService implements InMemoryDbService {
//   createDb() {
//     var dateNow1 = new Date();
//     var dateNow2 = new Date();
//     // var subject = Subject;
//     var lessonDate = new Date();
//     var p2WeekMonday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() - 13)
//     );
//     var p2WeekTuesday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 2)
//     );
//     var p2WeekWednesday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 3)
//     );
//     var p2WeekThursday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 4)
//     );
//     var p2WeekFriday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 5)
//     );
//     var p2WeekSaturday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 6)
//     );
//     var prevWeekMonday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 8)
//     );
//     var prevWeekTuesday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 2)
//     );
//     var prevWeekWednesday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 3)
//     );
//     var prevWeekThursday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 4)
//     );
//     var prevWeekFriday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 5)
//     );
//     var prevWeekSaturday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 6)
//     );
//     var monday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 8)
//     );
//     var tuesday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 2)
//     );
//     var wednesday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 3)
//     );
//     var thursday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 4)
//     );
//     var friday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 5)
//     );
//     var saturday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 6)
//     );
//     var nextWeekMonday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 8)
//     );
//     var nextWeekTuesday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 2)
//     );
//     var nextWeekWednesday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 3)
//     );
//     var nextWeekThursday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 4)
//     );
//     var nextWeekFriday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 5)
//     );
//     var nextWeekSaturday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 6)
//     );
//     var n2WeekMonday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 8)
//     );
//     var n2WeekTuesday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 2)
//     );
//     var n2WeekWednesday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 3)
//     );
//     var n2WeekThursday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 4)
//     );
//     var n2WeekFriday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 5)
//     );
//     var n2WeekSaturday = new Date(
//       lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 6)
//     );
//     const achievement: Achievement[] = [
//       {
//         id: 1,
//         subject: "English",
//         type: "Excellent Work",
//         date: p2WeekMonday,
//         score: 10
//       },
//       {
//         id: 2,
//         subject: "Math",
//         type: "Excellent Work",
//         date: p2WeekTuesday,
//         score: 10
//       },
//       {
//         id: 3,
//         subject: "Art",
//         type: "Excellent Work",
//         date: p2WeekWednesday,
//         score: 2
//       },
//       {
//         id: 4,
//         subject: "English",
//         type: "Helping Others",
//         date: p2WeekThursday,
//         score: 8
//       },
//       {
//         id: 5,
//         subject: "Math",
//         type: "Excellent Work",
//         date: p2WeekFriday,
//         score: 30
//       },
//       {
//         id: 6,
//         subject: "Math",
//         type: "Excellent Work",
//         date: p2WeekSaturday,
//         score: 20
//       },
//       {
//         id: 7,
//         subject: "Math",
//         type: "Representative",
//         date: prevWeekMonday,
//         score: 10
//       },
//       {
//         id: 8,
//         subject: "Math",
//         type: "Helping Others",
//         date: prevWeekTuesday,
//         score: 10
//       },
//       {
//         id: 9,
//         subject: "Science",
//         type: "Excellent Work",
//         date: prevWeekWednesday,
//         score: 10
//       },
//       {
//         id: 10,
//         subject: "Science",
//         type: "Leadership",
//         date: prevWeekThursday,
//         score: 10
//       }
//     ];
//     const advert: Advert[] = [
//       {
//         id: 1,
//         title: "After School Programs",
//         subTitle: "Learn, Engage, Play",
//         description:
//           "We offer tutoring, intensive learning, homework help, arts and crafts, reading, math, and so much more. Admission is open from October to December, 2018. Register now.",
//         image: "~/images/advert-afterschool.png",
//         urlLink: "https://www.google.com/",
//         createdDate: new Date(),
//         expiryDate: nextWeekMonday
//       }
//     ];
//     const attendance: Attendance[] = [
//       {
//         id: 1,
//         date: monday,
//         amMark: AttendanceMark.present,
//         pmMark: AttendanceMark.present
//       },
//       {
//         id: 2,
//         date: tuesday,
//         amMark: AttendanceMark.late,
//         pmMark: AttendanceMark.present
//       },
//       {
//         id: 3,
//         date: wednesday,
//         amMark: AttendanceMark.present,
//         pmMark: AttendanceMark.late
//       },
//       {
//         id: 4,
//         date: thursday,
//         amMark: AttendanceMark.authorised,
//         pmMark: AttendanceMark.late
//       },
//       {
//         id: 5,
//         date: friday,
//         amMark: AttendanceMark.authorised,
//         pmMark: AttendanceMark.authorised
//       },
//       {
//         id: 6,
//         date: saturday,
//         amMark: AttendanceMark.unauthorised,
//         pmMark: AttendanceMark.unauthorised
//       },
//       {
//         id: 7,
//         date: nextWeekMonday,
//         amMark: AttendanceMark.present,
//         pmMark: AttendanceMark.present
//       },
//       {
//         id: 8,
//         date: nextWeekTuesday,
//         amMark: AttendanceMark.late,
//         pmMark: AttendanceMark.present
//       },
//       {
//         id: 9,
//         date: nextWeekWednesday,
//         amMark: AttendanceMark.present,
//         pmMark: AttendanceMark.late
//       },
//       {
//         id: 10,
//         date: nextWeekThursday,
//         amMark: AttendanceMark.late,
//         pmMark: AttendanceMark.late
//       },
//       {
//         id: 11,
//         date: nextWeekFriday,
//         amMark: AttendanceMark.authorised,
//         pmMark: AttendanceMark.authorised
//       },
//       {
//         id: 12,
//         date: nextWeekSaturday,
//         amMark: AttendanceMark.unauthorised,
//         pmMark: AttendanceMark.unauthorised
//       },
//       {
//         id: 13,
//         date: n2WeekMonday,
//         amMark: AttendanceMark.present,
//         pmMark: AttendanceMark.present
//       },
//       {
//         id: 14,
//         date: n2WeekTuesday,
//         amMark: AttendanceMark.present,
//         pmMark: AttendanceMark.present
//       },
//       {
//         id: 15,
//         date: n2WeekWednesday,
//         amMark: AttendanceMark.late,
//         pmMark: AttendanceMark.present
//       },
//       {
//         id: 16,
//         date: n2WeekThursday,
//         amMark: AttendanceMark.present,
//         pmMark: AttendanceMark.late
//       },
//       {
//         id: 17,
//         date: n2WeekFriday,
//         amMark: AttendanceMark.present,
//         pmMark: AttendanceMark.unauthorised
//       },
//       {
//         id: 18,
//         date: n2WeekSaturday,
//         amMark: AttendanceMark.late,
//         pmMark: AttendanceMark.unauthorised
//       }
//     ];
//     const behaviour: Behaviour[] = [
//       {
//         id: 1,
//         subject: "English",
//         type: BehaviourType.homework,
//         score: 1,
//         date: p2WeekMonday
//       },
//       {
//         id: 2,
//         subject: "Math",
//         type: BehaviourType.disruption,
//         score: 1,
//         date: p2WeekMonday
//       },
//       {
//         id: 3,
//         subject: "Science",
//         type: BehaviourType.disruption,
//         score: 2,
//         date: p2WeekMonday
//       },
//       {
//         id: 4,
//         subject: "Geography",
//         type: BehaviourType.homework,
//         score: 3,
//         date: p2WeekMonday
//       },
//       {
//         id: 5,
//         subject: "Math",
//         type: BehaviourType.organisation,
//         score: 1,
//         date: p2WeekMonday
//       },
//       {
//         id: 6,
//         subject: "Art and Design",
//         type: BehaviourType.organisation,
//         score: 1,
//         date: p2WeekMonday
//       },
//       {
//         id: 7,
//         subject: "Music",
//         type: BehaviourType.disruption,
//         score: 1,
//         date: p2WeekMonday
//       },
//       {
//         id: 8,
//         subject: "Science",
//         type: BehaviourType.homework,
//         score: 2,
//         date: p2WeekMonday
//       }
//     ];
//     const contactdetail: ContactDetails = {
//       id: 1,
//       phoneno: "+1 989-356-1414",
//       email: "piedpiperschool@email.com",
//       address: "444 Wilson St, Alpena, MI 49707, USA",
//       map: ""
//     };
//     dateNow1 = new Date();
//     dateNow2 = new Date();
//     const homework: Homework[] = [
//       {
//         id: 1,
//         studentId: 2,
//         subject: "Product",
//         task: `Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.`,
//         createdBy: "Mr Fixit",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 7)),
//         attachedFiles: true,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() - 7)),
//         status: HomeworkStatus.done
//       },
//       {
//         id: 2,
//         studentId: 2,
//         subject: "French",
//         task: `Continue to revise for your speaking exam. Revised times attached as well as presentation themes.`,
//         createdBy: "Mrs French",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
//         attachedFiles: true,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
//         status: HomeworkStatus.done
//       },
//       {
//         id: 3,
//         studentId: 2,
//         subject: "History",
//         task: `You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.`,
//         createdBy: "Mrs Past",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
//         attachedFiles: false,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
//         status: HomeworkStatus.done
//       },
//       {
//         id: 4,
//         studentId: 2,
//         subject: "Maths",
//         task: `I have attached the speaking timetables for next week. You will need to arrive at the holding room (ML10) at the following times:\n\nIf your exam is at 9 or 9.15 - sign in to tutor and then go straight to holding room.\nIf your exam is from 9.30 to 10.45 go at start of lesson 1.\nIf your exam is from 11.25 to 12.50 go at start of lesson 3.\nIf your exam is in the afternoon, go at the start of lesson 5.`,
//         createdBy: "Mr French",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
//         attachedFiles: false,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
//         status: HomeworkStatus.done
//       },
//       {
//         id: 5,
//         studentId: 2,
//         subject: "Physics",
//         task:
//           "Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.",
//         createdBy: "Mr French",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
//         attachedFiles: false,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
//         status: HomeworkStatus.done
//       },
//       {
//         id: 6,
//         studentId: 2,
//         subject: "Chemistry",
//         task:
//           "Continue to revise for your speaking exam. Revised times attached as well as presentation themes.",
//         createdBy: "Mr French",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
//         attachedFiles: false,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
//         status: HomeworkStatus.done
//       },
//       {
//         id: 7,
//         studentId: 2,
//         subject: "Biology",
//         task:
//           "You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.",
//         createdBy: "Mr French",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
//         attachedFiles: false,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
//         status: HomeworkStatus.todo
//       },
//       {
//         id: 8,
//         studentId: 2,
//         subject: "Geometry",
//         task:
//           "You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.",
//         createdBy: "Mr Fixit",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
//         attachedFiles: true,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
//         status: HomeworkStatus.todo
//       },
//       {
//         id: 9,
//         studentId: 1,
//         subject: "Physical Education",
//         task:
//           "Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.",
//         createdBy: "Mrs French",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
//         attachedFiles: true,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
//         status: HomeworkStatus.todo
//       },
//       {
//         id: 10,
//         studentId: 2,
//         subject: "Programming 1",
//         task:
//           "Continue to revise for your speaking exam. Revised times attached as well as presentation themes.",
//         createdBy: "Mrs Past",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
//         attachedFiles: false,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
//         status: HomeworkStatus.todo
//       },
//       {
//         id: 11,
//         studentId: 2,
//         subject: "Artificial Intelligence",
//         task:
//           "You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.",
//         createdBy: "Mr French",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
//         attachedFiles: false,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
//         status: HomeworkStatus.todo
//       },
//       {
//         id: 12,
//         studentId: 2,
//         subject: "Computer Science",
//         task: "Read about System Analysis & Design",
//         createdBy: "Mr French",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
//         attachedFiles: false,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
//         status: HomeworkStatus.todo
//       },
//       {
//         id: 13,
//         studentId: 2,
//         subject: "Chemistry",
//         task: "Introduction to Chemistry",
//         createdBy: "Mr French",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 15)),
//         attachedFiles: false,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() - 15)),
//         status: HomeworkStatus.removed
//       },
//       {
//         id: 14,
//         studentId: 1,
//         subject: "Science",
//         task: `Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.`,
//         createdBy: "Mr Fixit",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 7)),
//         attachedFiles: true,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 2)),
//         status: HomeworkStatus.todo
//       },
//       {
//         id: 15,
//         studentId: 1,
//         subject: "Music",
//         task: `Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.`,
//         createdBy: "Mr Fixit",
//         createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 7)),
//         attachedFiles: true,
//         dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 2)),
//         status: HomeworkStatus.todo
//       }
//     ];
//     const lesson: Lesson[] = [
//       {
//         id: 1,
//         userId: 1,
//         startDate: new Date(monday.setHours(7, 0, 0)),
//         endDate: new Date(monday.setHours(8, 0, 0)),
//         teacher: "Matthew Downs",
//         subject: subject.reg,
//         class: "Reg",
//         break: false
//       },
//       {
//         id: 2,
//         userId: 1,
//         startDate: new Date(monday.setHours(8, 0, 0)),
//         endDate: new Date(monday.setHours(9, 0, 0)),
//         teacher: "Albert Einstein",
//         subject: subject.science,
//         class: "11Sc1",
//         break: false
//       },
//       {
//         id: 3,
//         userId: 1,
//         startDate: new Date(monday.setHours(9, 0, 0)),
//         endDate: new Date(monday.setHours(10, 0, 0)),
//         teacher: "Ferdinand Megellan",
//         subject: subject.history,
//         class: "11Hi1",
//         break: false
//       },
//       {
//         id: 4,
//         userId: 1,
//         startDate: new Date(monday.setHours(10, 0, 0)),
//         endDate: new Date(monday.setHours(10, 30, 0)),
//         teacher: "",
//         subject: "",
//         class: "",
//         break: true
//       },
//       {
//         id: 5,
//         userId: 1,
//         startDate: new Date(monday.setHours(10, 30, 0)),
//         endDate: new Date(monday.setHours(11, 0, 0)),
//         teacher: "Ludwig Van Beethoven",
//         subject: subject.music,
//         class: "11Mu1",
//         break: false
//       },
//       {
//         id: 6,
//         userId: 1,
//         startDate: new Date(monday.setHours(11, 0, 0)),
//         endDate: new Date(monday.setHours(12, 0, 0)),
//         teacher: "Alan Turing",
//         subject: subject.computing,
//         class: "11Co1",
//         break: false
//       },
//       {
//         id: 7,
//         userId: 1,
//         startDate: new Date(monday.setHours(12, 0, 0)),
//         endDate: new Date(monday.setHours(13, 0, 0)),
//         teacher: "",
//         subject: "",
//         class: "",
//         break: true
//       },
//       {
//         id: 8,
//         userId: 1,
//         startDate: new Date(monday.setHours(13, 0, 0)),
//         endDate: new Date(monday.setHours(14, 0, 0)),
//         teacher: "Harry James Moore",
//         subject: subject.design,
//         class: "ICT1",
//         break: false
//       },
//       {
//         id: 9,
//         userId: 1,
//         startDate: new Date(monday.setHours(14, 0, 0)),
//         endDate: new Date(monday.setHours(15, 0, 0)),
//         teacher: "Norbert Heyes",
//         subject: subject.english,
//         class: "11En1",
//         break: false
//       },
//       {
//         id: 10,
//         userId: 1,
//         startDate: new Date(tuesday.setHours(7, 0, 0)),
//         endDate: new Date(tuesday.setHours(8, 0, 0)),
//         teacher: "Matthew Downs",
//         subject: subject.reg,
//         class: "Reg",
//         break: false
//       },
//       {
//         id: 11,
//         userId: 1,
//         startDate: new Date(tuesday.setHours(8, 0, 0)),
//         endDate: new Date(tuesday.setHours(9, 0, 0)),
//         teacher: "Albert Einstein",
//         subject: "Science",
//         class: "11Sc1",
//         break: false
//       },
//       {
//         id: 12,
//         userId: 1,
//         startDate: new Date(tuesday.setHours(9, 0, 0)),
//         endDate: new Date(tuesday.setHours(10, 0, 0)),
//         teacher: "Ferdinand Megellan",
//         subject: subject.english,
//         class: "11Hi1",
//         break: false
//       },
//       {
//         id: 13,
//         userId: 1,
//         startDate: new Date(tuesday.setHours(10, 0, 0)),
//         endDate: new Date(tuesday.setHours(10, 30, 0)),
//         teacher: "",
//         subject: "",
//         class: "",
//         break: true
//       },
//       {
//         id: 14,
//         userId: 1,
//         startDate: new Date(tuesday.setHours(10, 30, 0)),
//         endDate: new Date(tuesday.setHours(11, 0, 0)),
//         teacher: "Ludwig Van Beethoven",
//         subject: subject.art,
//         class: "11Mu1",
//         break: false
//       },
//       {
//         id: 15,
//         userId: 1,
//         startDate: new Date(tuesday.setHours(11, 0, 0)),
//         endDate: new Date(tuesday.setHours(12, 0, 0)),
//         teacher: "Alan Turing",
//         subject: subject.math,
//         class: "11Co1",
//         break: false
//       },
//       {
//         id: 16,
//         userId: 1,
//         startDate: new Date(tuesday.setHours(12, 0, 0)),
//         endDate: new Date(tuesday.setHours(13, 0, 0)),
//         teacher: "",
//         subject: "",
//         class: "",
//         break: true
//       },
//       {
//         id: 17,
//         userId: 1,
//         startDate: new Date(tuesday.setHours(13, 0, 0)),
//         endDate: new Date(tuesday.setHours(14, 0, 0)),
//         teacher: "Harry James Moore",
//         subject: subject.geography,
//         class: "ICT1",
//         break: false
//       },
//       {
//         id: 18,
//         userId: 1,
//         startDate: new Date(tuesday.setHours(14, 0, 0)),
//         endDate: new Date(tuesday.setHours(15, 0, 0)),
//         teacher: "Norbert Heyes",
//         subject: subject.languages,
//         class: "11En1",
//         break: false
//       },
//       {
//         id: 19,
//         userId: 1,
//         startDate: new Date(wednesday.setHours(7, 0, 0)),
//         endDate: new Date(wednesday.setHours(8, 0, 0)),
//         teacher: "Matthew Downs",
//         subject: subject.reg,
//         class: "Reg",
//         break: false
//       },
//       {
//         id: 20,
//         userId: 1,
//         startDate: new Date(wednesday.setHours(8, 0, 0)),
//         endDate: new Date(wednesday.setHours(9, 0, 0)),
//         teacher: "Albert Einstein",
//         subject: subject.science,
//         class: "11Sc1",
//         break: false
//       },
//       {
//         id: 21,
//         userId: 1,
//         startDate: new Date(wednesday.setHours(9, 0, 0)),
//         endDate: new Date(wednesday.setHours(10, 0, 0)),
//         teacher: "Edward Thomas",
//         subject: "Physical Education",
//         class: "11Pe1",
//         break: false
//       },
//       {
//         id: 22,
//         userId: 1,
//         startDate: new Date(wednesday.setHours(10, 0, 0)),
//         endDate: new Date(wednesday.setHours(10, 30, 0)),
//         teacher: "",
//         subject: "",
//         class: "",
//         break: true
//       },
//       {
//         id: 23,
//         userId: 1,
//         startDate: new Date(wednesday.setHours(10, 30, 0)),
//         endDate: new Date(wednesday.setHours(11, 0, 0)),
//         teacher: "Ludwig Van Beethoven",
//         subject: subject.music,
//         class: "11Mu1",
//         break: false
//       },
//       {
//         id: 24,
//         userId: 1,
//         startDate: new Date(wednesday.setHours(11, 0, 0)),
//         endDate: new Date(wednesday.setHours(12, 0, 0)),
//         teacher: "Alan Turing",
//         subject: "Computing",
//         class: "11Co1",
//         break: false
//       },
//       {
//         id: 25,
//         userId: 1,
//         startDate: new Date(wednesday.setHours(12, 0, 0)),
//         endDate: new Date(wednesday.setHours(13, 0, 0)),
//         teacher: "",
//         subject: "",
//         class: "",
//         break: true
//       },
//       {
//         id: 26,
//         userId: 1,
//         startDate: new Date(wednesday.setHours(13, 0, 0)),
//         endDate: new Date(wednesday.setHours(14, 0, 0)),
//         teacher: "Harry James Moore",
//         subject: subject.geography,
//         class: "ICT1",
//         break: false
//       },
//       {
//         id: 27,
//         userId: 1,
//         startDate: new Date(wednesday.setHours(14, 0, 0)),
//         endDate: new Date(wednesday.setHours(15, 0, 0)),
//         teacher: "Norbert Heyes",
//         subject: subject.languages,
//         class: "11En1",
//         break: false
//       },
//       {
//         id: 28,
//         userId: 1,
//         startDate: new Date(thursday.setHours(7, 0, 0)),
//         endDate: new Date(thursday.setHours(8, 0, 0)),
//         teacher: "Matthew Downs",
//         subject: subject.reg,
//         class: "Reg",
//         break: false
//       },
//       {
//         id: 29,
//         userId: 1,
//         startDate: new Date(thursday.setHours(8, 0, 0)),
//         endDate: new Date(thursday.setHours(9, 0, 0)),
//         teacher: "Alan Turing",
//         subject: "Computing",
//         class: "11Sc1",
//         break: false
//       },
//       {
//         id: 30,
//         userId: 1,
//         startDate: new Date(thursday.setHours(9, 0, 0)),
//         endDate: new Date(thursday.setHours(10, 0, 0)),
//         teacher: "Harry James Moore",
//         subject: "Design and Technology",
//         class: "11Hi1",
//         break: false
//       },
//       {
//         id: 31,
//         userId: 1,
//         startDate: new Date(thursday.setHours(10, 0, 0)),
//         endDate: new Date(thursday.setHours(10, 30, 0)),
//         teacher: "",
//         subject: "",
//         class: "",
//         break: true
//       },
//       {
//         id: 32,
//         userId: 1,
//         startDate: new Date(thursday.setHours(10, 30, 0)),
//         endDate: new Date(thursday.setHours(11, 0, 0)),
//         teacher: "Ludwig Van Beethoven",
//         subject: "Music",
//         class: "11Mu1",
//         break: false
//       },
//       {
//         id: 33,
//         userId: 1,
//         startDate: new Date(thursday.setHours(11, 0, 0)),
//         endDate: new Date(thursday.setHours(12, 0, 0)),
//         teacher: "Albert Einstein",
//         subject: "Science",
//         class: "11Co1",
//         break: false
//       },
//       {
//         id: 34,
//         userId: 1,
//         startDate: new Date(thursday.setHours(12, 0, 0)),
//         endDate: new Date(thursday.setHours(13, 0, 0)),
//         teacher: "",
//         subject: "",
//         class: "",
//         break: true
//       },
//       {
//         id: 35,
//         userId: 1,
//         startDate: new Date(thursday.setHours(13, 0, 0)),
//         endDate: new Date(thursday.setHours(14, 0, 0)),
//         teacher: "Ferdinand Megellan",
//         subject: "History",
//         class: "ICT1",
//         break: false
//       },
//       {
//         id: 36,
//         userId: 1,
//         startDate: new Date(thursday.setHours(14, 0, 0)),
//         endDate: new Date(thursday.setHours(15, 0, 0)),
//         teacher: "Norbert Heyes",
//         subject: "English",
//         class: "11En1",
//         break: false
//       },
//       {
//         id: 37,
//         userId: 1,
//         startDate: new Date(friday.setHours(7, 0, 0)),
//         endDate: new Date(friday.setHours(8, 0, 0)),
//         teacher: "Matthew Downs",
//         subject: subject.reg,
//         class: "Reg",
//         break: false
//       },
//       {
//         id: 38,
//         userId: 1,
//         startDate: new Date(friday.setHours(8, 0, 0)),
//         endDate: new Date(friday.setHours(9, 0, 0)),
//         teacher: "Albert Einstein",
//         subject: "Science",
//         class: "11Sc1",
//         break: false
//       },
//       {
//         id: 39,
//         userId: 1,
//         startDate: new Date(friday.setHours(9, 0, 0)),
//         endDate: new Date(friday.setHours(10, 0, 0)),
//         teacher: "Ferdinand Megellan",
//         subject: "History",
//         class: "11Hi1",
//         break: false
//       },
//       {
//         id: 40,
//         userId: 1,
//         startDate: new Date(friday.setHours(10, 0, 0)),
//         endDate: new Date(friday.setHours(10, 30, 0)),
//         teacher: "",
//         subject: "",
//         class: "",
//         break: true
//       },
//       {
//         id: 41,
//         userId: 1,
//         startDate: new Date(friday.setHours(10, 30, 0)),
//         endDate: new Date(friday.setHours(11, 0, 0)),
//         teacher: "Ludwig Van Beethoven",
//         subject: "Music",
//         class: "11Mu1",
//         break: false
//       },
//       {
//         id: 42,
//         userId: 1,
//         startDate: new Date(friday.setHours(11, 0, 0)),
//         endDate: new Date(friday.setHours(12, 0, 0)),
//         teacher: "Alan Turing",
//         subject: "Computing",
//         class: "11Co1",
//         break: false
//       },
//       {
//         id: 43,
//         userId: 1,
//         startDate: new Date(friday.setHours(12, 0, 0)),
//         endDate: new Date(friday.setHours(13, 0, 0)),
//         teacher: "",
//         subject: "",
//         class: "",
//         break: true
//       },
//       {
//         id: 44,
//         userId: 1,
//         startDate: new Date(friday.setHours(13, 0, 0)),
//         endDate: new Date(friday.setHours(14, 0, 0)),
//         teacher: "Harry James Moore",
//         subject: "Design and Technology",
//         class: "ICT1",
//         break: false
//       },
//       {
//         id: 45,
//         userId: 1,
//         startDate: new Date(friday.setHours(14, 0, 0)),
//         endDate: new Date(friday.setHours(15, 0, 0)),
//         teacher: "Norbert Heyes",
//         subject: "English",
//         class: "11En1",
//         break: false
//       },
//       {
//         id: 46,
//         userId: 1,
//         startDate: new Date(saturday.setHours(7, 0, 0)),
//         endDate: new Date(saturday.setHours(8, 0, 0)),
//         teacher: "Matthew Downs",
//         subject: subject.reg,
//         class: "Reg",
//         break: false
//       },
//       {
//         id: 47,
//         userId: 1,
//         startDate: new Date(saturday.setHours(9, 0, 0)),
//         endDate: new Date(saturday.setHours(10, 0, 0)),
//         teacher: "Edward Thomas",
//         subject: "Physical Education",
//         class: "11Pe1",
//         break: false
//       }
//     ];
//     const notification: Notification[] = [
//       {
//         id: 1,
//         title: "Homework Overdue",
//         message:
//           "Math Homework due: " +
//           nextWeekFriday.toDateString() +
//           " for Mrs. Potts",
//         image: "~/images/notif_homework.png",
//         createdDate: new Date(friday.setHours(8, 0, 0)),
//         expiryDate: nextWeekFriday,
//         displayOnLogin: false,
//         seen: false
//       },
//       {
//         id: 2,
//         title: "Late Registration",
//         message: "Late on " + monday.toDateString(),
//         image: "~/images/notif_late.png",
//         createdDate: new Date(monday.setHours(8, 30, 0)),
//         expiryDate: tuesday,
//         displayOnLogin: false,
//         seen: false
//       },
//       {
//         id: 3,
//         title: "Unauthorized Absence",
//         message: "Absent on " + tuesday.toDateString(),
//         image: "~/images/notif_absent.png",
//         createdDate: new Date(tuesday.setHours(8, 0, 0)),
//         expiryDate: wednesday,
//         displayOnLogin: false,
//         seen: false
//       },
//       {
//         id: 4,
//         title: "Homework Near Due Date",
//         message:
//           "Science Homework due: " +
//           nextWeekMonday.toDateString() +
//           " for Mr. Fixit",
//         image: "~/images/notif_homework.png",
//         createdDate: new Date(monday.setHours(9, 0, 0)),
//         expiryDate: nextWeekMonday,
//         displayOnLogin: false,
//         seen: false
//       },
//       {
//         id: 5,
//         title: "Non-uniform Day",
//         message: "Non-uniform day on " + wednesday.toDateString(),
//         image: "~/images/notif_non-uniform.png",
//         createdDate: new Date(wednesday.setHours(7, 0, 0)),
//         expiryDate: thursday,
//         displayOnLogin: false,
//         seen: false
//       },
//       {
//         id: 6,
//         title: "Class Suspension",
//         message:
//           "School is shut because of the typhoon on " + thursday.toDateString(),
//         image: "~/images/notif_noclass.png",
//         createdDate: new Date(thursday.setHours(7, 0, 0)),
//         expiryDate: friday,
//         displayOnLogin: false,
//         seen: false
//       }
//     ];
//     const period: Period[] = [
//       {
//         id: 1,
//         name: "R1",
//         startDate: new Date(monday.setHours(7, 0, 0)),
//         endDate: new Date(monday.setHours(8, 0, 0))
//       },
//       {
//         id: 2,
//         name: "R2",
//         startDate: new Date(tuesday.setHours(7, 0, 0)),
//         endDate: new Date(tuesday.setHours(8, 0, 0))
//       },
//       {
//         id: 3,
//         name: "R3",
//         startDate: new Date(wednesday.setHours(7, 0, 0)),
//         endDate: new Date(wednesday.setHours(8, 0, 0))
//       },
//       {
//         id: 4,
//         name: "R4",
//         startDate: new Date(thursday.setHours(7, 0, 0)),
//         endDate: new Date(thursday.setHours(8, 0, 0))
//       },
//       {
//         id: 5,
//         name: "R5",
//         startDate: new Date(friday.setHours(7, 0, 0)),
//         endDate: new Date(friday.setHours(8, 0, 0))
//       },
//       {
//         id: 6,
//         name: "R6",
//         startDate: new Date(saturday.setHours(7, 0, 0)),
//         endDate: new Date(saturday.setHours(8, 0, 0))
//       },
//       {
//         id: 7,
//         name: "P1",
//         startDate: new Date(monday.setHours(8, 0, 0)),
//         endDate: new Date(monday.setHours(9, 0, 0))
//       },
//       {
//         id: 8,
//         name: "P1",
//         startDate: new Date(tuesday.setHours(8, 0, 0)),
//         endDate: new Date(tuesday.setHours(9, 0, 0))
//       },
//       {
//         id: 9,
//         name: "P1",
//         startDate: new Date(wednesday.setHours(8, 0, 0)),
//         endDate: new Date(wednesday.setHours(9, 0, 0))
//       },
//       {
//         id: 10,
//         name: "P1",
//         startDate: new Date(thursday.setHours(8, 0, 0)),
//         endDate: new Date(thursday.setHours(9, 0, 0))
//       },
//       {
//         id: 11,
//         name: "P1",
//         startDate: new Date(friday.setHours(8, 0, 0)),
//         endDate: new Date(friday.setHours(9, 0, 0))
//       },
//       {
//         id: 12,
//         name: "P1",
//         startDate: new Date(saturday.setHours(8, 0, 0)),
//         endDate: new Date(saturday.setHours(9, 0, 0))
//       },
//       {
//         id: 13,
//         name: "P2",
//         startDate: new Date(monday.setHours(9, 0, 0)),
//         endDate: new Date(monday.setHours(10, 0, 0))
//       },
//       {
//         id: 14,
//         name: "P2",
//         startDate: new Date(tuesday.setHours(9, 0, 0)),
//         endDate: new Date(tuesday.setHours(10, 0, 0))
//       },
//       {
//         id: 15,
//         name: "P2",
//         startDate: new Date(wednesday.setHours(9, 0, 0)),
//         endDate: new Date(wednesday.setHours(10, 0, 0))
//       },
//       {
//         id: 16,
//         name: "P2",
//         startDate: new Date(thursday.setHours(9, 0, 0)),
//         endDate: new Date(thursday.setHours(10, 0, 0))
//       },
//       {
//         id: 17,
//         name: "P2",
//         startDate: new Date(friday.setHours(9, 0, 0)),
//         endDate: new Date(friday.setHours(10, 0, 0))
//       },
//       {
//         id: 18,
//         name: "P2",
//         startDate: new Date(saturday.setHours(9, 0, 0)),
//         endDate: new Date(saturday.setHours(10, 0, 0))
//       },
//       {
//         id: 19,
//         name: "P3",
//         startDate: new Date(monday.setHours(10, 30, 0)),
//         endDate: new Date(monday.setHours(11, 0, 0))
//       },
//       {
//         id: 20,
//         name: "P3",
//         startDate: new Date(tuesday.setHours(10, 30, 0)),
//         endDate: new Date(tuesday.setHours(11, 0, 0))
//       },
//       {
//         id: 21,
//         name: "P3",
//         startDate: new Date(wednesday.setHours(10, 30, 0)),
//         endDate: new Date(wednesday.setHours(11, 0, 0))
//       },
//       {
//         id: 22,
//         name: "P3",
//         startDate: new Date(thursday.setHours(10, 30, 0)),
//         endDate: new Date(thursday.setHours(11, 0, 0))
//       },
//       {
//         id: 23,
//         name: "P3",
//         startDate: new Date(friday.setHours(10, 30, 0)),
//         endDate: new Date(friday.setHours(11, 0, 0))
//       },
//       {
//         id: 24,
//         name: "P3",
//         startDate: new Date(saturday.setHours(10, 30, 0)),
//         endDate: new Date(saturday.setHours(11, 0, 0))
//       },
//       {
//         id: 25,
//         name: "P4",
//         startDate: new Date(monday.setHours(11, 0, 0)),
//         endDate: new Date(monday.setHours(12, 0, 0))
//       },
//       {
//         id: 26,
//         name: "P4",
//         startDate: new Date(tuesday.setHours(11, 0, 0)),
//         endDate: new Date(tuesday.setHours(12, 0, 0))
//       },
//       {
//         id: 27,
//         name: "P4",
//         startDate: new Date(wednesday.setHours(11, 0, 0)),
//         endDate: new Date(wednesday.setHours(12, 0, 0))
//       },
//       {
//         id: 28,
//         name: "P4",
//         startDate: new Date(thursday.setHours(11, 0, 0)),
//         endDate: new Date(thursday.setHours(12, 0, 0))
//       },
//       {
//         id: 29,
//         name: "P4",
//         startDate: new Date(friday.setHours(11, 0, 0)),
//         endDate: new Date(friday.setHours(12, 0, 0))
//       },
//       {
//         id: 30,
//         name: "P4",
//         startDate: new Date(saturday.setHours(11, 0, 0)),
//         endDate: new Date(saturday.setHours(12, 0, 0))
//       },
//       {
//         id: 31,
//         name: "P5",
//         startDate: new Date(monday.setHours(13, 0, 0)),
//         endDate: new Date(monday.setHours(14, 0, 0))
//       },
//       {
//         id: 32,
//         name: "P5",
//         startDate: new Date(tuesday.setHours(13, 0, 0)),
//         endDate: new Date(tuesday.setHours(14, 0, 0))
//       },
//       {
//         id: 33,
//         name: "P5",
//         startDate: new Date(wednesday.setHours(13, 0, 0)),
//         endDate: new Date(wednesday.setHours(14, 0, 0))
//       },
//       {
//         id: 34,
//         name: "P5",
//         startDate: new Date(thursday.setHours(13, 0, 0)),
//         endDate: new Date(thursday.setHours(14, 0, 0))
//       },
//       {
//         id: 35,
//         name: "P5",
//         startDate: new Date(friday.setHours(13, 0, 0)),
//         endDate: new Date(friday.setHours(14, 0, 0))
//       },
//       {
//         id: 36,
//         name: "P5",
//         startDate: new Date(saturday.setHours(13, 0, 0)),
//         endDate: new Date(saturday.setHours(14, 0, 0))
//       },
//       {
//         id: 37,
//         name: "P6",
//         startDate: new Date(monday.setHours(14, 0, 0)),
//         endDate: new Date(monday.setHours(15, 0, 0))
//       },
//       {
//         id: 38,
//         name: "P6",
//         startDate: new Date(tuesday.setHours(14, 0, 0)),
//         endDate: new Date(tuesday.setHours(15, 0, 0))
//       },
//       {
//         id: 39,
//         name: "P6",
//         startDate: new Date(wednesday.setHours(14, 0, 0)),
//         endDate: new Date(wednesday.setHours(15, 0, 0))
//       },
//       {
//         id: 40,
//         name: "P6",
//         startDate: new Date(thursday.setHours(14, 0, 0)),
//         endDate: new Date(thursday.setHours(15, 0, 0))
//       },
//       {
//         id: 41,
//         name: "P6",
//         startDate: new Date(friday.setHours(14, 0, 0)),
//         endDate: new Date(friday.setHours(15, 0, 0))
//       },
//       {
//         id: 42,
//         name: "P6",
//         startDate: new Date(saturday.setHours(14, 0, 0)),
//         endDate: new Date(saturday.setHours(15, 0, 0))
//       },
//       {
//         id: 43,
//         name: "Morning Break",
//         startDate: new Date(monday.setHours(10, 0, 0)),
//         endDate: new Date(monday.setHours(10, 30, 0))
//       },
//       {
//         id: 44,
//         name: "Afternoon Break",
//         startDate: new Date(monday.setHours(12, 0, 0)),
//         endDate: new Date(monday.setHours(13, 0, 0))
//       },
//       {
//         id: 45,
//         name: "Morning Break",
//         startDate: new Date(tuesday.setHours(10, 0, 0)),
//         endDate: new Date(tuesday.setHours(10, 30, 0))
//       },
//       {
//         id: 46,
//         name: "Afternoon Break",
//         startDate: new Date(tuesday.setHours(12, 0, 0)),
//         endDate: new Date(tuesday.setHours(13, 0, 0))
//       },
//       {
//         id: 47,
//         name: "Morning Break",
//         startDate: new Date(wednesday.setHours(10, 0, 0)),
//         endDate: new Date(wednesday.setHours(10, 30, 0))
//       },
//       {
//         id: 48,
//         name: "Afternoon Break",
//         startDate: new Date(wednesday.setHours(12, 0, 0)),
//         endDate: new Date(wednesday.setHours(13, 0, 0))
//       },
//       {
//         id: 49,
//         name: "Morning Break",
//         startDate: new Date(thursday.setHours(10, 0, 0)),
//         endDate: new Date(thursday.setHours(10, 30, 0))
//       },
//       {
//         id: 50,
//         name: "Afternoon Break",
//         startDate: new Date(thursday.setHours(12, 0, 0)),
//         endDate: new Date(thursday.setHours(13, 0, 0))
//       },
//       {
//         id: 51,
//         name: "Morning Break",
//         startDate: new Date(friday.setHours(10, 0, 0)),
//         endDate: new Date(friday.setHours(10, 30, 0))
//       },
//       {
//         id: 52,
//         name: "Afternoon Break",
//         startDate: new Date(friday.setHours(12, 0, 0)),
//         endDate: new Date(friday.setHours(13, 0, 0))
//       },
//       {
//         id: 53,
//         name: "Morning Break",
//         startDate: new Date(saturday.setHours(10, 0, 0)),
//         endDate: new Date(saturday.setHours(10, 30, 0))
//       },
//       {
//         id: 54,
//         name: "Afternoon Break",
//         startDate: new Date(saturday.setHours(12, 0, 0)),
//         endDate: new Date(saturday.setHours(13, 0, 0))
//       }
//     ];
//     dateNow1 = new Date();
//     const user: User[] = [
//       {
//         id: 1,
//         fname: "Jay",
//         mname: "",
//         lname: "Smith",
//         username: "1",
//         password: "1",
//         birthdate: "1",
//         phoneprimary: "9123",
//         phonesecondary: "0123",
//         emailprimary: encodeURIComponent("jaysmith@email.com"),
//         emailsecondary: encodeURIComponent("jaysmith2@email.com"),
//         isfirsttime: false,
//         usertype: UserType.student,
//         hasIncompleteHomework: true,
//         image: "~/images/dp1.jpg",
//         lastpwupdate: dateNow1,
//         lastlogin: dateNow1,
//         children: []
//       },
//       {
//         id: 2,
//         fname: "Emily",
//         mname: "",
//         lname: "Smith",
//         username: "student1",
//         password: "password",
//         birthdate: "02/03/2001",
//         phoneprimary: "9234",
//         phonesecondary: "",
//         emailprimary: encodeURIComponent("emilysmith@email.com"),
//         emailsecondary: encodeURIComponent("emilysmith2@email.com"),
//         isfirsttime: true,
//         usertype: UserType.student,
//         hasIncompleteHomework: false,
//         image: "~/images/dp2.jpg",
//         lastpwupdate: dateNow1,
//         lastlogin: dateNow1,
//         children: []
//       },
//       {
//         id: 3,
//         fname: "Grace",
//         mname: "",
//         lname: "Smith",
//         username: "student2",
//         password: "password",
//         birthdate: "03/03/1978",
//         phoneprimary: "9345",
//         phonesecondary: "0345",
//         emailprimary: encodeURIComponent("gracesmith@email.com"),
//         emailsecondary: encodeURIComponent("gracesmith2@email.com"),
//         isfirsttime: false,
//         usertype: UserType.student,
//         hasIncompleteHomework: false,
//         image: "~/images/dp3.jpg",
//         lastpwupdate: dateNow1,
//         lastlogin: dateNow1,
//         children: []
//       },
//       {
//         id: 4,
//         fname: "Finn",
//         mname: "Johnson",
//         lname: "Williams",
//         username: "student3",
//         password: "password",
//         birthdate: "04/05/1975",
//         phoneprimary: "9456",
//         phonesecondary: "",
//         emailprimary: encodeURIComponent("finnwilliams@email.com"),
//         emailsecondary: encodeURIComponent("finnwilliams2@email.com"),
//         isfirsttime: false,
//         usertype: UserType.student,
//         hasIncompleteHomework: false,
//         image: "~/images/dp4.jpg",
//         lastpwupdate: dateNow1,
//         lastlogin: dateNow1,
//         children: []
//       },
//       {
//         id: 5,
//         fname: "Jason",
//         mname: "",
//         lname: "Smith",
//         username: "parent",
//         password: "parent",
//         birthdate: "1",
//         phoneprimary: "9567",
//         phonesecondary: "0567",
//         emailprimary: encodeURIComponent("jasonsmith@email.com"),
//         emailsecondary: encodeURIComponent("jasonsmith2@email.com"),
//         isfirsttime: false,
//         usertype: UserType.parent,
//         hasIncompleteHomework: null,
//         image: "~/images/dp5.jpg",
//         lastpwupdate: dateNow1,
//         lastlogin: dateNow1,
//         children: [
//           {
//             id: 1,
//             fname: "Jay",
//             mname: "",
//             lname: "Smith",
//             username: "1",
//             password: "1",
//             birthdate: "1",
//             emailprimary: encodeURIComponent("jaysmith@email.com"),
//             emailsecondary: encodeURIComponent("jaysmith2@email.com"),
//             phoneprimary: "9123",
//             phonesecondary: "0123",
//             isfirsttime: false,
//             usertype: UserType.student,
//             hasIncompleteHomework: true,
//             image: "~/images/dp1.jpg",
//             lastpwupdate: dateNow1,
//             lastlogin: dateNow1,
//             children: []
//           },
//           {
//             id: 2,
//             fname: "Emily",
//             mname: "",
//             lname: "Smith",
//             username: "student1",
//             password: "password",
//             birthdate: "02/03/2001",
//             phoneprimary: "9234",
//             phonesecondary: "",
//             emailprimary: encodeURIComponent("emilysmith@email.com"),
//             emailsecondary: encodeURIComponent("emilysmith2@email.com"),
//             isfirsttime: true,
//             usertype: UserType.student,
//             hasIncompleteHomework: false,
//             image: "~/images/dp2.jpg",
//             lastpwupdate: dateNow1,
//             lastlogin: dateNow1,
//             children: []
//           },
//           {
//             id: 3,
//             fname: "Grace",
//             mname: "",
//             lname: "Smith",
//             username: "student2",
//             password: "password",
//             birthdate: "03/03/1978",
//             phoneprimary: "9345",
//             phonesecondary: "0345",
//             emailprimary: encodeURIComponent("gracesmith@email.com"),
//             emailsecondary: encodeURIComponent("gracesmith2@email.com"),
//             isfirsttime: false,
//             usertype: UserType.student,
//             hasIncompleteHomework: false,
//             image: "~/images/dp3.jpg",
//             lastpwupdate: dateNow1,
//             lastlogin: dateNow1,
//             children: []
//           }
//         ]
//       },
//       {
//         id: 6,
//         fname: "Bon",
//         mname: "Johnson",
//         lname: "Williams",
//         username: "parent1",
//         password: "parent",
//         birthdate: "01/02/1950",
//         phoneprimary: "9678",
//         phonesecondary: "",
//         emailprimary: encodeURIComponent("bonwilliams@email.com"),
//         emailsecondary: encodeURIComponent("bonwilliams2@email.com"),
//         isfirsttime: true,
//         usertype: UserType.parent,
//         hasIncompleteHomework: null,
//         image: "",
//         lastpwupdate: dateNow1,
//         lastlogin: dateNow1,
//         children: [
//           {
//             id: 4,
//             fname: "Finn",
//             mname: "Johnson",
//             lname: "Williams",
//             username: "student3",
//             password: "password",
//             birthdate: "04/05/1975",
//             phoneprimary: "9456",
//             phonesecondary: "",
//             emailprimary: encodeURIComponent("finnwilliams@email.com"),
//             emailsecondary: encodeURIComponent("finnwilliams2@email.com"),
//             isfirsttime: false,
//             usertype: UserType.student,
//             hasIncompleteHomework: false,
//             image: "~/images/dp4.jpg",
//             lastpwupdate: dateNow1,
//             lastlogin: dateNow1,
//             children: []
//           }
//         ]
//       },
//       {
//         id: 7,
//         fname: "Maria",
//         mname: "",
//         lname: "Brown",
//         username: "parent2",
//         password: "parent",
//         birthdate: "02/01/1950",
//         phoneprimary: "9789",
//         phonesecondary: "0789",
//         emailprimary: encodeURIComponent("mariabrown@email.com"),
//         emailsecondary: encodeURIComponent("mariabrown2@email.com"),
//         isfirsttime: false,
//         usertype: UserType.parent,
//         hasIncompleteHomework: null,
//         image: "",
//         lastpwupdate: dateNow1,
//         lastlogin: dateNow1,
//         children: []
//       }
//     ];
//     return {
//       achievement,
//       advert,
//       attendance,
//       behaviour,
//       contactdetail,
//       homework,
//       lesson,
//       notification,
//       period,
//       user
//     };
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTtBQUVqRSxrRUFBa0U7QUFDbEUsd0RBQXdEO0FBQ3hELGdGQUFnRjtBQUNoRiw2RUFBNkU7QUFDN0Usb0VBQW9FO0FBQ3BFLDZFQUE2RTtBQUM3RSxvRUFBb0U7QUFDcEUsK0VBQStFO0FBQy9FLCtEQUErRDtBQUUvRCwwREFBMEQ7QUFDMUQsaUJBQWlCO0FBQ2pCLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsZ0NBQWdDO0FBRWhDLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsNEVBQTRFO0FBQzVFLFNBQVM7QUFDVCxvQ0FBb0M7QUFDcEMsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCxzQ0FBc0M7QUFDdEMsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckMsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCxtQ0FBbUM7QUFDbkMsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckMsMkVBQTJFO0FBQzNFLFNBQVM7QUFFVCxxQ0FBcUM7QUFDckMsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCxzQ0FBc0M7QUFDdEMsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCx3Q0FBd0M7QUFDeEMsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCx1Q0FBdUM7QUFDdkMsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckMsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCx1Q0FBdUM7QUFDdkMsMkVBQTJFO0FBQzNFLFNBQVM7QUFFVCw2QkFBNkI7QUFDN0IsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCw4QkFBOEI7QUFDOUIsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCxnQ0FBZ0M7QUFDaEMsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCwrQkFBK0I7QUFDL0IsMkVBQTJFO0FBQzNFLFNBQVM7QUFDVCw2QkFB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O0FBQzFFLDZFQUE2RTtBQUM3RSxrQ0FBa0M7QUFDbEMsMENBQTBDO0FBQzFDLDRDQUE0QztBQUM1Qyx5Q0FBeUM7QUFDekMsc0NBQXNDO0FBQ3RDLG1DQUFtQztBQUNuQywyQkFBMkI7QUFDM0IsY0FBYztBQUNkLFlBQVk7QUFDWixXQUFXO0FBQ1gsVUFBVTtBQUNWLGlCQUFpQjtBQUNqQiwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQiwrQkFBK0I7QUFDL0IsOEJBQThCO0FBQzlCLG1DQUFtQztBQUNuQyxnQ0FBZ0M7QUFDaEMsa0NBQWtDO0FBQ2xDLG9FQUFvRTtBQUNwRSx1RUFBdUU7QUFDdkUsOEJBQThCO0FBQzlCLHFDQUFxQztBQUNyQyx1Q0FBdUM7QUFDdkMscUJBQXFCO0FBQ3JCLGtDQUFrQztBQUNsQywrQkFBK0I7QUFDL0IsdUJBQXVCO0FBQ3ZCLFVBQVU7QUFDVixTQUFTO0FBRVQsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBJbk1lbW9yeURiU2VydmljZSB9IGZyb20gXCJhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBBY2hpZXZlbWVudCB9IGZyb20gXCJ+L3NoYXJlZC9tb2RlbC9hY2hpZXZlbWVudC5tb2RlbFwiO1xyXG4vLyBpbXBvcnQgeyBBZHZlcnQgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWwvYWR2ZXJ0Lm1vZGVsXCI7XHJcbi8vIGltcG9ydCB7IEF0dGVuZGFuY2UsIEF0dGVuZGFuY2VNYXJrIH0gZnJvbSBcIn4vc2hhcmVkL21vZGVsL2F0dGVuZGFuY2UubW9kZWxcIjtcclxuLy8gaW1wb3J0IHsgQmVoYXZpb3VyLCBCZWhhdmlvdXJUeXBlIH0gZnJvbSBcIn4vc2hhcmVkL21vZGVsL2JlaGF2aW91ci5tb2RlbFwiO1xyXG4vLyBpbXBvcnQgeyBDb250YWN0RGV0YWlscyB9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWwvY29udGFjdHVzLm1vZGVsXCI7XHJcbi8vIGltcG9ydCB7IEhvbWV3b3JrLCBIb21ld29ya1N0YXR1cyB9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWwvaG9tZXdvcmsubW9kZWxcIjtcclxuLy8gaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSBcIn4vc2hhcmVkL21vZGVsL25vdGlmaWNhdGlvbi5tb2RlbFwiO1xyXG4vLyAvLyBpbXBvcnQgeyBMZXNzb24sIFBlcmlvZCwgU3ViamVjdCB9IGZyb20gXCJ+L3NoYXJlZC9tb2RlbC90aW1ldGFibGUubW9kZWxcIjtcclxuLy8gaW1wb3J0IHsgVXNlciwgVXNlclR5cGUgfSBmcm9tIFwiLi4vc2hhcmVkL21vZGVsL3VzZXIubW9kZWxcIjtcclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlIHtcclxuLy8gICBjcmVhdGVEYigpIHtcclxuLy8gICAgIHZhciBkYXRlTm93MSA9IG5ldyBEYXRlKCk7XHJcbi8vICAgICB2YXIgZGF0ZU5vdzIgPSBuZXcgRGF0ZSgpO1xyXG4vLyAgICAgLy8gdmFyIHN1YmplY3QgPSBTdWJqZWN0O1xyXG5cclxuLy8gICAgIHZhciBsZXNzb25EYXRlID0gbmV3IERhdGUoKTtcclxuLy8gICAgIHZhciBwMldlZWtNb25kYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSAtIDEzKVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHZhciBwMldlZWtUdWVzZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyAyKVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHZhciBwMldlZWtXZWRuZXNkYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDMpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIHAyV2Vla1RodXJzZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA0KVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHZhciBwMldlZWtGcmlkYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDUpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIHAyV2Vla1NhdHVyZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA2KVxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICB2YXIgcHJldldlZWtNb25kYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDgpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIHByZXZXZWVrVHVlc2RheSA9IG5ldyBEYXRlKFxyXG4vLyAgICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgMilcclxuLy8gICAgICk7XHJcbi8vICAgICB2YXIgcHJldldlZWtXZWRuZXNkYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDMpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIHByZXZXZWVrVGh1cnNkYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDQpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIHByZXZXZWVrRnJpZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA1KVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHZhciBwcmV2V2Vla1NhdHVyZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA2KVxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICB2YXIgbW9uZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA4KVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHZhciB0dWVzZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyAyKVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHZhciB3ZWRuZXNkYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDMpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIHRodXJzZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA0KVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHZhciBmcmlkYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDUpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIHNhdHVyZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA2KVxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICB2YXIgbmV4dFdlZWtNb25kYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDgpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIG5leHRXZWVrVHVlc2RheSA9IG5ldyBEYXRlKFxyXG4vLyAgICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgMilcclxuLy8gICAgICk7XHJcbi8vICAgICB2YXIgbmV4dFdlZWtXZWRuZXNkYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDMpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIG5leHRXZWVrVGh1cnNkYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDQpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIG5leHRXZWVrRnJpZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA1KVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHZhciBuZXh0V2Vla1NhdHVyZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA2KVxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICB2YXIgbjJXZWVrTW9uZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA4KVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHZhciBuMldlZWtUdWVzZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyAyKVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHZhciBuMldlZWtXZWRuZXNkYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDMpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIG4yV2Vla1RodXJzZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA0KVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHZhciBuMldlZWtGcmlkYXkgPSBuZXcgRGF0ZShcclxuLy8gICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDUpXHJcbi8vICAgICApO1xyXG4vLyAgICAgdmFyIG4yV2Vla1NhdHVyZGF5ID0gbmV3IERhdGUoXHJcbi8vICAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyA2KVxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICBjb25zdCBhY2hpZXZlbWVudDogQWNoaWV2ZW1lbnRbXSA9IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiRW5nbGlzaFwiLFxyXG4vLyAgICAgICAgIHR5cGU6IFwiRXhjZWxsZW50IFdvcmtcIixcclxuLy8gICAgICAgICBkYXRlOiBwMldlZWtNb25kYXksXHJcbi8vICAgICAgICAgc2NvcmU6IDEwXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIk1hdGhcIixcclxuLy8gICAgICAgICB0eXBlOiBcIkV4Y2VsbGVudCBXb3JrXCIsXHJcbi8vICAgICAgICAgZGF0ZTogcDJXZWVrVHVlc2RheSxcclxuLy8gICAgICAgICBzY29yZTogMTBcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiQXJ0XCIsXHJcbi8vICAgICAgICAgdHlwZTogXCJFeGNlbGxlbnQgV29ya1wiLFxyXG4vLyAgICAgICAgIGRhdGU6IHAyV2Vla1dlZG5lc2RheSxcclxuLy8gICAgICAgICBzY29yZTogMlxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDQsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJFbmdsaXNoXCIsXHJcbi8vICAgICAgICAgdHlwZTogXCJIZWxwaW5nIE90aGVyc1wiLFxyXG4vLyAgICAgICAgIGRhdGU6IHAyV2Vla1RodXJzZGF5LFxyXG4vLyAgICAgICAgIHNjb3JlOiA4XHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNSxcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIk1hdGhcIixcclxuLy8gICAgICAgICB0eXBlOiBcIkV4Y2VsbGVudCBXb3JrXCIsXHJcbi8vICAgICAgICAgZGF0ZTogcDJXZWVrRnJpZGF5LFxyXG4vLyAgICAgICAgIHNjb3JlOiAzMFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDYsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJNYXRoXCIsXHJcbi8vICAgICAgICAgdHlwZTogXCJFeGNlbGxlbnQgV29ya1wiLFxyXG4vLyAgICAgICAgIGRhdGU6IHAyV2Vla1NhdHVyZGF5LFxyXG4vLyAgICAgICAgIHNjb3JlOiAyMFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDcsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJNYXRoXCIsXHJcbi8vICAgICAgICAgdHlwZTogXCJSZXByZXNlbnRhdGl2ZVwiLFxyXG4vLyAgICAgICAgIGRhdGU6IHByZXZXZWVrTW9uZGF5LFxyXG4vLyAgICAgICAgIHNjb3JlOiAxMFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDgsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJNYXRoXCIsXHJcbi8vICAgICAgICAgdHlwZTogXCJIZWxwaW5nIE90aGVyc1wiLFxyXG4vLyAgICAgICAgIGRhdGU6IHByZXZXZWVrVHVlc2RheSxcclxuLy8gICAgICAgICBzY29yZTogMTBcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA5LFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiU2NpZW5jZVwiLFxyXG4vLyAgICAgICAgIHR5cGU6IFwiRXhjZWxsZW50IFdvcmtcIixcclxuLy8gICAgICAgICBkYXRlOiBwcmV2V2Vla1dlZG5lc2RheSxcclxuLy8gICAgICAgICBzY29yZTogMTBcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxMCxcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIlNjaWVuY2VcIixcclxuLy8gICAgICAgICB0eXBlOiBcIkxlYWRlcnNoaXBcIixcclxuLy8gICAgICAgICBkYXRlOiBwcmV2V2Vla1RodXJzZGF5LFxyXG4vLyAgICAgICAgIHNjb3JlOiAxMFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBdO1xyXG5cclxuLy8gICAgIGNvbnN0IGFkdmVydDogQWR2ZXJ0W10gPSBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICB0aXRsZTogXCJBZnRlciBTY2hvb2wgUHJvZ3JhbXNcIixcclxuLy8gICAgICAgICBzdWJUaXRsZTogXCJMZWFybiwgRW5nYWdlLCBQbGF5XCIsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246XHJcbi8vICAgICAgICAgICBcIldlIG9mZmVyIHR1dG9yaW5nLCBpbnRlbnNpdmUgbGVhcm5pbmcsIGhvbWV3b3JrIGhlbHAsIGFydHMgYW5kIGNyYWZ0cywgcmVhZGluZywgbWF0aCwgYW5kIHNvIG11Y2ggbW9yZS4gQWRtaXNzaW9uIGlzIG9wZW4gZnJvbSBPY3RvYmVyIHRvIERlY2VtYmVyLCAyMDE4LiBSZWdpc3RlciBub3cuXCIsXHJcbi8vICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvYWR2ZXJ0LWFmdGVyc2Nob29sLnBuZ1wiLFxyXG4vLyAgICAgICAgIHVybExpbms6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIixcclxuLy8gICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoKSxcclxuLy8gICAgICAgICBleHBpcnlEYXRlOiBuZXh0V2Vla01vbmRheVxyXG4vLyAgICAgICB9XHJcbi8vICAgICBdO1xyXG5cclxuLy8gICAgIGNvbnN0IGF0dGVuZGFuY2U6IEF0dGVuZGFuY2VbXSA9IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIGRhdGU6IG1vbmRheSxcclxuLy8gICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnQsXHJcbi8vICAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5wcmVzZW50XHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMixcclxuLy8gICAgICAgICBkYXRlOiB0dWVzZGF5LFxyXG4vLyAgICAgICAgIGFtTWFyazogQXR0ZW5kYW5jZU1hcmsubGF0ZSxcclxuLy8gICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnRcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICAgIGRhdGU6IHdlZG5lc2RheSxcclxuLy8gICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnQsXHJcbi8vICAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5sYXRlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNCxcclxuLy8gICAgICAgICBkYXRlOiB0aHVyc2RheSxcclxuLy8gICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLmF1dGhvcmlzZWQsXHJcbi8vICAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5sYXRlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNSxcclxuLy8gICAgICAgICBkYXRlOiBmcmlkYXksXHJcbi8vICAgICAgICAgYW1NYXJrOiBBdHRlbmRhbmNlTWFyay5hdXRob3Jpc2VkLFxyXG4vLyAgICAgICAgIHBtTWFyazogQXR0ZW5kYW5jZU1hcmsuYXV0aG9yaXNlZFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDYsXHJcbi8vICAgICAgICAgZGF0ZTogc2F0dXJkYXksXHJcbi8vICAgICAgICAgYW1NYXJrOiBBdHRlbmRhbmNlTWFyay51bmF1dGhvcmlzZWQsXHJcbi8vICAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay51bmF1dGhvcmlzZWRcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA3LFxyXG4vLyAgICAgICAgIGRhdGU6IG5leHRXZWVrTW9uZGF5LFxyXG4vLyAgICAgICAgIGFtTWFyazogQXR0ZW5kYW5jZU1hcmsucHJlc2VudCxcclxuLy8gICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnRcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA4LFxyXG4vLyAgICAgICAgIGRhdGU6IG5leHRXZWVrVHVlc2RheSxcclxuLy8gICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLmxhdGUsXHJcbi8vICAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5wcmVzZW50XHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogOSxcclxuLy8gICAgICAgICBkYXRlOiBuZXh0V2Vla1dlZG5lc2RheSxcclxuLy8gICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnQsXHJcbi8vICAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5sYXRlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTAsXHJcbi8vICAgICAgICAgZGF0ZTogbmV4dFdlZWtUaHVyc2RheSxcclxuLy8gICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLmxhdGUsXHJcbi8vICAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5sYXRlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTEsXHJcbi8vICAgICAgICAgZGF0ZTogbmV4dFdlZWtGcmlkYXksXHJcbi8vICAgICAgICAgYW1NYXJrOiBBdHRlbmRhbmNlTWFyay5hdXRob3Jpc2VkLFxyXG4vLyAgICAgICAgIHBtTWFyazogQXR0ZW5kYW5jZU1hcmsuYXV0aG9yaXNlZFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEyLFxyXG4vLyAgICAgICAgIGRhdGU6IG5leHRXZWVrU2F0dXJkYXksXHJcbi8vICAgICAgICAgYW1NYXJrOiBBdHRlbmRhbmNlTWFyay51bmF1dGhvcmlzZWQsXHJcbi8vICAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay51bmF1dGhvcmlzZWRcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxMyxcclxuLy8gICAgICAgICBkYXRlOiBuMldlZWtNb25kYXksXHJcbi8vICAgICAgICAgYW1NYXJrOiBBdHRlbmRhbmNlTWFyay5wcmVzZW50LFxyXG4vLyAgICAgICAgIHBtTWFyazogQXR0ZW5kYW5jZU1hcmsucHJlc2VudFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDE0LFxyXG4vLyAgICAgICAgIGRhdGU6IG4yV2Vla1R1ZXNkYXksXHJcbi8vICAgICAgICAgYW1NYXJrOiBBdHRlbmRhbmNlTWFyay5wcmVzZW50LFxyXG4vLyAgICAgICAgIHBtTWFyazogQXR0ZW5kYW5jZU1hcmsucHJlc2VudFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDE1LFxyXG4vLyAgICAgICAgIGRhdGU6IG4yV2Vla1dlZG5lc2RheSxcclxuLy8gICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLmxhdGUsXHJcbi8vICAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5wcmVzZW50XHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTYsXHJcbi8vICAgICAgICAgZGF0ZTogbjJXZWVrVGh1cnNkYXksXHJcbi8vICAgICAgICAgYW1NYXJrOiBBdHRlbmRhbmNlTWFyay5wcmVzZW50LFxyXG4vLyAgICAgICAgIHBtTWFyazogQXR0ZW5kYW5jZU1hcmsubGF0ZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDE3LFxyXG4vLyAgICAgICAgIGRhdGU6IG4yV2Vla0ZyaWRheSxcclxuLy8gICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnQsXHJcbi8vICAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay51bmF1dGhvcmlzZWRcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxOCxcclxuLy8gICAgICAgICBkYXRlOiBuMldlZWtTYXR1cmRheSxcclxuLy8gICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLmxhdGUsXHJcbi8vICAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay51bmF1dGhvcmlzZWRcclxuLy8gICAgICAgfVxyXG4vLyAgICAgXTtcclxuXHJcbi8vICAgICBjb25zdCBiZWhhdmlvdXI6IEJlaGF2aW91cltdID0gW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJFbmdsaXNoXCIsXHJcbi8vICAgICAgICAgdHlwZTogQmVoYXZpb3VyVHlwZS5ob21ld29yayxcclxuLy8gICAgICAgICBzY29yZTogMSxcclxuLy8gICAgICAgICBkYXRlOiBwMldlZWtNb25kYXlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiTWF0aFwiLFxyXG4vLyAgICAgICAgIHR5cGU6IEJlaGF2aW91clR5cGUuZGlzcnVwdGlvbixcclxuLy8gICAgICAgICBzY29yZTogMSxcclxuLy8gICAgICAgICBkYXRlOiBwMldlZWtNb25kYXlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiU2NpZW5jZVwiLFxyXG4vLyAgICAgICAgIHR5cGU6IEJlaGF2aW91clR5cGUuZGlzcnVwdGlvbixcclxuLy8gICAgICAgICBzY29yZTogMixcclxuLy8gICAgICAgICBkYXRlOiBwMldlZWtNb25kYXlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA0LFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiR2VvZ3JhcGh5XCIsXHJcbi8vICAgICAgICAgdHlwZTogQmVoYXZpb3VyVHlwZS5ob21ld29yayxcclxuLy8gICAgICAgICBzY29yZTogMyxcclxuLy8gICAgICAgICBkYXRlOiBwMldlZWtNb25kYXlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA1LFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiTWF0aFwiLFxyXG4vLyAgICAgICAgIHR5cGU6IEJlaGF2aW91clR5cGUub3JnYW5pc2F0aW9uLFxyXG4vLyAgICAgICAgIHNjb3JlOiAxLFxyXG4vLyAgICAgICAgIGRhdGU6IHAyV2Vla01vbmRheVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDYsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJBcnQgYW5kIERlc2lnblwiLFxyXG4vLyAgICAgICAgIHR5cGU6IEJlaGF2aW91clR5cGUub3JnYW5pc2F0aW9uLFxyXG4vLyAgICAgICAgIHNjb3JlOiAxLFxyXG4vLyAgICAgICAgIGRhdGU6IHAyV2Vla01vbmRheVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDcsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJNdXNpY1wiLFxyXG4vLyAgICAgICAgIHR5cGU6IEJlaGF2aW91clR5cGUuZGlzcnVwdGlvbixcclxuLy8gICAgICAgICBzY29yZTogMSxcclxuLy8gICAgICAgICBkYXRlOiBwMldlZWtNb25kYXlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA4LFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiU2NpZW5jZVwiLFxyXG4vLyAgICAgICAgIHR5cGU6IEJlaGF2aW91clR5cGUuaG9tZXdvcmssXHJcbi8vICAgICAgICAgc2NvcmU6IDIsXHJcbi8vICAgICAgICAgZGF0ZTogcDJXZWVrTW9uZGF5XHJcbi8vICAgICAgIH1cclxuLy8gICAgIF07XHJcbi8vICAgICBjb25zdCBjb250YWN0ZGV0YWlsOiBDb250YWN0RGV0YWlscyA9IHtcclxuLy8gICAgICAgaWQ6IDEsXHJcbi8vICAgICAgIHBob25lbm86IFwiKzEgOTg5LTM1Ni0xNDE0XCIsXHJcbi8vICAgICAgIGVtYWlsOiBcInBpZWRwaXBlcnNjaG9vbEBlbWFpbC5jb21cIixcclxuLy8gICAgICAgYWRkcmVzczogXCI0NDQgV2lsc29uIFN0LCBBbHBlbmEsIE1JIDQ5NzA3LCBVU0FcIixcclxuLy8gICAgICAgbWFwOiBcIlwiXHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGRhdGVOb3cxID0gbmV3IERhdGUoKTtcclxuLy8gICAgIGRhdGVOb3cyID0gbmV3IERhdGUoKTtcclxuLy8gICAgIGNvbnN0IGhvbWV3b3JrOiBIb21ld29ya1tdID0gW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgc3R1ZGVudElkOiAyLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiUHJvZHVjdFwiLFxyXG4vLyAgICAgICAgIHRhc2s6IGBDb21wbGV0ZSB0aGUgZXhpc3RpbmcgcHJvZHVjdHMgYW5kIHVzZXIgcHJvZmlsZSByZXNlYXJjaCBzbyB0aGF0IHlvdSBhcmUgcmVhZHkgdG8gdHlwZSBhbGwgdGhlIHJlc2VhcmNoIHBhZ2VzIGluIHRoZSBmaXJzdCBsZXNzb24gaW4gU2VwdGVtYmVyLiBQbGFuIGEgY29uY2x1c2lvbiBmb3IgZWFjaCBwYWdlICh0aGlzIGlzIHRoZSByZXNlYXJjaCBhbmFseXNpcyBwYWdlIGJ1dCB3ZSB3aWxsIGJlIGJyZWFraW5nIGl0IHVwIGluIHRvIGEgcGFyYWdyYXBoIG9uIGVhY2ggcGFnZSkuXFxuXFxuWW91IG1pZ2h0IGFsc28gd2FudCB0byB3cml0ZSBhIGRyYWZ0IERlc2lnbiBTcGVjaWZpY2F0aW9uIGFzIHdlIHdpbGwgY29tcGxldGUgdGhhdCBpbiBMZXNzb24gMiBvZiBZMTEuXFxuXFxuVXNlIHRoZSBwb3dlciBwb2ludCB0byBndWlkZSB5b3UuYCxcclxuLy8gICAgICAgICBjcmVhdGVkQnk6IFwiTXIgRml4aXRcIixcclxuLy8gICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzEuc2V0RGF0ZShkYXRlTm93MS5nZXREYXRlKCkgLSA3KSksXHJcbi8vICAgICAgICAgYXR0YWNoZWRGaWxlczogdHJ1ZSxcclxuLy8gICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSAtIDcpKSxcclxuLy8gICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLmRvbmVcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIHN0dWRlbnRJZDogMixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIkZyZW5jaFwiLFxyXG4vLyAgICAgICAgIHRhc2s6IGBDb250aW51ZSB0byByZXZpc2UgZm9yIHlvdXIgc3BlYWtpbmcgZXhhbS4gUmV2aXNlZCB0aW1lcyBhdHRhY2hlZCBhcyB3ZWxsIGFzIHByZXNlbnRhdGlvbiB0aGVtZXMuYCxcclxuLy8gICAgICAgICBjcmVhdGVkQnk6IFwiTXJzIEZyZW5jaFwiLFxyXG4vLyAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShkYXRlTm93MS5zZXREYXRlKGRhdGVOb3cxLmdldERhdGUoKSArIDEpKSxcclxuLy8gICAgICAgICBhdHRhY2hlZEZpbGVzOiB0cnVlLFxyXG4vLyAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKGRhdGVOb3cyLnNldERhdGUoZGF0ZU5vdzIuZ2V0RGF0ZSgpICsgMSkpLFxyXG4vLyAgICAgICAgIHN0YXR1czogSG9tZXdvcmtTdGF0dXMuZG9uZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMsXHJcbi8vICAgICAgICAgc3R1ZGVudElkOiAyLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiSGlzdG9yeVwiLFxyXG4vLyAgICAgICAgIHRhc2s6IGBZb3Ugd2lsbCBoYXZlIGEgbWVkaWNpbmUgbW9jayB0aGUgZmlyc3Qgd2VlayBiYWNrIGluIFllYXIgMTEuXFxuXFxuWW91IGhhdmUgYmVlbiByZXZpc2luZyBtZWRpY2luZSB0aGlzIGhhbGYgdGVybSwgYW5kIHlvdSB3aWxsIG5lZWQgdG8ga2VlcCB1cCB3aXRoIHRoaXMgcmV2aXNpb24gb3ZlciB0aGUgc3VtbWVyIGhvbGlkYXlzLiBNYW55IG9mIHlvdSBoYXZlIGJvdWdodCByZXZpc2lvbiBndWlkZXMgLSB1c2UgdGhlbSFcXG5cXG5JIGhhdmUgYWxzbyBhdHRhY2hlZCBNZWRpY2luZSBhbmQgV2VzdGVybiByZXZpc2lvbiB3b3JrIGJvb2tzLmAsXHJcbi8vICAgICAgICAgY3JlYXRlZEJ5OiBcIk1ycyBQYXN0XCIsXHJcbi8vICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKGRhdGVOb3cxLnNldERhdGUoZGF0ZU5vdzEuZ2V0RGF0ZSgpICsgMSkpLFxyXG4vLyAgICAgICAgIGF0dGFjaGVkRmlsZXM6IGZhbHNlLFxyXG4vLyAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKGRhdGVOb3cyLnNldERhdGUoZGF0ZU5vdzIuZ2V0RGF0ZSgpICsgMSkpLFxyXG4vLyAgICAgICAgIHN0YXR1czogSG9tZXdvcmtTdGF0dXMuZG9uZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDQsXHJcbi8vICAgICAgICAgc3R1ZGVudElkOiAyLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiTWF0aHNcIixcclxuLy8gICAgICAgICB0YXNrOiBgSSBoYXZlIGF0dGFjaGVkIHRoZSBzcGVha2luZyB0aW1ldGFibGVzIGZvciBuZXh0IHdlZWsuIFlvdSB3aWxsIG5lZWQgdG8gYXJyaXZlIGF0IHRoZSBob2xkaW5nIHJvb20gKE1MMTApIGF0IHRoZSBmb2xsb3dpbmcgdGltZXM6XFxuXFxuSWYgeW91ciBleGFtIGlzIGF0IDkgb3IgOS4xNSAtIHNpZ24gaW4gdG8gdHV0b3IgYW5kIHRoZW4gZ28gc3RyYWlnaHQgdG8gaG9sZGluZyByb29tLlxcbklmIHlvdXIgZXhhbSBpcyBmcm9tIDkuMzAgdG8gMTAuNDUgZ28gYXQgc3RhcnQgb2YgbGVzc29uIDEuXFxuSWYgeW91ciBleGFtIGlzIGZyb20gMTEuMjUgdG8gMTIuNTAgZ28gYXQgc3RhcnQgb2YgbGVzc29uIDMuXFxuSWYgeW91ciBleGFtIGlzIGluIHRoZSBhZnRlcm5vb24sIGdvIGF0IHRoZSBzdGFydCBvZiBsZXNzb24gNS5gLFxyXG4vLyAgICAgICAgIGNyZWF0ZWRCeTogXCJNciBGcmVuY2hcIixcclxuLy8gICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzEuc2V0RGF0ZShkYXRlTm93MS5nZXREYXRlKCkgKyAxKSksXHJcbi8vICAgICAgICAgYXR0YWNoZWRGaWxlczogZmFsc2UsXHJcbi8vICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzIuc2V0RGF0ZShkYXRlTm93Mi5nZXREYXRlKCkgKyAxKSksXHJcbi8vICAgICAgICAgc3RhdHVzOiBIb21ld29ya1N0YXR1cy5kb25lXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNSxcclxuLy8gICAgICAgICBzdHVkZW50SWQ6IDIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJQaHlzaWNzXCIsXHJcbi8vICAgICAgICAgdGFzazpcclxuLy8gICAgICAgICAgIFwiQ29tcGxldGUgdGhlIGV4aXN0aW5nIHByb2R1Y3RzIGFuZCB1c2VyIHByb2ZpbGUgcmVzZWFyY2ggc28gdGhhdCB5b3UgYXJlIHJlYWR5IHRvIHR5cGUgYWxsIHRoZSByZXNlYXJjaCBwYWdlcyBpbiB0aGUgZmlyc3QgbGVzc29uIGluIFNlcHRlbWJlci4gUGxhbiBhIGNvbmNsdXNpb24gZm9yIGVhY2ggcGFnZSAodGhpcyBpcyB0aGUgcmVzZWFyY2ggYW5hbHlzaXMgcGFnZSBidXQgd2Ugd2lsbCBiZSBicmVha2luZyBpdCB1cCBpbiB0byBhIHBhcmFncmFwaCBvbiBlYWNoIHBhZ2UpLlxcblxcbllvdSBtaWdodCBhbHNvIHdhbnQgdG8gd3JpdGUgYSBkcmFmdCBEZXNpZ24gU3BlY2lmaWNhdGlvbiBhcyB3ZSB3aWxsIGNvbXBsZXRlIHRoYXQgaW4gTGVzc29uIDIgb2YgWTExLlxcblxcblVzZSB0aGUgcG93ZXIgcG9pbnQgdG8gZ3VpZGUgeW91LlwiLFxyXG4vLyAgICAgICAgIGNyZWF0ZWRCeTogXCJNciBGcmVuY2hcIixcclxuLy8gICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzEuc2V0RGF0ZShkYXRlTm93MS5nZXREYXRlKCkgKyAxKSksXHJcbi8vICAgICAgICAgYXR0YWNoZWRGaWxlczogZmFsc2UsXHJcbi8vICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzIuc2V0RGF0ZShkYXRlTm93Mi5nZXREYXRlKCkgKyAxKSksXHJcbi8vICAgICAgICAgc3RhdHVzOiBIb21ld29ya1N0YXR1cy5kb25lXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNixcclxuLy8gICAgICAgICBzdHVkZW50SWQ6IDIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJDaGVtaXN0cnlcIixcclxuLy8gICAgICAgICB0YXNrOlxyXG4vLyAgICAgICAgICAgXCJDb250aW51ZSB0byByZXZpc2UgZm9yIHlvdXIgc3BlYWtpbmcgZXhhbS4gUmV2aXNlZCB0aW1lcyBhdHRhY2hlZCBhcyB3ZWxsIGFzIHByZXNlbnRhdGlvbiB0aGVtZXMuXCIsXHJcbi8vICAgICAgICAgY3JlYXRlZEJ5OiBcIk1yIEZyZW5jaFwiLFxyXG4vLyAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShkYXRlTm93MS5zZXREYXRlKGRhdGVOb3cxLmdldERhdGUoKSArIDEpKSxcclxuLy8gICAgICAgICBhdHRhY2hlZEZpbGVzOiBmYWxzZSxcclxuLy8gICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSArIDEpKSxcclxuLy8gICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLmRvbmVcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA3LFxyXG4vLyAgICAgICAgIHN0dWRlbnRJZDogMixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIkJpb2xvZ3lcIixcclxuLy8gICAgICAgICB0YXNrOlxyXG4vLyAgICAgICAgICAgXCJZb3Ugd2lsbCBoYXZlIGEgbWVkaWNpbmUgbW9jayB0aGUgZmlyc3Qgd2VlayBiYWNrIGluIFllYXIgMTEuXFxuXFxuWW91IGhhdmUgYmVlbiByZXZpc2luZyBtZWRpY2luZSB0aGlzIGhhbGYgdGVybSwgYW5kIHlvdSB3aWxsIG5lZWQgdG8ga2VlcCB1cCB3aXRoIHRoaXMgcmV2aXNpb24gb3ZlciB0aGUgc3VtbWVyIGhvbGlkYXlzLiBNYW55IG9mIHlvdSBoYXZlIGJvdWdodCByZXZpc2lvbiBndWlkZXMgLSB1c2UgdGhlbSFcXG5cXG5JIGhhdmUgYWxzbyBhdHRhY2hlZCBNZWRpY2luZSBhbmQgV2VzdGVybiByZXZpc2lvbiB3b3JrIGJvb2tzLlwiLFxyXG4vLyAgICAgICAgIGNyZWF0ZWRCeTogXCJNciBGcmVuY2hcIixcclxuLy8gICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzEuc2V0RGF0ZShkYXRlTm93MS5nZXREYXRlKCkgKyAxKSksXHJcbi8vICAgICAgICAgYXR0YWNoZWRGaWxlczogZmFsc2UsXHJcbi8vICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzIuc2V0RGF0ZShkYXRlTm93Mi5nZXREYXRlKCkgKyAxKSksXHJcbi8vICAgICAgICAgc3RhdHVzOiBIb21ld29ya1N0YXR1cy50b2RvXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogOCxcclxuLy8gICAgICAgICBzdHVkZW50SWQ6IDIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJHZW9tZXRyeVwiLFxyXG4vLyAgICAgICAgIHRhc2s6XHJcbi8vICAgICAgICAgICBcIllvdSB3aWxsIGhhdmUgYSBtZWRpY2luZSBtb2NrIHRoZSBmaXJzdCB3ZWVrIGJhY2sgaW4gWWVhciAxMS5cXG5cXG5Zb3UgaGF2ZSBiZWVuIHJldmlzaW5nIG1lZGljaW5lIHRoaXMgaGFsZiB0ZXJtLCBhbmQgeW91IHdpbGwgbmVlZCB0byBrZWVwIHVwIHdpdGggdGhpcyByZXZpc2lvbiBvdmVyIHRoZSBzdW1tZXIgaG9saWRheXMuIE1hbnkgb2YgeW91IGhhdmUgYm91Z2h0IHJldmlzaW9uIGd1aWRlcyAtIHVzZSB0aGVtIVxcblxcbkkgaGF2ZSBhbHNvIGF0dGFjaGVkIE1lZGljaW5lIGFuZCBXZXN0ZXJuIHJldmlzaW9uIHdvcmsgYm9va3MuXCIsXHJcbi8vICAgICAgICAgY3JlYXRlZEJ5OiBcIk1yIEZpeGl0XCIsXHJcbi8vICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKGRhdGVOb3cxLnNldERhdGUoZGF0ZU5vdzEuZ2V0RGF0ZSgpICsgMSkpLFxyXG4vLyAgICAgICAgIGF0dGFjaGVkRmlsZXM6IHRydWUsXHJcbi8vICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzIuc2V0RGF0ZShkYXRlTm93Mi5nZXREYXRlKCkgKyAxKSksXHJcbi8vICAgICAgICAgc3RhdHVzOiBIb21ld29ya1N0YXR1cy50b2RvXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogOSxcclxuLy8gICAgICAgICBzdHVkZW50SWQ6IDEsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJQaHlzaWNhbCBFZHVjYXRpb25cIixcclxuLy8gICAgICAgICB0YXNrOlxyXG4vLyAgICAgICAgICAgXCJDb21wbGV0ZSB0aGUgZXhpc3RpbmcgcHJvZHVjdHMgYW5kIHVzZXIgcHJvZmlsZSByZXNlYXJjaCBzbyB0aGF0IHlvdSBhcmUgcmVhZHkgdG8gdHlwZSBhbGwgdGhlIHJlc2VhcmNoIHBhZ2VzIGluIHRoZSBmaXJzdCBsZXNzb24gaW4gU2VwdGVtYmVyLiBQbGFuIGEgY29uY2x1c2lvbiBmb3IgZWFjaCBwYWdlICh0aGlzIGlzIHRoZSByZXNlYXJjaCBhbmFseXNpcyBwYWdlIGJ1dCB3ZSB3aWxsIGJlIGJyZWFraW5nIGl0IHVwIGluIHRvIGEgcGFyYWdyYXBoIG9uIGVhY2ggcGFnZSkuXFxuXFxuWW91IG1pZ2h0IGFsc28gd2FudCB0byB3cml0ZSBhIGRyYWZ0IERlc2lnbiBTcGVjaWZpY2F0aW9uIGFzIHdlIHdpbGwgY29tcGxldGUgdGhhdCBpbiBMZXNzb24gMiBvZiBZMTEuXFxuXFxuVXNlIHRoZSBwb3dlciBwb2ludCB0byBndWlkZSB5b3UuXCIsXHJcbi8vICAgICAgICAgY3JlYXRlZEJ5OiBcIk1ycyBGcmVuY2hcIixcclxuLy8gICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzEuc2V0RGF0ZShkYXRlTm93MS5nZXREYXRlKCkgKyAxKSksXHJcbi8vICAgICAgICAgYXR0YWNoZWRGaWxlczogdHJ1ZSxcclxuLy8gICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSArIDEpKSxcclxuLy8gICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLnRvZG9cclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxMCxcclxuLy8gICAgICAgICBzdHVkZW50SWQ6IDIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJQcm9ncmFtbWluZyAxXCIsXHJcbi8vICAgICAgICAgdGFzazpcclxuLy8gICAgICAgICAgIFwiQ29udGludWUgdG8gcmV2aXNlIGZvciB5b3VyIHNwZWFraW5nIGV4YW0uIFJldmlzZWQgdGltZXMgYXR0YWNoZWQgYXMgd2VsbCBhcyBwcmVzZW50YXRpb24gdGhlbWVzLlwiLFxyXG4vLyAgICAgICAgIGNyZWF0ZWRCeTogXCJNcnMgUGFzdFwiLFxyXG4vLyAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShkYXRlTm93MS5zZXREYXRlKGRhdGVOb3cxLmdldERhdGUoKSArIDEpKSxcclxuLy8gICAgICAgICBhdHRhY2hlZEZpbGVzOiBmYWxzZSxcclxuLy8gICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSArIDEpKSxcclxuLy8gICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLnRvZG9cclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxMSxcclxuLy8gICAgICAgICBzdHVkZW50SWQ6IDIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZVwiLFxyXG4vLyAgICAgICAgIHRhc2s6XHJcbi8vICAgICAgICAgICBcIllvdSB3aWxsIGhhdmUgYSBtZWRpY2luZSBtb2NrIHRoZSBmaXJzdCB3ZWVrIGJhY2sgaW4gWWVhciAxMS5cXG5cXG5Zb3UgaGF2ZSBiZWVuIHJldmlzaW5nIG1lZGljaW5lIHRoaXMgaGFsZiB0ZXJtLCBhbmQgeW91IHdpbGwgbmVlZCB0byBrZWVwIHVwIHdpdGggdGhpcyByZXZpc2lvbiBvdmVyIHRoZSBzdW1tZXIgaG9saWRheXMuIE1hbnkgb2YgeW91IGhhdmUgYm91Z2h0IHJldmlzaW9uIGd1aWRlcyAtIHVzZSB0aGVtIVxcblxcbkkgaGF2ZSBhbHNvIGF0dGFjaGVkIE1lZGljaW5lIGFuZCBXZXN0ZXJuIHJldmlzaW9uIHdvcmsgYm9va3MuXCIsXHJcbi8vICAgICAgICAgY3JlYXRlZEJ5OiBcIk1yIEZyZW5jaFwiLFxyXG4vLyAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShkYXRlTm93MS5zZXREYXRlKGRhdGVOb3cxLmdldERhdGUoKSArIDEpKSxcclxuLy8gICAgICAgICBhdHRhY2hlZEZpbGVzOiBmYWxzZSxcclxuLy8gICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSArIDEpKSxcclxuLy8gICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLnRvZG9cclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxMixcclxuLy8gICAgICAgICBzdHVkZW50SWQ6IDIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJDb21wdXRlciBTY2llbmNlXCIsXHJcbi8vICAgICAgICAgdGFzazogXCJSZWFkIGFib3V0IFN5c3RlbSBBbmFseXNpcyAmIERlc2lnblwiLFxyXG4vLyAgICAgICAgIGNyZWF0ZWRCeTogXCJNciBGcmVuY2hcIixcclxuLy8gICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzEuc2V0RGF0ZShkYXRlTm93MS5nZXREYXRlKCkgKyAxKSksXHJcbi8vICAgICAgICAgYXR0YWNoZWRGaWxlczogZmFsc2UsXHJcbi8vICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzIuc2V0RGF0ZShkYXRlTm93Mi5nZXREYXRlKCkgKyAxKSksXHJcbi8vICAgICAgICAgc3RhdHVzOiBIb21ld29ya1N0YXR1cy50b2RvXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTMsXHJcbi8vICAgICAgICAgc3R1ZGVudElkOiAyLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiQ2hlbWlzdHJ5XCIsXHJcbi8vICAgICAgICAgdGFzazogXCJJbnRyb2R1Y3Rpb24gdG8gQ2hlbWlzdHJ5XCIsXHJcbi8vICAgICAgICAgY3JlYXRlZEJ5OiBcIk1yIEZyZW5jaFwiLFxyXG4vLyAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShkYXRlTm93MS5zZXREYXRlKGRhdGVOb3cxLmdldERhdGUoKSAtIDE1KSksXHJcbi8vICAgICAgICAgYXR0YWNoZWRGaWxlczogZmFsc2UsXHJcbi8vICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzIuc2V0RGF0ZShkYXRlTm93Mi5nZXREYXRlKCkgLSAxNSkpLFxyXG4vLyAgICAgICAgIHN0YXR1czogSG9tZXdvcmtTdGF0dXMucmVtb3ZlZFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDE0LFxyXG4vLyAgICAgICAgIHN0dWRlbnRJZDogMSxcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIlNjaWVuY2VcIixcclxuLy8gICAgICAgICB0YXNrOiBgQ29tcGxldGUgdGhlIGV4aXN0aW5nIHByb2R1Y3RzIGFuZCB1c2VyIHByb2ZpbGUgcmVzZWFyY2ggc28gdGhhdCB5b3UgYXJlIHJlYWR5IHRvIHR5cGUgYWxsIHRoZSByZXNlYXJjaCBwYWdlcyBpbiB0aGUgZmlyc3QgbGVzc29uIGluIFNlcHRlbWJlci4gUGxhbiBhIGNvbmNsdXNpb24gZm9yIGVhY2ggcGFnZSAodGhpcyBpcyB0aGUgcmVzZWFyY2ggYW5hbHlzaXMgcGFnZSBidXQgd2Ugd2lsbCBiZSBicmVha2luZyBpdCB1cCBpbiB0byBhIHBhcmFncmFwaCBvbiBlYWNoIHBhZ2UpLlxcblxcbllvdSBtaWdodCBhbHNvIHdhbnQgdG8gd3JpdGUgYSBkcmFmdCBEZXNpZ24gU3BlY2lmaWNhdGlvbiBhcyB3ZSB3aWxsIGNvbXBsZXRlIHRoYXQgaW4gTGVzc29uIDIgb2YgWTExLlxcblxcblVzZSB0aGUgcG93ZXIgcG9pbnQgdG8gZ3VpZGUgeW91LmAsXHJcbi8vICAgICAgICAgY3JlYXRlZEJ5OiBcIk1yIEZpeGl0XCIsXHJcbi8vICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKGRhdGVOb3cxLnNldERhdGUoZGF0ZU5vdzEuZ2V0RGF0ZSgpIC0gNykpLFxyXG4vLyAgICAgICAgIGF0dGFjaGVkRmlsZXM6IHRydWUsXHJcbi8vICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzIuc2V0RGF0ZShkYXRlTm93Mi5nZXREYXRlKCkgKyAyKSksXHJcbi8vICAgICAgICAgc3RhdHVzOiBIb21ld29ya1N0YXR1cy50b2RvXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTUsXHJcbi8vICAgICAgICAgc3R1ZGVudElkOiAxLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiTXVzaWNcIixcclxuLy8gICAgICAgICB0YXNrOiBgQ29tcGxldGUgdGhlIGV4aXN0aW5nIHByb2R1Y3RzIGFuZCB1c2VyIHByb2ZpbGUgcmVzZWFyY2ggc28gdGhhdCB5b3UgYXJlIHJlYWR5IHRvIHR5cGUgYWxsIHRoZSByZXNlYXJjaCBwYWdlcyBpbiB0aGUgZmlyc3QgbGVzc29uIGluIFNlcHRlbWJlci4gUGxhbiBhIGNvbmNsdXNpb24gZm9yIGVhY2ggcGFnZSAodGhpcyBpcyB0aGUgcmVzZWFyY2ggYW5hbHlzaXMgcGFnZSBidXQgd2Ugd2lsbCBiZSBicmVha2luZyBpdCB1cCBpbiB0byBhIHBhcmFncmFwaCBvbiBlYWNoIHBhZ2UpLlxcblxcbllvdSBtaWdodCBhbHNvIHdhbnQgdG8gd3JpdGUgYSBkcmFmdCBEZXNpZ24gU3BlY2lmaWNhdGlvbiBhcyB3ZSB3aWxsIGNvbXBsZXRlIHRoYXQgaW4gTGVzc29uIDIgb2YgWTExLlxcblxcblVzZSB0aGUgcG93ZXIgcG9pbnQgdG8gZ3VpZGUgeW91LmAsXHJcbi8vICAgICAgICAgY3JlYXRlZEJ5OiBcIk1yIEZpeGl0XCIsXHJcbi8vICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKGRhdGVOb3cxLnNldERhdGUoZGF0ZU5vdzEuZ2V0RGF0ZSgpIC0gNykpLFxyXG4vLyAgICAgICAgIGF0dGFjaGVkRmlsZXM6IHRydWUsXHJcbi8vICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzIuc2V0RGF0ZShkYXRlTm93Mi5nZXREYXRlKCkgKyAyKSksXHJcbi8vICAgICAgICAgc3RhdHVzOiBIb21ld29ya1N0YXR1cy50b2RvXHJcbi8vICAgICAgIH1cclxuLy8gICAgIF07XHJcblxyXG4vLyAgICAgY29uc3QgbGVzc29uOiBMZXNzb25bXSA9IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3Vycyg3LCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIk1hdHRoZXcgRG93bnNcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LnJlZyxcclxuLy8gICAgICAgICBjbGFzczogXCJSZWdcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIkFsYmVydCBFaW5zdGVpblwiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IHN1YmplY3Quc2NpZW5jZSxcclxuLy8gICAgICAgICBjbGFzczogXCIxMVNjMVwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIkZlcmRpbmFuZCBNZWdlbGxhblwiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QuaGlzdG9yeSxcclxuLy8gICAgICAgICBjbGFzczogXCIxMUhpMVwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDQsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDEwLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJcIixcclxuLy8gICAgICAgICBjbGFzczogXCJcIixcclxuLy8gICAgICAgICBicmVhazogdHJ1ZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDUsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMSwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiTHVkd2lnIFZhbiBCZWV0aG92ZW5cIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBzdWJqZWN0Lm11c2ljLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIjExTXUxXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNixcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTEsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTIsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIkFsYW4gVHVyaW5nXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogc3ViamVjdC5jb21wdXRpbmcsXHJcbi8vICAgICAgICAgY2xhc3M6IFwiMTFDbzFcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA3LFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMiwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMywgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJcIixcclxuLy8gICAgICAgICBjbGFzczogXCJcIixcclxuLy8gICAgICAgICBicmVhazogdHJ1ZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDgsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDEzLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbi8vICAgICAgICAgdGVhY2hlcjogXCJIYXJyeSBKYW1lcyBNb29yZVwiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QuZGVzaWduLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIklDVDFcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA5LFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxNSwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiTm9yYmVydCBIZXllc1wiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QuZW5nbGlzaCxcclxuLy8gICAgICAgICBjbGFzczogXCIxMUVuMVwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG5cclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxMCxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDcsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIk1hdHRoZXcgRG93bnNcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LnJlZyxcclxuLy8gICAgICAgICBjbGFzczogXCJSZWdcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxMSxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIkFsYmVydCBFaW5zdGVpblwiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiU2NpZW5jZVwiLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIjExU2MxXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTIsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3Vycyg5LCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiRmVyZGluYW5kIE1lZ2VsbGFuXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogc3ViamVjdC5lbmdsaXNoLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIjExSGkxXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTMsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbi8vICAgICAgICAgdGVhY2hlcjogXCJcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIlwiLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIlwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiB0cnVlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTQsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMCwgMzAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDExLCAwLCAwKSksXHJcbi8vICAgICAgICAgdGVhY2hlcjogXCJMdWR3aWcgVmFuIEJlZXRob3ZlblwiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QuYXJ0LFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIjExTXUxXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTUsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMSwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTIsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIkFsYW4gVHVyaW5nXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogc3ViamVjdC5tYXRoLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIjExQ28xXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTYsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMiwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIlwiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiXCIsXHJcbi8vICAgICAgICAgY2xhc3M6IFwiXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IHRydWVcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxNyxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDEzLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiSGFycnkgSmFtZXMgTW9vcmVcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBzdWJqZWN0Lmdlb2dyYXBoeSxcclxuLy8gICAgICAgICBjbGFzczogXCJJQ1QxXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTgsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTUsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIk5vcmJlcnQgSGV5ZXNcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBzdWJqZWN0Lmxhbmd1YWdlcyxcclxuLy8gICAgICAgICBjbGFzczogXCIxMUVuMVwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG5cclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxOSxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoNywgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbi8vICAgICAgICAgdGVhY2hlcjogXCJNYXR0aGV3IERvd25zXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogc3ViamVjdC5yZWcsXHJcbi8vICAgICAgICAgY2xhc3M6IFwiUmVnXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMjAsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiQWxiZXJ0IEVpbnN0ZWluXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogc3ViamVjdC5zY2llbmNlLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIjExU2MxXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMjEsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIkVkd2FyZCBUaG9tYXNcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIlBoeXNpY2FsIEVkdWNhdGlvblwiLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIjExUGUxXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMjIsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEwLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJcIixcclxuLy8gICAgICAgICBjbGFzczogXCJcIixcclxuLy8gICAgICAgICBicmVhazogdHJ1ZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIzLFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxMCwgMzAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTEsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIkx1ZHdpZyBWYW4gQmVldGhvdmVuXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogc3ViamVjdC5tdXNpYyxcclxuLy8gICAgICAgICBjbGFzczogXCIxMU11MVwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDI0LFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxMSwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxMiwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiQWxhbiBUdXJpbmdcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIkNvbXB1dGluZ1wiLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIjExQ28xXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMjUsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEzLCAwLCAwKSksXHJcbi8vICAgICAgICAgdGVhY2hlcjogXCJcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIlwiLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIlwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiB0cnVlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMjYsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEzLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbi8vICAgICAgICAgdGVhY2hlcjogXCJIYXJyeSBKYW1lcyBNb29yZVwiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QuZ2VvZ3JhcGh5LFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIklDVDFcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyNyxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTQsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTUsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIk5vcmJlcnQgSGV5ZXNcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBzdWJqZWN0Lmxhbmd1YWdlcyxcclxuLy8gICAgICAgICBjbGFzczogXCIxMUVuMVwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG5cclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyOCxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3Vycyg3LCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiTWF0dGhldyBEb3duc1wiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QucmVnLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIlJlZ1wiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDI5LFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3Vycyg5LCAwLCAwKSksXHJcbi8vICAgICAgICAgdGVhY2hlcjogXCJBbGFuIFR1cmluZ1wiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiQ29tcHV0aW5nXCIsXHJcbi8vICAgICAgICAgY2xhc3M6IFwiMTFTYzFcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzMCxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3Vycyg5LCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIkhhcnJ5IEphbWVzIE1vb3JlXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJEZXNpZ24gYW5kIFRlY2hub2xvZ3lcIixcclxuLy8gICAgICAgICBjbGFzczogXCIxMUhpMVwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMxLFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDEwLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbi8vICAgICAgICAgdGVhY2hlcjogXCJcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIlwiLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIlwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiB0cnVlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMzIsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTEsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIkx1ZHdpZyBWYW4gQmVldGhvdmVuXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJNdXNpY1wiLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIjExTXUxXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMzMsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTEsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMiwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiQWxiZXJ0IEVpbnN0ZWluXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJTY2llbmNlXCIsXHJcbi8vICAgICAgICAgY2xhc3M6IFwiMTFDbzFcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzNCxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMiwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDEzLCAwLCAwKSksXHJcbi8vICAgICAgICAgdGVhY2hlcjogXCJcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIlwiLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIlwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiB0cnVlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMzUsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiRmVyZGluYW5kIE1lZ2VsbGFuXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJIaXN0b3J5XCIsXHJcbi8vICAgICAgICAgY2xhc3M6IFwiSUNUMVwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDM2LFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTUsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIk5vcmJlcnQgSGV5ZXNcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIkVuZ2xpc2hcIixcclxuLy8gICAgICAgICBjbGFzczogXCIxMUVuMVwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG5cclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzNyxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoNywgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbi8vICAgICAgICAgdGVhY2hlcjogXCJNYXR0aGV3IERvd25zXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogc3ViamVjdC5yZWcsXHJcbi8vICAgICAgICAgY2xhc3M6IFwiUmVnXCIsXHJcbi8vICAgICAgICAgYnJlYWs6IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMzgsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiQWxiZXJ0IEVpbnN0ZWluXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJTY2llbmNlXCIsXHJcbi8vICAgICAgICAgY2xhc3M6IFwiMTFTYzFcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzOSxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiRmVyZGluYW5kIE1lZ2VsbGFuXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJIaXN0b3J5XCIsXHJcbi8vICAgICAgICAgY2xhc3M6IFwiMTFIaTFcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA0MCxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbi8vICAgICAgICAgdGVhY2hlcjogXCJcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIlwiLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIlwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiB0cnVlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNDEsXHJcbi8vICAgICAgICAgdXNlcklkOiAxLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMSwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiTHVkd2lnIFZhbiBCZWV0aG92ZW5cIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIk11c2ljXCIsXHJcbi8vICAgICAgICAgY2xhc3M6IFwiMTFNdTFcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA0MixcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTEsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTIsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIkFsYW4gVHVyaW5nXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJDb21wdXRpbmdcIixcclxuLy8gICAgICAgICBjbGFzczogXCIxMUNvMVwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDQzLFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMiwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMywgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiXCIsXHJcbi8vICAgICAgICAgc3ViamVjdDogXCJcIixcclxuLy8gICAgICAgICBjbGFzczogXCJcIixcclxuLy8gICAgICAgICBicmVhazogdHJ1ZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDQ0LFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMywgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiSGFycnkgSmFtZXMgTW9vcmVcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIkRlc2lnbiBhbmQgVGVjaG5vbG9neVwiLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIklDVDFcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA0NSxcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTQsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTUsIDAsIDApKSxcclxuLy8gICAgICAgICB0ZWFjaGVyOiBcIk5vcmJlcnQgSGV5ZXNcIixcclxuLy8gICAgICAgICBzdWJqZWN0OiBcIkVuZ2xpc2hcIixcclxuLy8gICAgICAgICBjbGFzczogXCIxMUVuMVwiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG5cclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA0NixcclxuLy8gICAgICAgICB1c2VySWQ6IDEsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3Vycyg3LCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiTWF0dGhldyBEb3duc1wiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QucmVnLFxyXG4vLyAgICAgICAgIGNsYXNzOiBcIlJlZ1wiLFxyXG4vLyAgICAgICAgIGJyZWFrOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDQ3LFxyXG4vLyAgICAgICAgIHVzZXJJZDogMSxcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIHRlYWNoZXI6IFwiRWR3YXJkIFRob21hc1wiLFxyXG4vLyAgICAgICAgIHN1YmplY3Q6IFwiUGh5c2ljYWwgRWR1Y2F0aW9uXCIsXHJcbi8vICAgICAgICAgY2xhc3M6IFwiMTFQZTFcIixcclxuLy8gICAgICAgICBicmVhazogZmFsc2VcclxuLy8gICAgICAgfVxyXG4vLyAgICAgXTtcclxuXHJcbi8vICAgICBjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbltdID0gW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgdGl0bGU6IFwiSG9tZXdvcmsgT3ZlcmR1ZVwiLFxyXG4vLyAgICAgICAgIG1lc3NhZ2U6XHJcbi8vICAgICAgICAgICBcIk1hdGggSG9tZXdvcmsgZHVlOiBcIiArXHJcbi8vICAgICAgICAgICBuZXh0V2Vla0ZyaWRheS50b0RhdGVTdHJpbmcoKSArXHJcbi8vICAgICAgICAgICBcIiBmb3IgTXJzLiBQb3R0c1wiLFxyXG4vLyAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL25vdGlmX2hvbWV3b3JrLnBuZ1wiLFxyXG4vLyAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGV4cGlyeURhdGU6IG5leHRXZWVrRnJpZGF5LFxyXG4vLyAgICAgICAgIGRpc3BsYXlPbkxvZ2luOiBmYWxzZSxcclxuLy8gICAgICAgICBzZWVuOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIsXHJcbi8vICAgICAgICAgdGl0bGU6IFwiTGF0ZSBSZWdpc3RyYXRpb25cIixcclxuLy8gICAgICAgICBtZXNzYWdlOiBcIkxhdGUgb24gXCIgKyBtb25kYXkudG9EYXRlU3RyaW5nKCksXHJcbi8vICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvbm90aWZfbGF0ZS5wbmdcIixcclxuLy8gICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDgsIDMwLCAwKSksXHJcbi8vICAgICAgICAgZXhwaXJ5RGF0ZTogdHVlc2RheSxcclxuLy8gICAgICAgICBkaXNwbGF5T25Mb2dpbjogZmFsc2UsXHJcbi8vICAgICAgICAgc2VlbjogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICAgIHRpdGxlOiBcIlVuYXV0aG9yaXplZCBBYnNlbmNlXCIsXHJcbi8vICAgICAgICAgbWVzc2FnZTogXCJBYnNlbnQgb24gXCIgKyB0dWVzZGF5LnRvRGF0ZVN0cmluZygpLFxyXG4vLyAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL25vdGlmX2Fic2VudC5wbmdcIixcclxuLy8gICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbi8vICAgICAgICAgZXhwaXJ5RGF0ZTogd2VkbmVzZGF5LFxyXG4vLyAgICAgICAgIGRpc3BsYXlPbkxvZ2luOiBmYWxzZSxcclxuLy8gICAgICAgICBzZWVuOiBmYWxzZVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDQsXHJcbi8vICAgICAgICAgdGl0bGU6IFwiSG9tZXdvcmsgTmVhciBEdWUgRGF0ZVwiLFxyXG4vLyAgICAgICAgIG1lc3NhZ2U6XHJcbi8vICAgICAgICAgICBcIlNjaWVuY2UgSG9tZXdvcmsgZHVlOiBcIiArXHJcbi8vICAgICAgICAgICBuZXh0V2Vla01vbmRheS50b0RhdGVTdHJpbmcoKSArXHJcbi8vICAgICAgICAgICBcIiBmb3IgTXIuIEZpeGl0XCIsXHJcbi8vICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvbm90aWZfaG9tZXdvcmsucG5nXCIsXHJcbi8vICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3Vycyg5LCAwLCAwKSksXHJcbi8vICAgICAgICAgZXhwaXJ5RGF0ZTogbmV4dFdlZWtNb25kYXksXHJcbi8vICAgICAgICAgZGlzcGxheU9uTG9naW46IGZhbHNlLFxyXG4vLyAgICAgICAgIHNlZW46IGZhbHNlXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNSxcclxuLy8gICAgICAgICB0aXRsZTogXCJOb24tdW5pZm9ybSBEYXlcIixcclxuLy8gICAgICAgICBtZXNzYWdlOiBcIk5vbi11bmlmb3JtIGRheSBvbiBcIiArIHdlZG5lc2RheS50b0RhdGVTdHJpbmcoKSxcclxuLy8gICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy9ub3RpZl9ub24tdW5pZm9ybS5wbmdcIixcclxuLy8gICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDcsIDAsIDApKSxcclxuLy8gICAgICAgICBleHBpcnlEYXRlOiB0aHVyc2RheSxcclxuLy8gICAgICAgICBkaXNwbGF5T25Mb2dpbjogZmFsc2UsXHJcbi8vICAgICAgICAgc2VlbjogZmFsc2VcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA2LFxyXG4vLyAgICAgICAgIHRpdGxlOiBcIkNsYXNzIFN1c3BlbnNpb25cIixcclxuLy8gICAgICAgICBtZXNzYWdlOlxyXG4vLyAgICAgICAgICAgXCJTY2hvb2wgaXMgc2h1dCBiZWNhdXNlIG9mIHRoZSB0eXBob29uIG9uIFwiICsgdGh1cnNkYXkudG9EYXRlU3RyaW5nKCksXHJcbi8vICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvbm90aWZfbm9jbGFzcy5wbmdcIixcclxuLy8gICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoNywgMCwgMCkpLFxyXG4vLyAgICAgICAgIGV4cGlyeURhdGU6IGZyaWRheSxcclxuLy8gICAgICAgICBkaXNwbGF5T25Mb2dpbjogZmFsc2UsXHJcbi8vICAgICAgICAgc2VlbjogZmFsc2VcclxuLy8gICAgICAgfVxyXG4vLyAgICAgXTtcclxuXHJcbi8vICAgICBjb25zdCBwZXJpb2Q6IFBlcmlvZFtdID0gW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmFtZTogXCJSMVwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDcsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoOCwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMixcclxuLy8gICAgICAgICBuYW1lOiBcIlIyXCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDcsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDgsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMsXHJcbi8vICAgICAgICAgbmFtZTogXCJSM1wiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDcsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoOCwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNCxcclxuLy8gICAgICAgICBuYW1lOiBcIlI0XCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3Vycyg3LCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoOCwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNSxcclxuLy8gICAgICAgICBuYW1lOiBcIlI1XCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoNywgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3Vycyg4LCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA2LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUjZcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDcsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3Vycyg4LCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNyxcclxuLy8gICAgICAgICBuYW1lOiBcIlAxXCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3Vycyg5LCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA4LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDFcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoOSwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogOSxcclxuLy8gICAgICAgICBuYW1lOiBcIlAxXCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3Vycyg5LCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxMCxcclxuLy8gICAgICAgICBuYW1lOiBcIlAxXCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoOSwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTEsXHJcbi8vICAgICAgICAgbmFtZTogXCJQMVwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoOSwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTIsXHJcbi8vICAgICAgICAgbmFtZTogXCJQMVwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDksIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG5cclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxMyxcclxuLy8gICAgICAgICBuYW1lOiBcIlAyXCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMCwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTQsXHJcbi8vICAgICAgICAgbmFtZTogXCJQMlwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3Vycyg5LCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMCwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTUsXHJcbi8vICAgICAgICAgbmFtZTogXCJQMlwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTAsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDE2LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDJcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMCwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMTcsXHJcbi8vICAgICAgICAgbmFtZTogXCJQMlwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTAsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDE4LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDJcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3VycygxMCwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcblxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDE5LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDNcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMCwgMzAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTEsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIwLFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDNcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMSwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMjEsXHJcbi8vICAgICAgICAgbmFtZTogXCJQM1wiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxMSwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMjIsXHJcbi8vICAgICAgICAgbmFtZTogXCJQM1wiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTEsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIzLFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDNcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMCwgMzAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTEsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDI0LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDNcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDExLCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMjUsXHJcbi8vICAgICAgICAgbmFtZTogXCJQNFwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDExLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDEyLCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyNixcclxuLy8gICAgICAgICBuYW1lOiBcIlA0XCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDExLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMiwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMjcsXHJcbi8vICAgICAgICAgbmFtZTogXCJQNFwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDExLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEyLCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyOCxcclxuLy8gICAgICAgICBuYW1lOiBcIlA0XCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMSwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDEyLCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyOSxcclxuLy8gICAgICAgICBuYW1lOiBcIlA0XCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTEsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTIsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMwLFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDRcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDExLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoMTIsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG5cclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzMSxcclxuLy8gICAgICAgICBuYW1lOiBcIlA1XCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTQsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMyLFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDVcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDE0LCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzMyxcclxuLy8gICAgICAgICBuYW1lOiBcIlA1XCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTQsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDM0LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDVcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDEzLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTQsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDM1LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDVcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMywgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxNCwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMzYsXHJcbi8vICAgICAgICAgbmFtZTogXCJQNVwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3VycygxNCwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcblxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDM3LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDZcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxNSwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMzgsXHJcbi8vICAgICAgICAgbmFtZTogXCJQNlwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTUsIDAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDM5LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiUDZcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxNSwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNDAsXHJcbi8vICAgICAgICAgbmFtZTogXCJQNlwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTQsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxNSwgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNDEsXHJcbi8vICAgICAgICAgbmFtZTogXCJQNlwiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDE1LCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA0MixcclxuLy8gICAgICAgICBuYW1lOiBcIlA2XCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDE1LCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNDMsXHJcbi8vICAgICAgICAgbmFtZTogXCJNb3JuaW5nIEJyZWFrXCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTAsIDMwLCAwKSlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA0NCxcclxuLy8gICAgICAgICBuYW1lOiBcIkFmdGVybm9vbiBCcmVha1wiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDEzLCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNDUsXHJcbi8vICAgICAgICAgbmFtZTogXCJNb3JuaW5nIEJyZWFrXCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDEwLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMCwgMzAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDQ2LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiQWZ0ZXJub29uIEJyZWFrXCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMywgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcblxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDQ3LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiTW9ybmluZyBCcmVha1wiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEwLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNDgsXHJcbi8vICAgICAgICAgbmFtZTogXCJBZnRlcm5vb24gQnJlYWtcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxMiwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxMywgMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcblxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDQ5LFxyXG4vLyAgICAgICAgIG5hbWU6IFwiTW9ybmluZyBCcmVha1wiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMCwgMzAsIDApKVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDUwLFxyXG4vLyAgICAgICAgIG5hbWU6IFwiQWZ0ZXJub29uIEJyZWFrXCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMiwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDEzLCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNTEsXHJcbi8vICAgICAgICAgbmFtZTogXCJNb3JuaW5nIEJyZWFrXCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuLy8gICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSlcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiA1MixcclxuLy8gICAgICAgICBuYW1lOiBcIkFmdGVybm9vbiBCcmVha1wiLFxyXG4vLyAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDEzLCAwLCAwKSlcclxuLy8gICAgICAgfSxcclxuXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNTMsXHJcbi8vICAgICAgICAgbmFtZTogXCJNb3JuaW5nIEJyZWFrXCIsXHJcbi8vICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4vLyAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNTQsXHJcbi8vICAgICAgICAgbmFtZTogXCJBZnRlcm5vb24gQnJlYWtcIixcclxuLy8gICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbi8vICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoMTMsIDAsIDApKVxyXG4vLyAgICAgICB9XHJcbi8vICAgICBdO1xyXG5cclxuLy8gICAgIGRhdGVOb3cxID0gbmV3IERhdGUoKTtcclxuLy8gICAgIGNvbnN0IHVzZXI6IFVzZXJbXSA9IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIGZuYW1lOiBcIkpheVwiLFxyXG4vLyAgICAgICAgIG1uYW1lOiBcIlwiLFxyXG4vLyAgICAgICAgIGxuYW1lOiBcIlNtaXRoXCIsXHJcbi8vICAgICAgICAgdXNlcm5hbWU6IFwiMVwiLFxyXG4vLyAgICAgICAgIHBhc3N3b3JkOiBcIjFcIixcclxuLy8gICAgICAgICBiaXJ0aGRhdGU6IFwiMVwiLFxyXG4vLyAgICAgICAgIHBob25lcHJpbWFyeTogXCI5MTIzXCIsXHJcbi8vICAgICAgICAgcGhvbmVzZWNvbmRhcnk6IFwiMDEyM1wiLFxyXG4vLyAgICAgICAgIGVtYWlscHJpbWFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiamF5c21pdGhAZW1haWwuY29tXCIpLFxyXG4vLyAgICAgICAgIGVtYWlsc2Vjb25kYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJqYXlzbWl0aDJAZW1haWwuY29tXCIpLFxyXG4vLyAgICAgICAgIGlzZmlyc3R0aW1lOiBmYWxzZSxcclxuLy8gICAgICAgICB1c2VydHlwZTogVXNlclR5cGUuc3R1ZGVudCxcclxuLy8gICAgICAgICBoYXNJbmNvbXBsZXRlSG9tZXdvcms6IHRydWUsXHJcbi8vICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZHAxLmpwZ1wiLFxyXG4vLyAgICAgICAgIGxhc3Rwd3VwZGF0ZTogZGF0ZU5vdzEsXHJcbi8vICAgICAgICAgbGFzdGxvZ2luOiBkYXRlTm93MSxcclxuLy8gICAgICAgICBjaGlsZHJlbjogW11cclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIGZuYW1lOiBcIkVtaWx5XCIsXHJcbi8vICAgICAgICAgbW5hbWU6IFwiXCIsXHJcbi8vICAgICAgICAgbG5hbWU6IFwiU21pdGhcIixcclxuLy8gICAgICAgICB1c2VybmFtZTogXCJzdHVkZW50MVwiLFxyXG4vLyAgICAgICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXHJcbi8vICAgICAgICAgYmlydGhkYXRlOiBcIjAyLzAzLzIwMDFcIixcclxuLy8gICAgICAgICBwaG9uZXByaW1hcnk6IFwiOTIzNFwiLFxyXG4vLyAgICAgICAgIHBob25lc2Vjb25kYXJ5OiBcIlwiLFxyXG4vLyAgICAgICAgIGVtYWlscHJpbWFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiZW1pbHlzbWl0aEBlbWFpbC5jb21cIiksXHJcbi8vICAgICAgICAgZW1haWxzZWNvbmRhcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImVtaWx5c21pdGgyQGVtYWlsLmNvbVwiKSxcclxuLy8gICAgICAgICBpc2ZpcnN0dGltZTogdHJ1ZSxcclxuLy8gICAgICAgICB1c2VydHlwZTogVXNlclR5cGUuc3R1ZGVudCxcclxuLy8gICAgICAgICBoYXNJbmNvbXBsZXRlSG9tZXdvcms6IGZhbHNlLFxyXG4vLyAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL2RwMi5qcGdcIixcclxuLy8gICAgICAgICBsYXN0cHd1cGRhdGU6IGRhdGVOb3cxLFxyXG4vLyAgICAgICAgIGxhc3Rsb2dpbjogZGF0ZU5vdzEsXHJcbi8vICAgICAgICAgY2hpbGRyZW46IFtdXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMyxcclxuLy8gICAgICAgICBmbmFtZTogXCJHcmFjZVwiLFxyXG4vLyAgICAgICAgIG1uYW1lOiBcIlwiLFxyXG4vLyAgICAgICAgIGxuYW1lOiBcIlNtaXRoXCIsXHJcbi8vICAgICAgICAgdXNlcm5hbWU6IFwic3R1ZGVudDJcIixcclxuLy8gICAgICAgICBwYXNzd29yZDogXCJwYXNzd29yZFwiLFxyXG4vLyAgICAgICAgIGJpcnRoZGF0ZTogXCIwMy8wMy8xOTc4XCIsXHJcbi8vICAgICAgICAgcGhvbmVwcmltYXJ5OiBcIjkzNDVcIixcclxuLy8gICAgICAgICBwaG9uZXNlY29uZGFyeTogXCIwMzQ1XCIsXHJcbi8vICAgICAgICAgZW1haWxwcmltYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJncmFjZXNtaXRoQGVtYWlsLmNvbVwiKSxcclxuLy8gICAgICAgICBlbWFpbHNlY29uZGFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiZ3JhY2VzbWl0aDJAZW1haWwuY29tXCIpLFxyXG4vLyAgICAgICAgIGlzZmlyc3R0aW1lOiBmYWxzZSxcclxuLy8gICAgICAgICB1c2VydHlwZTogVXNlclR5cGUuc3R1ZGVudCxcclxuLy8gICAgICAgICBoYXNJbmNvbXBsZXRlSG9tZXdvcms6IGZhbHNlLFxyXG4vLyAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL2RwMy5qcGdcIixcclxuLy8gICAgICAgICBsYXN0cHd1cGRhdGU6IGRhdGVOb3cxLFxyXG4vLyAgICAgICAgIGxhc3Rsb2dpbjogZGF0ZU5vdzEsXHJcbi8vICAgICAgICAgY2hpbGRyZW46IFtdXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNCxcclxuLy8gICAgICAgICBmbmFtZTogXCJGaW5uXCIsXHJcbi8vICAgICAgICAgbW5hbWU6IFwiSm9obnNvblwiLFxyXG4vLyAgICAgICAgIGxuYW1lOiBcIldpbGxpYW1zXCIsXHJcbi8vICAgICAgICAgdXNlcm5hbWU6IFwic3R1ZGVudDNcIixcclxuLy8gICAgICAgICBwYXNzd29yZDogXCJwYXNzd29yZFwiLFxyXG4vLyAgICAgICAgIGJpcnRoZGF0ZTogXCIwNC8wNS8xOTc1XCIsXHJcbi8vICAgICAgICAgcGhvbmVwcmltYXJ5OiBcIjk0NTZcIixcclxuLy8gICAgICAgICBwaG9uZXNlY29uZGFyeTogXCJcIixcclxuLy8gICAgICAgICBlbWFpbHByaW1hcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImZpbm53aWxsaWFtc0BlbWFpbC5jb21cIiksXHJcbi8vICAgICAgICAgZW1haWxzZWNvbmRhcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImZpbm53aWxsaWFtczJAZW1haWwuY29tXCIpLFxyXG4vLyAgICAgICAgIGlzZmlyc3R0aW1lOiBmYWxzZSxcclxuLy8gICAgICAgICB1c2VydHlwZTogVXNlclR5cGUuc3R1ZGVudCxcclxuLy8gICAgICAgICBoYXNJbmNvbXBsZXRlSG9tZXdvcms6IGZhbHNlLFxyXG4vLyAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL2RwNC5qcGdcIixcclxuLy8gICAgICAgICBsYXN0cHd1cGRhdGU6IGRhdGVOb3cxLFxyXG4vLyAgICAgICAgIGxhc3Rsb2dpbjogZGF0ZU5vdzEsXHJcbi8vICAgICAgICAgY2hpbGRyZW46IFtdXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNSxcclxuLy8gICAgICAgICBmbmFtZTogXCJKYXNvblwiLFxyXG4vLyAgICAgICAgIG1uYW1lOiBcIlwiLFxyXG4vLyAgICAgICAgIGxuYW1lOiBcIlNtaXRoXCIsXHJcbi8vICAgICAgICAgdXNlcm5hbWU6IFwicGFyZW50XCIsXHJcbi8vICAgICAgICAgcGFzc3dvcmQ6IFwicGFyZW50XCIsXHJcbi8vICAgICAgICAgYmlydGhkYXRlOiBcIjFcIixcclxuLy8gICAgICAgICBwaG9uZXByaW1hcnk6IFwiOTU2N1wiLFxyXG4vLyAgICAgICAgIHBob25lc2Vjb25kYXJ5OiBcIjA1NjdcIixcclxuLy8gICAgICAgICBlbWFpbHByaW1hcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImphc29uc21pdGhAZW1haWwuY29tXCIpLFxyXG4vLyAgICAgICAgIGVtYWlsc2Vjb25kYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJqYXNvbnNtaXRoMkBlbWFpbC5jb21cIiksXHJcbi8vICAgICAgICAgaXNmaXJzdHRpbWU6IGZhbHNlLFxyXG4vLyAgICAgICAgIHVzZXJ0eXBlOiBVc2VyVHlwZS5wYXJlbnQsXHJcbi8vICAgICAgICAgaGFzSW5jb21wbGV0ZUhvbWV3b3JrOiBudWxsLFxyXG4vLyAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL2RwNS5qcGdcIixcclxuLy8gICAgICAgICBsYXN0cHd1cGRhdGU6IGRhdGVOb3cxLFxyXG4vLyAgICAgICAgIGxhc3Rsb2dpbjogZGF0ZU5vdzEsXHJcbi8vICAgICAgICAgY2hpbGRyZW46IFtcclxuLy8gICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgICAgIGZuYW1lOiBcIkpheVwiLFxyXG4vLyAgICAgICAgICAgICBtbmFtZTogXCJcIixcclxuLy8gICAgICAgICAgICAgbG5hbWU6IFwiU21pdGhcIixcclxuLy8gICAgICAgICAgICAgdXNlcm5hbWU6IFwiMVwiLFxyXG4vLyAgICAgICAgICAgICBwYXNzd29yZDogXCIxXCIsXHJcbi8vICAgICAgICAgICAgIGJpcnRoZGF0ZTogXCIxXCIsXHJcbi8vICAgICAgICAgICAgIGVtYWlscHJpbWFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiamF5c21pdGhAZW1haWwuY29tXCIpLFxyXG4vLyAgICAgICAgICAgICBlbWFpbHNlY29uZGFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiamF5c21pdGgyQGVtYWlsLmNvbVwiKSxcclxuLy8gICAgICAgICAgICAgcGhvbmVwcmltYXJ5OiBcIjkxMjNcIixcclxuLy8gICAgICAgICAgICAgcGhvbmVzZWNvbmRhcnk6IFwiMDEyM1wiLFxyXG4vLyAgICAgICAgICAgICBpc2ZpcnN0dGltZTogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIHVzZXJ0eXBlOiBVc2VyVHlwZS5zdHVkZW50LFxyXG4vLyAgICAgICAgICAgICBoYXNJbmNvbXBsZXRlSG9tZXdvcms6IHRydWUsXHJcbi8vICAgICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL2RwMS5qcGdcIixcclxuLy8gICAgICAgICAgICAgbGFzdHB3dXBkYXRlOiBkYXRlTm93MSxcclxuLy8gICAgICAgICAgICAgbGFzdGxvZ2luOiBkYXRlTm93MSxcclxuLy8gICAgICAgICAgICAgY2hpbGRyZW46IFtdXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBpZDogMixcclxuLy8gICAgICAgICAgICAgZm5hbWU6IFwiRW1pbHlcIixcclxuLy8gICAgICAgICAgICAgbW5hbWU6IFwiXCIsXHJcbi8vICAgICAgICAgICAgIGxuYW1lOiBcIlNtaXRoXCIsXHJcbi8vICAgICAgICAgICAgIHVzZXJuYW1lOiBcInN0dWRlbnQxXCIsXHJcbi8vICAgICAgICAgICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXHJcbi8vICAgICAgICAgICAgIGJpcnRoZGF0ZTogXCIwMi8wMy8yMDAxXCIsXHJcbi8vICAgICAgICAgICAgIHBob25lcHJpbWFyeTogXCI5MjM0XCIsXHJcbi8vICAgICAgICAgICAgIHBob25lc2Vjb25kYXJ5OiBcIlwiLFxyXG4vLyAgICAgICAgICAgICBlbWFpbHByaW1hcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImVtaWx5c21pdGhAZW1haWwuY29tXCIpLFxyXG4vLyAgICAgICAgICAgICBlbWFpbHNlY29uZGFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiZW1pbHlzbWl0aDJAZW1haWwuY29tXCIpLFxyXG4vLyAgICAgICAgICAgICBpc2ZpcnN0dGltZTogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgdXNlcnR5cGU6IFVzZXJUeXBlLnN0dWRlbnQsXHJcbi8vICAgICAgICAgICAgIGhhc0luY29tcGxldGVIb21ld29yazogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL2RwMi5qcGdcIixcclxuLy8gICAgICAgICAgICAgbGFzdHB3dXBkYXRlOiBkYXRlTm93MSxcclxuLy8gICAgICAgICAgICAgbGFzdGxvZ2luOiBkYXRlTm93MSxcclxuLy8gICAgICAgICAgICAgY2hpbGRyZW46IFtdXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBpZDogMyxcclxuLy8gICAgICAgICAgICAgZm5hbWU6IFwiR3JhY2VcIixcclxuLy8gICAgICAgICAgICAgbW5hbWU6IFwiXCIsXHJcbi8vICAgICAgICAgICAgIGxuYW1lOiBcIlNtaXRoXCIsXHJcbi8vICAgICAgICAgICAgIHVzZXJuYW1lOiBcInN0dWRlbnQyXCIsXHJcbi8vICAgICAgICAgICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXHJcbi8vICAgICAgICAgICAgIGJpcnRoZGF0ZTogXCIwMy8wMy8xOTc4XCIsXHJcbi8vICAgICAgICAgICAgIHBob25lcHJpbWFyeTogXCI5MzQ1XCIsXHJcbi8vICAgICAgICAgICAgIHBob25lc2Vjb25kYXJ5OiBcIjAzNDVcIixcclxuLy8gICAgICAgICAgICAgZW1haWxwcmltYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJncmFjZXNtaXRoQGVtYWlsLmNvbVwiKSxcclxuLy8gICAgICAgICAgICAgZW1haWxzZWNvbmRhcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImdyYWNlc21pdGgyQGVtYWlsLmNvbVwiKSxcclxuLy8gICAgICAgICAgICAgaXNmaXJzdHRpbWU6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICB1c2VydHlwZTogVXNlclR5cGUuc3R1ZGVudCxcclxuLy8gICAgICAgICAgICAgaGFzSW5jb21wbGV0ZUhvbWV3b3JrOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZHAzLmpwZ1wiLFxyXG4vLyAgICAgICAgICAgICBsYXN0cHd1cGRhdGU6IGRhdGVOb3cxLFxyXG4vLyAgICAgICAgICAgICBsYXN0bG9naW46IGRhdGVOb3cxLFxyXG4vLyAgICAgICAgICAgICBjaGlsZHJlbjogW11cclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICBdXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNixcclxuLy8gICAgICAgICBmbmFtZTogXCJCb25cIixcclxuLy8gICAgICAgICBtbmFtZTogXCJKb2huc29uXCIsXHJcbi8vICAgICAgICAgbG5hbWU6IFwiV2lsbGlhbXNcIixcclxuLy8gICAgICAgICB1c2VybmFtZTogXCJwYXJlbnQxXCIsXHJcbi8vICAgICAgICAgcGFzc3dvcmQ6IFwicGFyZW50XCIsXHJcbi8vICAgICAgICAgYmlydGhkYXRlOiBcIjAxLzAyLzE5NTBcIixcclxuLy8gICAgICAgICBwaG9uZXByaW1hcnk6IFwiOTY3OFwiLFxyXG4vLyAgICAgICAgIHBob25lc2Vjb25kYXJ5OiBcIlwiLFxyXG4vLyAgICAgICAgIGVtYWlscHJpbWFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiYm9ud2lsbGlhbXNAZW1haWwuY29tXCIpLFxyXG4vLyAgICAgICAgIGVtYWlsc2Vjb25kYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJib253aWxsaWFtczJAZW1haWwuY29tXCIpLFxyXG4vLyAgICAgICAgIGlzZmlyc3R0aW1lOiB0cnVlLFxyXG4vLyAgICAgICAgIHVzZXJ0eXBlOiBVc2VyVHlwZS5wYXJlbnQsXHJcbi8vICAgICAgICAgaGFzSW5jb21wbGV0ZUhvbWV3b3JrOiBudWxsLFxyXG4vLyAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4vLyAgICAgICAgIGxhc3Rwd3VwZGF0ZTogZGF0ZU5vdzEsXHJcbi8vICAgICAgICAgbGFzdGxvZ2luOiBkYXRlTm93MSxcclxuLy8gICAgICAgICBjaGlsZHJlbjogW1xyXG4vLyAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBpZDogNCxcclxuLy8gICAgICAgICAgICAgZm5hbWU6IFwiRmlublwiLFxyXG4vLyAgICAgICAgICAgICBtbmFtZTogXCJKb2huc29uXCIsXHJcbi8vICAgICAgICAgICAgIGxuYW1lOiBcIldpbGxpYW1zXCIsXHJcbi8vICAgICAgICAgICAgIHVzZXJuYW1lOiBcInN0dWRlbnQzXCIsXHJcbi8vICAgICAgICAgICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXHJcbi8vICAgICAgICAgICAgIGJpcnRoZGF0ZTogXCIwNC8wNS8xOTc1XCIsXHJcbi8vICAgICAgICAgICAgIHBob25lcHJpbWFyeTogXCI5NDU2XCIsXHJcbi8vICAgICAgICAgICAgIHBob25lc2Vjb25kYXJ5OiBcIlwiLFxyXG4vLyAgICAgICAgICAgICBlbWFpbHByaW1hcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImZpbm53aWxsaWFtc0BlbWFpbC5jb21cIiksXHJcbi8vICAgICAgICAgICAgIGVtYWlsc2Vjb25kYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJmaW5ud2lsbGlhbXMyQGVtYWlsLmNvbVwiKSxcclxuLy8gICAgICAgICAgICAgaXNmaXJzdHRpbWU6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICB1c2VydHlwZTogVXNlclR5cGUuc3R1ZGVudCxcclxuLy8gICAgICAgICAgICAgaGFzSW5jb21wbGV0ZUhvbWV3b3JrOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZHA0LmpwZ1wiLFxyXG4vLyAgICAgICAgICAgICBsYXN0cHd1cGRhdGU6IGRhdGVOb3cxLFxyXG4vLyAgICAgICAgICAgICBsYXN0bG9naW46IGRhdGVOb3cxLFxyXG4vLyAgICAgICAgICAgICBjaGlsZHJlbjogW11cclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICBdXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogNyxcclxuLy8gICAgICAgICBmbmFtZTogXCJNYXJpYVwiLFxyXG4vLyAgICAgICAgIG1uYW1lOiBcIlwiLFxyXG4vLyAgICAgICAgIGxuYW1lOiBcIkJyb3duXCIsXHJcbi8vICAgICAgICAgdXNlcm5hbWU6IFwicGFyZW50MlwiLFxyXG4vLyAgICAgICAgIHBhc3N3b3JkOiBcInBhcmVudFwiLFxyXG4vLyAgICAgICAgIGJpcnRoZGF0ZTogXCIwMi8wMS8xOTUwXCIsXHJcbi8vICAgICAgICAgcGhvbmVwcmltYXJ5OiBcIjk3ODlcIixcclxuLy8gICAgICAgICBwaG9uZXNlY29uZGFyeTogXCIwNzg5XCIsXHJcbi8vICAgICAgICAgZW1haWxwcmltYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJtYXJpYWJyb3duQGVtYWlsLmNvbVwiKSxcclxuLy8gICAgICAgICBlbWFpbHNlY29uZGFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwibWFyaWFicm93bjJAZW1haWwuY29tXCIpLFxyXG4vLyAgICAgICAgIGlzZmlyc3R0aW1lOiBmYWxzZSxcclxuLy8gICAgICAgICB1c2VydHlwZTogVXNlclR5cGUucGFyZW50LFxyXG4vLyAgICAgICAgIGhhc0luY29tcGxldGVIb21ld29yazogbnVsbCxcclxuLy8gICAgICAgICBpbWFnZTogXCJcIixcclxuLy8gICAgICAgICBsYXN0cHd1cGRhdGU6IGRhdGVOb3cxLFxyXG4vLyAgICAgICAgIGxhc3Rsb2dpbjogZGF0ZU5vdzEsXHJcbi8vICAgICAgICAgY2hpbGRyZW46IFtdXHJcbi8vICAgICAgIH1cclxuLy8gICAgIF07XHJcblxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgYWNoaWV2ZW1lbnQsXHJcbi8vICAgICAgIGFkdmVydCxcclxuLy8gICAgICAgYXR0ZW5kYW5jZSxcclxuLy8gICAgICAgYmVoYXZpb3VyLFxyXG4vLyAgICAgICBjb250YWN0ZGV0YWlsLFxyXG4vLyAgICAgICBob21ld29yayxcclxuLy8gICAgICAgbGVzc29uLFxyXG4vLyAgICAgICBub3RpZmljYXRpb24sXHJcbi8vICAgICAgIHBlcmlvZCxcclxuLy8gICAgICAgdXNlclxyXG4vLyAgICAgfTtcclxuLy8gICB9XHJcbi8vIH1cclxuIl19