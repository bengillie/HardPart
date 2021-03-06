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
