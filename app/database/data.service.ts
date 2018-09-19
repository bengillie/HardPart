import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Achievement } from '~/model/achievement.model';
import { Attendance } from '~/model/attendance.model';
import { Homework, HomeworkStatus } from '../model/homework.model';
import { Lesson, Period } from '../model/timetable.model';
import { Subject } from '~/model/timetable.model';

export class DataService implements InMemoryDbService {
  createDb() {
    var dateNow1 = new Date();
    var dateNow2 = new Date();
    var subject = Subject;
    
    var lessonDate = new Date();
    var p2WeekMonday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) - 13));
    var p2WeekTuesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 2));
    var p2WeekWednesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 3));
    var p2WeekThursday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 4));
    var p2WeekFriday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 5));
    var p2WeekSaturday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 6));

    var prevWeekMonday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 8));
    var prevWeekTuesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 2));
    var prevWeekWednesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 3));
    var prevWeekThursday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 4));
    var prevWeekFriday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 5));
    var prevWeekSaturday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 6));

    var monday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 8));
    var tuesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 2));
    var wednesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 3));
    var thursday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 4));
    var friday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 5));
    var saturday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 6));

    var nextWeekMonday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 8));
    var nextWeekTuesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 2));
    var nextWeekWednesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 3));
    var nextWeekThursday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 4));
    var nextWeekFriday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 5));
    var nextWeekSaturday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 6));

    var n2WeekMonday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 8));
    var n2WeekTuesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 2));
    var n2WeekWednesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 3));
    var n2WeekThursday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 4));
    var n2WeekFriday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 5));
    var n2WeekSaturday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 6));
        
    const achievement: Achievement[] = [
      { id: 1, subject: 'English', type: 'Excellent Work', date: p2WeekMonday, score: 10 },
      { id: 2, subject: 'Math', type: 'Excellent Work', date: p2WeekTuesday, score: 10 },
      { id: 3, subject: 'Art', type: 'Excellent Work', date: p2WeekWednesday, score: 2 },
      { id: 4, subject: 'English', type: 'Helping Others', date: p2WeekThursday, score: 8 },
      { id: 5, subject: 'Math', type: 'Excellent Work', date: p2WeekFriday, score: 30 },
      { id: 6, subject: 'Math', type: 'Excellent Work', date: p2WeekSaturday, score: 20 },
      { id: 7, subject: 'Math', type: 'Representing School', date: prevWeekMonday, score: 10 },
      { id: 8, subject: 'Math', type: 'Helping Others', date: prevWeekTuesday, score: 10 },
      { id: 9, subject: 'Science', type: 'Excellent Work', date: prevWeekWednesday, score: 10 },
      { id: 10, subject: 'Science', type: 'Representing School', date: prevWeekThursday, score: 10 },
    ];

    const attendance: Attendance[] = [
      { id: 1, date: monday, isPresent: true, isLateAM: false, isLatePM: false, isAbsenceAuthorised: null },
      { id: 2, date: tuesday, isPresent: true, isLateAM: true, isLatePM: false, isAbsenceAuthorised: null },
      { id: 3, date: wednesday, isPresent: true, isLateAM: false, isLatePM: true, isAbsenceAuthorised: null },
      { id: 4, date: thursday, isPresent: true, isLateAM: true, isLatePM: true, isAbsenceAuthorised: null },
      { id: 5, date: friday, isPresent: false, isLateAM: false, isLatePM: false, isAbsenceAuthorised: true },
      { id: 6, date: saturday, isPresent: false, isLateAM: false, isLatePM: false, isAbsenceAuthorised: false },
      { id: 7, date: nextWeekMonday, isPresent: true, isLateAM: false, isLatePM: false, isAbsenceAuthorised: null },
      { id: 8, date: nextWeekTuesday, isPresent: true, isLateAM: true, isLatePM: false, isAbsenceAuthorised: null },
      { id: 9, date: nextWeekWednesday, isPresent: true, isLateAM: false, isLatePM: true, isAbsenceAuthorised: null },
      { id: 10, date: nextWeekThursday, isPresent: true, isLateAM: true, isLatePM: true, isAbsenceAuthorised: null },
      { id: 11, date: nextWeekFriday, isPresent: false, isLateAM: false, isLatePM: false, isAbsenceAuthorised: true },
      { id: 12, date: nextWeekSaturday, isPresent: false, isLateAM: false, isLatePM: false, isAbsenceAuthorised: false },
      { id: 13, date: n2WeekMonday, isPresent: true, isLateAM: false, isLatePM: false, isAbsenceAuthorised: false },
      { id: 14, date: n2WeekTuesday, isPresent: true, isLateAM: false, isLatePM: false, isAbsenceAuthorised: false },
      { id: 15, date: n2WeekWednesday, isPresent: true, isLateAM: true, isLatePM: false, isAbsenceAuthorised: false },
      { id: 16, date: n2WeekThursday, isPresent: true, isLateAM: false, isLatePM: true, isAbsenceAuthorised: false },
      { id: 17, date: n2WeekFriday, isPresent: true, isLateAM: true, isLatePM: true, isAbsenceAuthorised: false },
      { id: 18, date: n2WeekSaturday, isPresent: true, isLateAM: false, isLatePM: false, isAbsenceAuthorised: false }
    ];

    const homework: Homework[] = [
      { id: 1, subject: 'Product', 
        task: `Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.`, 
        createdBy: 'Mr Fixit', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 7)), attachedFiles: true, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() - 7)), status: HomeworkStatus.done 
      },
      { id: 2, subject: 'French', 
        task: `Continue to revise for your speaking exam. Revised times attached as well as presentation themes.`, 
        createdBy: 'Mrs French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: true, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.done 
      },
      { id: 3, subject: 'History', 
        task: `You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.`, 
        createdBy: 'Mrs Past', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.done 
      },
      { id: 4, subject: 'Maths', 
        task: `I have attached the speaking timetables for next week. You will need to arrive at the holding room (ML10) at the following times:\n\nIf your exam is at 9 or 9.15 - sign in to tutor and then go straight to holding room.\nIf your exam is from 9.30 to 10.45 go at start of lesson 1.\nIf your exam is from 11.25 to 12.50 go at start of lesson 3.\nIf your exam is in the afternoon, go at the start of lesson 5.`, 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.done 
      },
      { id: 5, subject: 'Physics', 
        task: 'Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.done 
      },
      { id: 6, subject: 'Chemistry', 
        task: 'Continue to revise for your speaking exam. Revised times attached as well as presentation themes.', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.done 
      },
      { id: 7, subject: 'Biology', 
        task: 'You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo 
      },
      { id: 8, subject: 'Geometry', 
        task: 'You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.', 
        createdBy: 'Mr Fixit', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: true, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo 
      },
      { id: 9, subject: 'Physical Education', 
        task: 'Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.', 
        createdBy: 'Mrs French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: true, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo 
      },
      { id: 10, subject: 'Programming 1', 
        task: 'Continue to revise for your speaking exam. Revised times attached as well as presentation themes.', 
        createdBy: 'Mrs Past', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo 
      },
      { id: 11, subject: 'Artificial Intelligence', 
        task: 'You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo 
      },
      { id: 12, subject: 'Computer Science', 
        task: 'Read about System Analysis & Design', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo 
      },
      { id: 13, subject: 'Chemistry', 
        task: 'Introduction to Chemistry', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 15)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() - 15)), status: HomeworkStatus.removed 
      },
    ];

    const lessons: Lesson[] = [
      { id: 33, userId: 1, startDate: new Date(monday.setHours(7, 0, 0)), endDate: new Date(monday.setHours(8, 0, 0)), teacher: "Matthew Downs", subject: subject.reg, class: "Reg"},
      { id: 1, userId: 1, startDate: new Date(monday.setHours(8, 0, 0)), endDate: new Date(monday.setHours(9, 0, 0)), teacher: "Albert Einstein", subject: subject.science, class: "11Sc1"},
      { id: 2, userId: 1, startDate: new Date(monday.setHours(9, 0, 0)), endDate: new Date(monday.setHours(10, 0, 0)), teacher: "Ferdinand Megellan", subject: subject.history, class: "11Hi1"},
      { id: 3, userId: 1, startDate: new Date(monday.setHours(10, 0, 0)), endDate: new Date(monday.setHours(10, 30, 0)), teacher: "", subject: "", class: ""},
      { id: 4, userId: 1, startDate: new Date(monday.setHours(10, 30, 0)), endDate: new Date(monday.setHours(11, 0, 0)), teacher: "Ludwig Van Beethoven", subject: subject.music, class: "11Mu1"},
      { id: 5, userId: 1, startDate: new Date(monday.setHours(11, 0, 0)), endDate: new Date(monday.setHours(12, 0, 0)), teacher: "Alan Turing", subject: subject.computing, class: "11Co1"},
      { id: 6, userId: 1, startDate: new Date(monday.setHours(12, 0, 0)), endDate: new Date(monday.setHours(13, 0, 0)), teacher: "", subject: "", class: ""},
      { id: 7, userId: 1, startDate: new Date(monday.setHours(13, 0, 0)), endDate: new Date(monday.setHours(14, 0, 0)), teacher: "Harry James Moore", subject: subject.design, class: "ICT1"},
      { id: 8, userId: 1, startDate: new Date(monday.setHours(14, 0, 0)), endDate: new Date(monday.setHours(15, 0, 0)), teacher: "Norbert Heyes", subject: subject.english, class: "11En1"},
      
      { id: 34, userId: 1, startDate: new Date(tuesday.setHours(7, 0, 0)), endDate: new Date(tuesday.setHours(8, 0, 0)), teacher: "Matthew Downs", subject: subject.reg, class: "Reg"},
      { id: 9, userId: 1, startDate: new Date(tuesday.setHours(8, 0, 0)), endDate: new Date(tuesday.setHours(9, 0, 0)), teacher: "Albert Einstein", subject: "Science", class: "11Sc1"},
      { id: 10, userId: 1, startDate: new Date(tuesday.setHours(9, 0, 0)), endDate: new Date(tuesday.setHours(10, 0, 0)), teacher: "Ferdinand Megellan", subject: subject.english, class: "11Hi1"},
      { id: 11, userId: 1, startDate: new Date(tuesday.setHours(10, 0, 0)), endDate: new Date(tuesday.setHours(10, 30, 0)), teacher: "", subject: "", class: ""},
      { id: 12, userId: 1, startDate: new Date(tuesday.setHours(10, 30, 0)), endDate: new Date(tuesday.setHours(11, 0, 0)), teacher: "Ludwig Van Beethoven", subject: subject.art, class: "11Mu1"},
      { id: 13, userId: 1, startDate: new Date(tuesday.setHours(11, 0, 0)), endDate: new Date(tuesday.setHours(12, 0, 0)), teacher: "Alan Turing", subject: subject.math, class: "11Co1"},
      { id: 14, userId: 1, startDate: new Date(tuesday.setHours(12, 0, 0)), endDate: new Date(tuesday.setHours(13, 0, 0)), teacher: "", subject: "", class: ""},
      { id: 15, userId: 1, startDate: new Date(tuesday.setHours(13, 0, 0)), endDate: new Date(tuesday.setHours(14, 0, 0)), teacher: "Harry James Moore", subject: subject.geography, class: "ICT1"},
      { id: 16, userId: 1, startDate: new Date(tuesday.setHours(14, 0, 0)), endDate: new Date(tuesday.setHours(15, 0, 0)), teacher: "Norbert Heyes", subject: subject.languages, class: "11En1"},
      
      { id: 35, userId: 1, startDate: new Date(thursday.setHours(7, 0, 0)), endDate: new Date(thursday.setHours(8, 0, 0)), teacher: "Matthew Downs", subject: "Registration", class: "Reg"},
      { id: 17, userId: 1, startDate: new Date(thursday.setHours(8, 0, 0)), endDate: new Date(thursday.setHours(9, 0, 0)), teacher: "Albert Einstein", subject: "Science", class: "11Sc1"},
      { id: 18, userId: 1, startDate: new Date(thursday.setHours(9, 0, 0)), endDate: new Date(thursday.setHours(10, 0, 0)), teacher: "Ferdinand Megellan", subject: "History", class: "11Hi1"},
      { id: 19, userId: 1, startDate: new Date(thursday.setHours(10, 0, 0)), endDate: new Date(thursday.setHours(10, 30, 0)), teacher: "", subject: "", class: ""},
      { id: 20, userId: 1, startDate: new Date(thursday.setHours(10, 30, 0)), endDate: new Date(thursday.setHours(11, 0, 0)), teacher: "Ludwig Van Beethoven", subject: "Music", class: "11Mu1"},
      { id: 21, userId: 1, startDate: new Date(thursday.setHours(11, 0, 0)), endDate: new Date(thursday.setHours(12, 0, 0)), teacher: "Alan Turing", subject: "Computing", class: "11Co1"},
      { id: 22, userId: 1, startDate: new Date(thursday.setHours(12, 0, 0)), endDate: new Date(thursday.setHours(13, 0, 0)), teacher: "", subject: "", class: ""},
      { id: 23, userId: 1, startDate: new Date(thursday.setHours(13, 0, 0)), endDate: new Date(thursday.setHours(14, 0, 0)), teacher: "Harry James Moore", subject: "Design and Technology", class: "ICT1"},
      { id: 24, userId: 1, startDate: new Date(thursday.setHours(14, 0, 0)), endDate: new Date(thursday.setHours(15, 0, 0)), teacher: "Norbert Heyes", subject: "English", class: "11En1"},
      
      { id: 34, userId: 1, startDate: new Date(friday.setHours(7, 0, 0)), endDate: new Date(friday.setHours(8, 0, 0)), teacher: "Matthew Downs", subject: "Registration", class: "Reg"},
      { id: 25, userId: 1, startDate: new Date(friday.setHours(8, 0, 0)), endDate: new Date(friday.setHours(9, 0, 0)), teacher: "Albert Einstein", subject: "Science", class: "11Sc1"},
      { id: 26, userId: 1, startDate: new Date(friday.setHours(9, 0, 0)), endDate: new Date(friday.setHours(10, 0, 0)), teacher: "Ferdinand Megellan", subject: "History", class: "11Hi1"},
      { id: 27, userId: 1, startDate: new Date(friday.setHours(10, 0, 0)), endDate: new Date(friday.setHours(10, 30, 0)), teacher: "", subject: "", class: ""},
      { id: 28, userId: 1, startDate: new Date(friday.setHours(10, 30, 0)), endDate: new Date(friday.setHours(11, 0, 0)), teacher: "Ludwig Van Beethoven", subject: "Music", class: "11Mu1"},
      { id: 29, userId: 1, startDate: new Date(friday.setHours(11, 0, 0)), endDate: new Date(friday.setHours(12, 0, 0)), teacher: "Alan Turing", subject: "Computing", class: "11Co1"},
      { id: 30, userId: 1, startDate: new Date(friday.setHours(12, 0, 0)), endDate: new Date(friday.setHours(13, 0, 0)), teacher: "", subject: "", class: ""},
      { id: 31, userId: 1, startDate: new Date(friday.setHours(13, 0, 0)), endDate: new Date(friday.setHours(14, 0, 0)), teacher: "Harry James Moore", subject: "Design and Technology", class: "ICT1"},
      { id: 32, userId: 1, startDate: new Date(friday.setHours(14, 0, 0)), endDate: new Date(friday.setHours(15, 0, 0)), teacher: "Norbert Heyes", subject: "English", class: "11En1"},

      { id: 34, userId: 1, startDate: new Date(saturday.setHours(7, 0, 0)), endDate: new Date(saturday.setHours(8, 0, 0)), teacher: "Matthew Downs", subject: "Registration", class: "Reg"},
      { id: 33, userId: 1, startDate: new Date(saturday.setHours(9, 0, 0)), endDate: new Date(saturday.setHours(10, 0, 0)), teacher: "Edward Thomas", subject: "Physical Education", class: "11Pe1"},  
    ];

    const periods: Period[] = [
      { name: "R1", startDate: new Date(monday.setHours(7, 0, 0)), endDate: new Date(monday.setHours(8, 0, 0)) },
      { name: "R2", startDate: new Date(tuesday.setHours(7, 0, 0)), endDate: new Date(tuesday.setHours(8, 0, 0)) },
      { name: "R3", startDate: new Date(wednesday.setHours(7, 0, 0)), endDate: new Date(wednesday.setHours(8, 0, 0)) },
      { name: "R4", startDate: new Date(thursday.setHours(7, 0, 0)), endDate: new Date(thursday.setHours(8, 0, 0)) },
      { name: "R5", startDate: new Date(friday.setHours(7, 0, 0)), endDate: new Date(friday.setHours(8, 0, 0)) },
      { name: "R6", startDate: new Date(saturday.setHours(7, 0, 0)), endDate: new Date(saturday.setHours(8, 0, 0)) },

      { name: "P1", startDate: new Date(monday.setHours(8, 0, 0)), endDate: new Date(monday.setHours(9, 0, 0)) },
      { name: "P1", startDate: new Date(tuesday.setHours(8, 0, 0)), endDate: new Date(tuesday.setHours(9, 0, 0)) },
      { name: "P1", startDate: new Date(wednesday.setHours(8, 0, 0)), endDate: new Date(wednesday.setHours(9, 0, 0)) },
      { name: "P1", startDate: new Date(thursday.setHours(8, 0, 0)), endDate: new Date(thursday.setHours(9, 0, 0)) },
      { name: "P1", startDate: new Date(friday.setHours(8, 0, 0)), endDate: new Date(friday.setHours(9, 0, 0)) },
      { name: "P1", startDate: new Date(saturday.setHours(8, 0, 0)), endDate: new Date(saturday.setHours(9, 0, 0)) },
      
      { name: "P2", startDate: new Date(monday.setHours(9, 0, 0)), endDate: new Date(monday.setHours(10, 0, 0)) },
      { name: "P2", startDate: new Date(tuesday.setHours(9, 0, 0)), endDate: new Date(tuesday.setHours(10, 0, 0)) },
      { name: "P2", startDate: new Date(wednesday.setHours(9, 0, 0)), endDate: new Date(wednesday.setHours(10, 0, 0)) },
      { name: "P2", startDate: new Date(thursday.setHours(9, 0, 0)), endDate: new Date(thursday.setHours(10, 0, 0)) },
      { name: "P2", startDate: new Date(friday.setHours(9, 0, 0)), endDate: new Date(friday.setHours(10, 0, 0)) },
      { name: "P2", startDate: new Date(saturday.setHours(9, 0, 0)), endDate: new Date(saturday.setHours(10, 0, 0)) },
      
      { name: "P3", startDate: new Date(monday.setHours(10, 30, 0)), endDate: new Date(monday.setHours(11, 0, 0)) },
      { name: "P3", startDate: new Date(tuesday.setHours(10, 30, 0)), endDate: new Date(tuesday.setHours(11, 0, 0)) },
      { name: "P3", startDate: new Date(wednesday.setHours(10, 30, 0)), endDate: new Date(wednesday.setHours(11, 0, 0)) },
      { name: "P3", startDate: new Date(thursday.setHours(10, 30, 0)), endDate: new Date(thursday.setHours(11, 0, 0)) },
      { name: "P3", startDate: new Date(friday.setHours(10, 30, 0)), endDate: new Date(friday.setHours(11, 0, 0)) },
      { name: "P3", startDate: new Date(saturday.setHours(10, 30, 0)), endDate: new Date(saturday.setHours(11, 0, 0)) },

      { name: "P4", startDate: new Date(monday.setHours(11, 0, 0)), endDate: new Date(monday.setHours(12, 0, 0)) },
      { name: "P4", startDate: new Date(tuesday.setHours(11, 0, 0)), endDate: new Date(tuesday.setHours(12, 0, 0)) },
      { name: "P4", startDate: new Date(wednesday.setHours(11, 0, 0)), endDate: new Date(wednesday.setHours(12, 0, 0)) },
      { name: "P4", startDate: new Date(thursday.setHours(11, 0, 0)), endDate: new Date(thursday.setHours(12, 0, 0)) },
      { name: "P4", startDate: new Date(friday.setHours(11, 0, 0)), endDate: new Date(friday.setHours(12, 0, 0)) },
      { name: "P4", startDate: new Date(saturday.setHours(11, 0, 0)), endDate: new Date(saturday.setHours(12, 0, 0)) },
      
      { name: "P5", startDate: new Date(monday.setHours(13, 0, 0)), endDate: new Date(monday.setHours(14, 0, 0)) },
      { name: "P5", startDate: new Date(tuesday.setHours(13, 0, 0)), endDate: new Date(tuesday.setHours(14, 0, 0)) },
      { name: "P5", startDate: new Date(wednesday.setHours(13, 0, 0)), endDate: new Date(wednesday.setHours(14, 0, 0)) },
      { name: "P5", startDate: new Date(thursday.setHours(13, 0, 0)), endDate: new Date(thursday.setHours(14, 0, 0)) },
      { name: "P5", startDate: new Date(friday.setHours(13, 0, 0)), endDate: new Date(friday.setHours(14, 0, 0)) },
      { name: "P5", startDate: new Date(saturday.setHours(13, 0, 0)), endDate: new Date(saturday.setHours(14, 0, 0)) },

      { name: "P6", startDate: new Date(monday.setHours(14, 0, 0)), endDate: new Date(monday.setHours(15, 0, 0)) },
      { name: "P6", startDate: new Date(tuesday.setHours(14, 0, 0)), endDate: new Date(tuesday.setHours(15, 0, 0)) },
      { name: "P6", startDate: new Date(wednesday.setHours(14, 0, 0)), endDate: new Date(wednesday.setHours(15, 0, 0)) },
      { name: "P6", startDate: new Date(thursday.setHours(14, 0, 0)), endDate: new Date(thursday.setHours(15, 0, 0)) },
      { name: "P6", startDate: new Date(friday.setHours(14, 0, 0)), endDate: new Date(friday.setHours(15, 0, 0)) },
      { name: "P6", startDate: new Date(saturday.setHours(14, 0, 0)), endDate: new Date(saturday.setHours(15, 0, 0)) },

      { name: "B1", startDate: new Date(monday.setHours(10, 0, 0)), endDate: new Date(monday.setHours(10, 30, 0)) },
      { name: "B1", startDate: new Date(monday.setHours(12, 0, 0)), endDate: new Date(monday.setHours(13, 0, 0)) },

      { name: "B2", startDate: new Date(tuesday.setHours(10, 0, 0)), endDate: new Date(tuesday.setHours(10, 30, 0)) },
      { name: "B2", startDate: new Date(tuesday.setHours(12, 0, 0)), endDate: new Date(tuesday.setHours(13, 0, 0)) },

      { name: "B3", startDate: new Date(wednesday.setHours(10, 0, 0)), endDate: new Date(wednesday.setHours(10, 30, 0)) },
      { name: "B3", startDate: new Date(wednesday.setHours(12, 0, 0)), endDate: new Date(wednesday.setHours(13, 0, 0)) },

      { name: "B4", startDate: new Date(thursday.setHours(10, 0, 0)), endDate: new Date(thursday.setHours(10, 30, 0)) },
      { name: "B4", startDate: new Date(thursday.setHours(12, 0, 0)), endDate: new Date(thursday.setHours(13, 0, 0)) },

      { name: "B5", startDate: new Date(friday.setHours(10, 0, 0)), endDate: new Date(friday.setHours(10, 30, 0)) },
      { name: "B5", startDate: new Date(friday.setHours(12, 0, 0)), endDate: new Date(friday.setHours(13, 0, 0)) },

      { name: "B6", startDate: new Date(saturday.setHours(10, 0, 0)), endDate: new Date(saturday.setHours(10, 30, 0)) },
      { name: "B6", startDate: new Date(saturday.setHours(12, 0, 0)), endDate: new Date(saturday.setHours(13, 0, 0)) },
    ];

    const users = [
      /* { id: 1, username: 'student1', password: 'password', birthdate: '01/02/1998', usertype: 0 }, */
      { id: 1, username: '1', password: '1', birthdate: '1', usertype: 0 },
      { id: 2, username: 'student2', password: 'password', birthdate: '02/03/2001', usertype: 0 },
      { id: 3, username: 'parent1', password: 'password', birthdate: '03/03/1978', usertype: 1 },
      { id: 4, username: 'parent2', password: 'password', birthdate: '04/05/1975', usertype: 1 }
    ];
    
    return { achievement, attendance, homework, lessons, periods, users }; 
  }
}
