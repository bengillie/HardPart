import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Homework, HomeworkStatus } from '../model/homework.model';
import { Lesson, Period } from '../model/timetable.model';

export class DataService implements InMemoryDbService {
  createDb() {
    var dateNow1 = new Date();
    var dateNow2 = new Date();

    var lessonDate = new Date();
    var monday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 1) );
    var tuesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 2));
    var wednesday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 3));
    var thursday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 4));
    var friday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 5));
    var saturday = new Date(lessonDate.setDate((lessonDate.getDate() - lessonDate.getDay()) + 6));
        
    const homework: Homework[] = [
      { id: 1, subject: 'Product', 
        task: `Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.`, 
        createdBy: 'Mr Fixit', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 7)), attachedFiles: true, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() - 7)), status: HomeworkStatus.done },
      { id: 2, subject: 'French', 
        task: `Continue to revise for your speaking exam. Revised times attached as well as presentation themes.`, 
        createdBy: 'Mrs French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: true, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.done },
      { id: 3, subject: 'History', 
        task: `You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.`, 
        createdBy: 'Mrs Past', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.done },
      { id: 4, subject: 'Maths', 
        task: `I have attached the speaking timetables for next week. You will need to arrive at the holding room (ML10) at the following times:\n\nIf your exam is at 9 or 9.15 - sign in to tutor and then go straight to holding room.\nIf your exam is from 9.30 to 10.45 go at start of lesson 1.\nIf your exam is from 11.25 to 12.50 go at start of lesson 3.\nIf your exam is in the afternoon, go at the start of lesson 5.`, 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.done },
      { id: 5, subject: 'Physics', 
        task: 'Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.done },
      { id: 6, subject: 'Chemistry', 
        task: 'Continue to revise for your speaking exam. Revised times attached as well as presentation themes.', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.done },
      { id: 7, subject: 'Biology', 
        task: 'You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo },
      { id: 8, subject: 'Geometry', 
        task: 'You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.', 
        createdBy: 'Mr Fixit', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: true, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo },
      { id: 9, subject: 'Physical Education', 
        task: 'Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.', 
        createdBy: 'Mrs French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: true, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo },
      { id: 10, subject: 'Programming 1', 
        task: 'Continue to revise for your speaking exam. Revised times attached as well as presentation themes.', 
        createdBy: 'Mrs Past', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo },
      { id: 11, subject: 'Artificial Intelligence', 
        task: 'You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo },
      { id: 12, subject: 'Computer Science', 
        task: 'Read about System Analysis & Design', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)), status: HomeworkStatus.todo },
       { id: 13, subject: 'Chemistry', 
        task: 'Introduction to Chemistry', 
        createdBy: 'Mr French', createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 15)), attachedFiles: false, 
        dueDate: new Date(dateNow2.setDate(dateNow2.getDate() - 15)), status: HomeworkStatus.removed },
    ];

    const lessons: Lesson[] = [
      { id: 1, userId: 1, startDate: new Date(monday.setHours(8, 0, 0)), endDate: new Date(monday.setHours(9, 30, 0)), teacher: "Matthew Downs", subject: "Science", class: "11Sc1"},
      { id: 8, userId: 1, startDate: new Date(monday.setHours(9, 30, 0)), endDate: new Date(monday.setHours(10, 30, 0)), teacher: "Matthew Downs", subject: "Biology", class: "11Sc1"},
      { id: 9, userId: 1, startDate: new Date(monday.setHours(11, 0, 0)), endDate: new Date(monday.setHours(12, 30, 0)), teacher: "Matthew Downs", subject: "Chemistry", class: "11Sc1"},
      { id: 10, userId: 1, startDate: new Date(monday.setHours(13, 0, 0)), endDate: new Date(monday.setHours(14, 0, 0)), teacher: "Matthew Downs", subject: "Physics", class: "11Sc1"},
      
      { id: 2, userId: 1, startDate: new Date(tuesday.setHours(11, 0, 0)), endDate: new Date(tuesday.setHours(12, 30, 0)), teacher: "Susan Williams", subject: "Mathematics", class: "11Ma1"},
      
      { id: 3, userId: 1, startDate: new Date(thursday.setHours(9, 30, 0)), endDate: new Date(thursday.setHours(10, 30, 0)), teacher: "Vincent Romero", subject: "Geography", class: "11Ge1"},  
      { id: 4, userId: 1, startDate: new Date(thursday.setHours(21, 0, 0)), endDate: new Date(thursday.setHours(22, 0, 0)), teacher: "Vincent Romero", subject: "Physical Education", class: "11Pe1"},  
      
      { id: 5, userId: 1, startDate: new Date(friday.setHours(14, 0, 0)), endDate: new Date(friday.setHours(15, 0, 0)), teacher: "Harry James Moore", subject: "Design and Technology", class: "ICT1"},
      { id: 6, userId: 1, startDate: new Date(friday.setHours(13, 0, 0)), endDate: new Date(friday.setHours(14, 0, 0)), teacher: "Norbert Heyes", subject: "History", class: "11Hi1"},

      { id: 7, userId: 1, startDate: new Date(saturday.setHours(9, 30, 0)), endDate: new Date(saturday.setHours(10, 30, 0)), teacher: "Edward Thomas", subject: "Physical Education", class: "11Pe1"},  
    ];

    const periods: Period[] = [
      { name: "P1", startDate: new Date(monday.setHours(8, 0, 0)), endDate: new Date(monday.setHours(9, 30, 0)) },
      { name: "P1", startDate: new Date(tuesday.setHours(8, 0, 0)), endDate: new Date(tuesday.setHours(9, 30, 0)) },
      { name: "P1", startDate: new Date(wednesday.setHours(8, 0, 0)), endDate: new Date(wednesday.setHours(9, 30, 0)) },
      { name: "P1", startDate: new Date(thursday.setHours(8, 0, 0)), endDate: new Date(thursday.setHours(9, 30, 0)) },
      { name: "P1", startDate: new Date(friday.setHours(8, 0, 0)), endDate: new Date(friday.setHours(9, 30, 0)) },
      { name: "P1", startDate: new Date(saturday.setHours(8, 0, 0)), endDate: new Date(saturday.setHours(9, 30, 0)) },
      
      { name: "P2", startDate: new Date(monday.setHours(9, 30, 0)), endDate: new Date(monday.setHours(10, 30, 0)) },
      { name: "P2", startDate: new Date(tuesday.setHours(9, 30, 0)), endDate: new Date(tuesday.setHours(10, 30, 0)) },
      { name: "P2", startDate: new Date(wednesday.setHours(9, 30, 0)), endDate: new Date(wednesday.setHours(10, 30, 0)) },
      { name: "P2", startDate: new Date(thursday.setHours(9, 30, 0)), endDate: new Date(thursday.setHours(10, 30, 0)) },
      { name: "P2", startDate: new Date(friday.setHours(9, 30, 0)), endDate: new Date(friday.setHours(10, 30, 0)) },
      { name: "P2", startDate: new Date(saturday.setHours(9, 30, 0)), endDate: new Date(saturday.setHours(10, 30, 0)) },
      
      { name: "P3", startDate: new Date(monday.setHours(11, 0, 0)), endDate: new Date(monday.setHours(12, 30, 0)) },
      { name: "P3", startDate: new Date(tuesday.setHours(11, 0, 0)), endDate: new Date(tuesday.setHours(12, 30, 0)) },
      { name: "P3", startDate: new Date(wednesday.setHours(11, 0, 0)), endDate: new Date(wednesday.setHours(12, 30, 0)) },
      { name: "P3", startDate: new Date(thursday.setHours(11, 0, 0)), endDate: new Date(thursday.setHours(12, 30, 0)) },
      { name: "P3", startDate: new Date(friday.setHours(11, 0, 0)), endDate: new Date(friday.setHours(12, 30, 0)) },
      { name: "P3", startDate: new Date(saturday.setHours(11, 0, 0)), endDate: new Date(saturday.setHours(12, 30, 0)) },
      
      { name: "P4", startDate: new Date(monday.setHours(13, 0, 0)), endDate: new Date(monday.setHours(14, 0, 0)) },
      { name: "P4", startDate: new Date(tuesday.setHours(13, 0, 0)), endDate: new Date(tuesday.setHours(14, 0, 0)) },
      { name: "P4", startDate: new Date(wednesday.setHours(13, 0, 0)), endDate: new Date(wednesday.setHours(14, 0, 0)) },
      { name: "P4", startDate: new Date(thursday.setHours(13, 0, 0)), endDate: new Date(thursday.setHours(14, 0, 0)) },
      { name: "P4", startDate: new Date(friday.setHours(13, 0, 0)), endDate: new Date(friday.setHours(14, 0, 0)) },
      { name: "P4", startDate: new Date(saturday.setHours(13, 0, 0)), endDate: new Date(saturday.setHours(14, 0, 0)) },


      { name: "P5", startDate: new Date(monday.setHours(14, 0, 0)), endDate: new Date(monday.setHours(15, 0, 0)) },
      { name: "P5", startDate: new Date(tuesday.setHours(14, 0, 0)), endDate: new Date(tuesday.setHours(15, 0, 0)) },
      { name: "P5", startDate: new Date(wednesday.setHours(14, 0, 0)), endDate: new Date(wednesday.setHours(15, 0, 0)) },
      { name: "P5", startDate: new Date(thursday.setHours(14, 0, 0)), endDate: new Date(thursday.setHours(15, 0, 0)) },
      { name: "P5", startDate: new Date(friday.setHours(14, 0, 0)), endDate: new Date(friday.setHours(15, 0, 0)) },
      { name: "P5", startDate: new Date(saturday.setHours(14, 0, 0)), endDate: new Date(saturday.setHours(15, 0, 0)) },
    ];

    const users = [
      { id: 1, username: 'student1', password: 'password', birthdate: '01/02/1998', usertype: 0 },
      { id: 2, username: 'student2', password: 'password', birthdate: '02/03/2001', usertype: 0 },
      { id: 3, username: 'parent1', password: 'password', birthdate: '03/03/1978', usertype: 1 },
      { id: 4, username: 'parent2', password: 'password', birthdate: '04/05/1975', usertype: 1 }
    ];
    
    return { homework, lessons, periods, users }; 
  }
}
