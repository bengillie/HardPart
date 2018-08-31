import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Homework, HomeworkStatus } from '../model/homework.model';

export class DataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username: 'student1', password: 'password', usertype: 0 },
      { id: 2, username: 'student2', password: 'password', usertype: 0 },
      { id: 3, username: 'parent1', password: 'password', usertype: 1 },
      { id: 4, username: 'parent2', password: 'password', usertype: 1 },
    ];

    const homework: Homework[] = [
      { id: 1, subject: 'Product', task: `Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.`, createdBy: 'Mr Fixit', createdDate: new Date(), attachedFiles: true, dueDate: new Date(), status: HomeworkStatus.todo },
      { id: 2, subject: 'French', task: `Continue to revise for your speaking exam. Revised times attached as well as presentation themes.`, createdBy: 'Mrs French', createdDate: new Date(), attachedFiles: true, dueDate: new Date(), status: HomeworkStatus.todo },
      { id: 3, subject: 'History', task: `You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.`, createdBy: 'Mrs Past', createdDate: new Date(), attachedFiles: false, dueDate: new Date(), status: HomeworkStatus.done },
      { id: 4, subject: 'Maths', task: `I have attached the speaking timetables for next week. You will need to arrive at the holding room (ML10) at the following times:\n\nIf your exam is at 9 or 9.15 - sign in to tutor and then go straight to holding room.\nIf your exam is from 9.30 to 10.45 go at start of lesson 1.\nIf your exam is from 11.25 to 12.50 go at start of lesson 3.\nIf your exam is in the afternoon, go at the start of lesson 5.`, createdBy: 'Mr French', createdDate: new Date(), attachedFiles: false, dueDate: new Date(), status: HomeworkStatus.done },
      { id: 5, subject: 'Physics', task: 'Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.', createdBy: 'Mr French', createdDate: new Date(), attachedFiles: false, dueDate: new Date(), status: HomeworkStatus.done },
      { id: 6, subject: 'Chemistry', task: 'Continue to revise for your speaking exam. Revised times attached as well as presentation themes.', createdBy: 'Mr French', createdDate: new Date(), attachedFiles: false, dueDate: new Date(), status: HomeworkStatus.done },
      { id: 7, subject: 'Biology', task: 'You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.', createdBy: 'Mr French', createdDate: new Date(), attachedFiles: false, dueDate: new Date(), status: HomeworkStatus.todo },
      { id: 8, subject: 'Geometry', task: 'You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.', createdBy: 'Mr Fixit', createdDate: new Date(), attachedFiles: true, dueDate: new Date(), status: HomeworkStatus.todo },
      { id: 9, subject: 'Physical Education', task: 'Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.', createdBy: 'Mrs French', createdDate: new Date(), attachedFiles: true, dueDate: new Date(), status: HomeworkStatus.todo },
      { id: 10, subject: 'Programming 1', task: 'Continue to revise for your speaking exam. Revised times attached as well as presentation themes.', createdBy: 'Mrs Past', createdDate: new Date(), attachedFiles: false, dueDate: new Date(), status: HomeworkStatus.done },
      { id: 11, subject: 'Artificial Intelligence', task: 'You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.', createdBy: 'Mr French', createdDate: new Date(), attachedFiles: false, dueDate: new Date(), status: HomeworkStatus.todo },
      { id: 12, subject: 'Computer Science', task: 'Read about System Analysis & Design', createdBy: 'Mr French', createdDate: new Date(), attachedFiles: false, dueDate: new Date(), status: HomeworkStatus.todo },
      { id: 13, subject: 'Chemistry', task: 'Introduction to Chemistry', createdBy: 'Mr French', createdDate: new Date(), attachedFiles: false, dueDate: new Date(), status: HomeworkStatus.removed },
    ];
    
    return { users, homework };
  }
}
