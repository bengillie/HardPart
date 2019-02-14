"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attendance_model_1 = require("~/shared/model/attendance.model");
var behaviour_model_1 = require("~/shared/model/behaviour.model");
var homework_model_1 = require("../shared/model/homework.model");
var timetable_model_1 = require("~/shared/model/timetable.model");
var user_model_1 = require("../shared/model/user.model");
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.createDb = function () {
        var dateNow1 = new Date();
        var dateNow2 = new Date();
        var subject = timetable_model_1.Subject;
        var lessonDate = new Date();
        var p2WeekMonday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() - 13));
        var p2WeekTuesday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 2));
        var p2WeekWednesday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 3));
        var p2WeekThursday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 4));
        var p2WeekFriday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 5));
        var p2WeekSaturday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 6));
        var prevWeekMonday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 8));
        var prevWeekTuesday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 2));
        var prevWeekWednesday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 3));
        var prevWeekThursday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 4));
        var prevWeekFriday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 5));
        var prevWeekSaturday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 6));
        var monday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 8));
        var tuesday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 2));
        var wednesday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 3));
        var thursday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 4));
        var friday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 5));
        var saturday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 6));
        var nextWeekMonday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 8));
        var nextWeekTuesday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 2));
        var nextWeekWednesday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 3));
        var nextWeekThursday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 4));
        var nextWeekFriday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 5));
        var nextWeekSaturday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 6));
        var n2WeekMonday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 8));
        var n2WeekTuesday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 2));
        var n2WeekWednesday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 3));
        var n2WeekThursday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 4));
        var n2WeekFriday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 5));
        var n2WeekSaturday = new Date(lessonDate.setDate(lessonDate.getDate() - lessonDate.getDay() + 6));
        var achievement = [
            {
                id: 1,
                subject: "English",
                type: "Excellent Work",
                date: p2WeekMonday,
                score: 10
            },
            {
                id: 2,
                subject: "Math",
                type: "Excellent Work",
                date: p2WeekTuesday,
                score: 10
            },
            {
                id: 3,
                subject: "Art",
                type: "Excellent Work",
                date: p2WeekWednesday,
                score: 2
            },
            {
                id: 4,
                subject: "English",
                type: "Helping Others",
                date: p2WeekThursday,
                score: 8
            },
            {
                id: 5,
                subject: "Math",
                type: "Excellent Work",
                date: p2WeekFriday,
                score: 30
            },
            {
                id: 6,
                subject: "Math",
                type: "Excellent Work",
                date: p2WeekSaturday,
                score: 20
            },
            {
                id: 7,
                subject: "Math",
                type: "Representative",
                date: prevWeekMonday,
                score: 10
            },
            {
                id: 8,
                subject: "Math",
                type: "Helping Others",
                date: prevWeekTuesday,
                score: 10
            },
            {
                id: 9,
                subject: "Science",
                type: "Excellent Work",
                date: prevWeekWednesday,
                score: 10
            },
            {
                id: 10,
                subject: "Science",
                type: "Leadership",
                date: prevWeekThursday,
                score: 10
            }
        ];
        var advert = [
            {
                id: 1,
                title: "After School Programs",
                subTitle: "Learn, Engage, Play",
                description: "We offer tutoring, intensive learning, homework help, arts and crafts, reading, math, and so much more. Admission is open from October to December, 2018. Register now.",
                image: "~/images/advert-afterschool.png",
                urlLink: "https://www.google.com/",
                createdDate: new Date(),
                expiryDate: nextWeekMonday
            }
        ];
        var attendance = [
            {
                id: 1,
                date: monday,
                amMark: attendance_model_1.AttendanceMark.present,
                pmMark: attendance_model_1.AttendanceMark.present
            },
            {
                id: 2,
                date: tuesday,
                amMark: attendance_model_1.AttendanceMark.late,
                pmMark: attendance_model_1.AttendanceMark.present
            },
            {
                id: 3,
                date: wednesday,
                amMark: attendance_model_1.AttendanceMark.present,
                pmMark: attendance_model_1.AttendanceMark.late
            },
            {
                id: 4,
                date: thursday,
                amMark: attendance_model_1.AttendanceMark.authorised,
                pmMark: attendance_model_1.AttendanceMark.late
            },
            {
                id: 5,
                date: friday,
                amMark: attendance_model_1.AttendanceMark.authorised,
                pmMark: attendance_model_1.AttendanceMark.authorised
            },
            {
                id: 6,
                date: saturday,
                amMark: attendance_model_1.AttendanceMark.unauthorised,
                pmMark: attendance_model_1.AttendanceMark.unauthorised
            },
            {
                id: 7,
                date: nextWeekMonday,
                amMark: attendance_model_1.AttendanceMark.present,
                pmMark: attendance_model_1.AttendanceMark.present
            },
            {
                id: 8,
                date: nextWeekTuesday,
                amMark: attendance_model_1.AttendanceMark.late,
                pmMark: attendance_model_1.AttendanceMark.present
            },
            {
                id: 9,
                date: nextWeekWednesday,
                amMark: attendance_model_1.AttendanceMark.present,
                pmMark: attendance_model_1.AttendanceMark.late
            },
            {
                id: 10,
                date: nextWeekThursday,
                amMark: attendance_model_1.AttendanceMark.late,
                pmMark: attendance_model_1.AttendanceMark.late
            },
            {
                id: 11,
                date: nextWeekFriday,
                amMark: attendance_model_1.AttendanceMark.authorised,
                pmMark: attendance_model_1.AttendanceMark.authorised
            },
            {
                id: 12,
                date: nextWeekSaturday,
                amMark: attendance_model_1.AttendanceMark.unauthorised,
                pmMark: attendance_model_1.AttendanceMark.unauthorised
            },
            {
                id: 13,
                date: n2WeekMonday,
                amMark: attendance_model_1.AttendanceMark.present,
                pmMark: attendance_model_1.AttendanceMark.present
            },
            {
                id: 14,
                date: n2WeekTuesday,
                amMark: attendance_model_1.AttendanceMark.present,
                pmMark: attendance_model_1.AttendanceMark.present
            },
            {
                id: 15,
                date: n2WeekWednesday,
                amMark: attendance_model_1.AttendanceMark.late,
                pmMark: attendance_model_1.AttendanceMark.present
            },
            {
                id: 16,
                date: n2WeekThursday,
                amMark: attendance_model_1.AttendanceMark.present,
                pmMark: attendance_model_1.AttendanceMark.late
            },
            {
                id: 17,
                date: n2WeekFriday,
                amMark: attendance_model_1.AttendanceMark.present,
                pmMark: attendance_model_1.AttendanceMark.unauthorised
            },
            {
                id: 18,
                date: n2WeekSaturday,
                amMark: attendance_model_1.AttendanceMark.late,
                pmMark: attendance_model_1.AttendanceMark.unauthorised
            }
        ];
        var behaviour = [
            {
                id: 1,
                subject: "English",
                type: behaviour_model_1.BehaviourType.homework,
                score: 1,
                date: p2WeekMonday
            },
            {
                id: 2,
                subject: "Math",
                type: behaviour_model_1.BehaviourType.disruption,
                score: 1,
                date: p2WeekMonday
            },
            {
                id: 3,
                subject: "Science",
                type: behaviour_model_1.BehaviourType.disruption,
                score: 2,
                date: p2WeekMonday
            },
            {
                id: 4,
                subject: "Geography",
                type: behaviour_model_1.BehaviourType.homework,
                score: 3,
                date: p2WeekMonday
            },
            {
                id: 5,
                subject: "Math",
                type: behaviour_model_1.BehaviourType.organisation,
                score: 1,
                date: p2WeekMonday
            },
            {
                id: 6,
                subject: "Art and Design",
                type: behaviour_model_1.BehaviourType.organisation,
                score: 1,
                date: p2WeekMonday
            },
            {
                id: 7,
                subject: "Music",
                type: behaviour_model_1.BehaviourType.disruption,
                score: 1,
                date: p2WeekMonday
            },
            {
                id: 8,
                subject: "Science",
                type: behaviour_model_1.BehaviourType.homework,
                score: 2,
                date: p2WeekMonday
            }
        ];
        var contactdetail = {
            id: 1,
            phoneno: "+1 989-356-1414",
            email: "piedpiperschool@email.com",
            address: "444 Wilson St, Alpena, MI 49707, USA",
            map: ""
        };
        dateNow1 = new Date();
        dateNow2 = new Date();
        var homework = [
            {
                id: 1,
                studentId: 2,
                subject: "Product",
                task: "Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.",
                createdBy: "Mr Fixit",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 7)),
                attachedFiles: true,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() - 7)),
                status: homework_model_1.HomeworkStatus.done
            },
            {
                id: 2,
                studentId: 2,
                subject: "French",
                task: "Continue to revise for your speaking exam. Revised times attached as well as presentation themes.",
                createdBy: "Mrs French",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
                attachedFiles: true,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
                status: homework_model_1.HomeworkStatus.done
            },
            {
                id: 3,
                studentId: 2,
                subject: "History",
                task: "You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.",
                createdBy: "Mrs Past",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
                attachedFiles: false,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
                status: homework_model_1.HomeworkStatus.done
            },
            {
                id: 4,
                studentId: 2,
                subject: "Maths",
                task: "I have attached the speaking timetables for next week. You will need to arrive at the holding room (ML10) at the following times:\n\nIf your exam is at 9 or 9.15 - sign in to tutor and then go straight to holding room.\nIf your exam is from 9.30 to 10.45 go at start of lesson 1.\nIf your exam is from 11.25 to 12.50 go at start of lesson 3.\nIf your exam is in the afternoon, go at the start of lesson 5.",
                createdBy: "Mr French",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
                attachedFiles: false,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
                status: homework_model_1.HomeworkStatus.done
            },
            {
                id: 5,
                studentId: 2,
                subject: "Physics",
                task: "Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.",
                createdBy: "Mr French",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
                attachedFiles: false,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
                status: homework_model_1.HomeworkStatus.done
            },
            {
                id: 6,
                studentId: 2,
                subject: "Chemistry",
                task: "Continue to revise for your speaking exam. Revised times attached as well as presentation themes.",
                createdBy: "Mr French",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
                attachedFiles: false,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
                status: homework_model_1.HomeworkStatus.done
            },
            {
                id: 7,
                studentId: 2,
                subject: "Biology",
                task: "You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.",
                createdBy: "Mr French",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
                attachedFiles: false,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
                status: homework_model_1.HomeworkStatus.todo
            },
            {
                id: 8,
                studentId: 2,
                subject: "Geometry",
                task: "You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.",
                createdBy: "Mr Fixit",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
                attachedFiles: true,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
                status: homework_model_1.HomeworkStatus.todo
            },
            {
                id: 9,
                studentId: 1,
                subject: "Physical Education",
                task: "Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.",
                createdBy: "Mrs French",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
                attachedFiles: true,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
                status: homework_model_1.HomeworkStatus.todo
            },
            {
                id: 10,
                studentId: 2,
                subject: "Programming 1",
                task: "Continue to revise for your speaking exam. Revised times attached as well as presentation themes.",
                createdBy: "Mrs Past",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
                attachedFiles: false,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
                status: homework_model_1.HomeworkStatus.todo
            },
            {
                id: 11,
                studentId: 2,
                subject: "Artificial Intelligence",
                task: "You will have a medicine mock the first week back in Year 11.\n\nYou have been revising medicine this half term, and you will need to keep up with this revision over the summer holidays. Many of you have bought revision guides - use them!\n\nI have also attached Medicine and Western revision work books.",
                createdBy: "Mr French",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
                attachedFiles: false,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
                status: homework_model_1.HomeworkStatus.todo
            },
            {
                id: 12,
                studentId: 2,
                subject: "Computer Science",
                task: "Read about System Analysis & Design",
                createdBy: "Mr French",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() + 1)),
                attachedFiles: false,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 1)),
                status: homework_model_1.HomeworkStatus.todo
            },
            {
                id: 13,
                studentId: 2,
                subject: "Chemistry",
                task: "Introduction to Chemistry",
                createdBy: "Mr French",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 15)),
                attachedFiles: false,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() - 15)),
                status: homework_model_1.HomeworkStatus.removed
            },
            {
                id: 14,
                studentId: 1,
                subject: "Science",
                task: "Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.",
                createdBy: "Mr Fixit",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 7)),
                attachedFiles: true,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 2)),
                status: homework_model_1.HomeworkStatus.todo
            },
            {
                id: 15,
                studentId: 1,
                subject: "Music",
                task: "Complete the existing products and user profile research so that you are ready to type all the research pages in the first lesson in September. Plan a conclusion for each page (this is the research analysis page but we will be breaking it up in to a paragraph on each page).\n\nYou might also want to write a draft Design Specification as we will complete that in Lesson 2 of Y11.\n\nUse the power point to guide you.",
                createdBy: "Mr Fixit",
                createdDate: new Date(dateNow1.setDate(dateNow1.getDate() - 7)),
                attachedFiles: true,
                dueDate: new Date(dateNow2.setDate(dateNow2.getDate() + 2)),
                status: homework_model_1.HomeworkStatus.todo
            }
        ];
        var lesson = [
            {
                id: 1,
                userId: 1,
                startDate: new Date(monday.setHours(7, 0, 0)),
                endDate: new Date(monday.setHours(8, 0, 0)),
                teacher: "Matthew Downs",
                subject: subject.reg,
                class: "Reg",
                break: false
            },
            {
                id: 2,
                userId: 1,
                startDate: new Date(monday.setHours(8, 0, 0)),
                endDate: new Date(monday.setHours(9, 0, 0)),
                teacher: "Albert Einstein",
                subject: subject.science,
                class: "11Sc1",
                break: false
            },
            {
                id: 3,
                userId: 1,
                startDate: new Date(monday.setHours(9, 0, 0)),
                endDate: new Date(monday.setHours(10, 0, 0)),
                teacher: "Ferdinand Megellan",
                subject: subject.history,
                class: "11Hi1",
                break: false
            },
            {
                id: 4,
                userId: 1,
                startDate: new Date(monday.setHours(10, 0, 0)),
                endDate: new Date(monday.setHours(10, 30, 0)),
                teacher: "",
                subject: "",
                class: "",
                break: true
            },
            {
                id: 5,
                userId: 1,
                startDate: new Date(monday.setHours(10, 30, 0)),
                endDate: new Date(monday.setHours(11, 0, 0)),
                teacher: "Ludwig Van Beethoven",
                subject: subject.music,
                class: "11Mu1",
                break: false
            },
            {
                id: 6,
                userId: 1,
                startDate: new Date(monday.setHours(11, 0, 0)),
                endDate: new Date(monday.setHours(12, 0, 0)),
                teacher: "Alan Turing",
                subject: subject.computing,
                class: "11Co1",
                break: false
            },
            {
                id: 7,
                userId: 1,
                startDate: new Date(monday.setHours(12, 0, 0)),
                endDate: new Date(monday.setHours(13, 0, 0)),
                teacher: "",
                subject: "",
                class: "",
                break: true
            },
            {
                id: 8,
                userId: 1,
                startDate: new Date(monday.setHours(13, 0, 0)),
                endDate: new Date(monday.setHours(14, 0, 0)),
                teacher: "Harry James Moore",
                subject: subject.design,
                class: "ICT1",
                break: false
            },
            {
                id: 9,
                userId: 1,
                startDate: new Date(monday.setHours(14, 0, 0)),
                endDate: new Date(monday.setHours(15, 0, 0)),
                teacher: "Norbert Heyes",
                subject: subject.english,
                class: "11En1",
                break: false
            },
            {
                id: 10,
                userId: 1,
                startDate: new Date(tuesday.setHours(7, 0, 0)),
                endDate: new Date(tuesday.setHours(8, 0, 0)),
                teacher: "Matthew Downs",
                subject: subject.reg,
                class: "Reg",
                break: false
            },
            {
                id: 11,
                userId: 1,
                startDate: new Date(tuesday.setHours(8, 0, 0)),
                endDate: new Date(tuesday.setHours(9, 0, 0)),
                teacher: "Albert Einstein",
                subject: "Science",
                class: "11Sc1",
                break: false
            },
            {
                id: 12,
                userId: 1,
                startDate: new Date(tuesday.setHours(9, 0, 0)),
                endDate: new Date(tuesday.setHours(10, 0, 0)),
                teacher: "Ferdinand Megellan",
                subject: subject.english,
                class: "11Hi1",
                break: false
            },
            {
                id: 13,
                userId: 1,
                startDate: new Date(tuesday.setHours(10, 0, 0)),
                endDate: new Date(tuesday.setHours(10, 30, 0)),
                teacher: "",
                subject: "",
                class: "",
                break: true
            },
            {
                id: 14,
                userId: 1,
                startDate: new Date(tuesday.setHours(10, 30, 0)),
                endDate: new Date(tuesday.setHours(11, 0, 0)),
                teacher: "Ludwig Van Beethoven",
                subject: subject.art,
                class: "11Mu1",
                break: false
            },
            {
                id: 15,
                userId: 1,
                startDate: new Date(tuesday.setHours(11, 0, 0)),
                endDate: new Date(tuesday.setHours(12, 0, 0)),
                teacher: "Alan Turing",
                subject: subject.math,
                class: "11Co1",
                break: false
            },
            {
                id: 16,
                userId: 1,
                startDate: new Date(tuesday.setHours(12, 0, 0)),
                endDate: new Date(tuesday.setHours(13, 0, 0)),
                teacher: "",
                subject: "",
                class: "",
                break: true
            },
            {
                id: 17,
                userId: 1,
                startDate: new Date(tuesday.setHours(13, 0, 0)),
                endDate: new Date(tuesday.setHours(14, 0, 0)),
                teacher: "Harry James Moore",
                subject: subject.geography,
                class: "ICT1",
                break: false
            },
            {
                id: 18,
                userId: 1,
                startDate: new Date(tuesday.setHours(14, 0, 0)),
                endDate: new Date(tuesday.setHours(15, 0, 0)),
                teacher: "Norbert Heyes",
                subject: subject.languages,
                class: "11En1",
                break: false
            },
            {
                id: 19,
                userId: 1,
                startDate: new Date(wednesday.setHours(7, 0, 0)),
                endDate: new Date(wednesday.setHours(8, 0, 0)),
                teacher: "Matthew Downs",
                subject: subject.reg,
                class: "Reg",
                break: false
            },
            {
                id: 20,
                userId: 1,
                startDate: new Date(wednesday.setHours(8, 0, 0)),
                endDate: new Date(wednesday.setHours(9, 0, 0)),
                teacher: "Albert Einstein",
                subject: subject.science,
                class: "11Sc1",
                break: false
            },
            {
                id: 21,
                userId: 1,
                startDate: new Date(wednesday.setHours(9, 0, 0)),
                endDate: new Date(wednesday.setHours(10, 0, 0)),
                teacher: "Edward Thomas",
                subject: "Physical Education",
                class: "11Pe1",
                break: false
            },
            {
                id: 22,
                userId: 1,
                startDate: new Date(wednesday.setHours(10, 0, 0)),
                endDate: new Date(wednesday.setHours(10, 30, 0)),
                teacher: "",
                subject: "",
                class: "",
                break: true
            },
            {
                id: 23,
                userId: 1,
                startDate: new Date(wednesday.setHours(10, 30, 0)),
                endDate: new Date(wednesday.setHours(11, 0, 0)),
                teacher: "Ludwig Van Beethoven",
                subject: subject.music,
                class: "11Mu1",
                break: false
            },
            {
                id: 24,
                userId: 1,
                startDate: new Date(wednesday.setHours(11, 0, 0)),
                endDate: new Date(wednesday.setHours(12, 0, 0)),
                teacher: "Alan Turing",
                subject: "Computing",
                class: "11Co1",
                break: false
            },
            {
                id: 25,
                userId: 1,
                startDate: new Date(wednesday.setHours(12, 0, 0)),
                endDate: new Date(wednesday.setHours(13, 0, 0)),
                teacher: "",
                subject: "",
                class: "",
                break: true
            },
            {
                id: 26,
                userId: 1,
                startDate: new Date(wednesday.setHours(13, 0, 0)),
                endDate: new Date(wednesday.setHours(14, 0, 0)),
                teacher: "Harry James Moore",
                subject: subject.geography,
                class: "ICT1",
                break: false
            },
            {
                id: 27,
                userId: 1,
                startDate: new Date(wednesday.setHours(14, 0, 0)),
                endDate: new Date(wednesday.setHours(15, 0, 0)),
                teacher: "Norbert Heyes",
                subject: subject.languages,
                class: "11En1",
                break: false
            },
            {
                id: 28,
                userId: 1,
                startDate: new Date(thursday.setHours(7, 0, 0)),
                endDate: new Date(thursday.setHours(8, 0, 0)),
                teacher: "Matthew Downs",
                subject: subject.reg,
                class: "Reg",
                break: false
            },
            {
                id: 29,
                userId: 1,
                startDate: new Date(thursday.setHours(8, 0, 0)),
                endDate: new Date(thursday.setHours(9, 0, 0)),
                teacher: "Alan Turing",
                subject: "Computing",
                class: "11Sc1",
                break: false
            },
            {
                id: 30,
                userId: 1,
                startDate: new Date(thursday.setHours(9, 0, 0)),
                endDate: new Date(thursday.setHours(10, 0, 0)),
                teacher: "Harry James Moore",
                subject: "Design and Technology",
                class: "11Hi1",
                break: false
            },
            {
                id: 31,
                userId: 1,
                startDate: new Date(thursday.setHours(10, 0, 0)),
                endDate: new Date(thursday.setHours(10, 30, 0)),
                teacher: "",
                subject: "",
                class: "",
                break: true
            },
            {
                id: 32,
                userId: 1,
                startDate: new Date(thursday.setHours(10, 30, 0)),
                endDate: new Date(thursday.setHours(11, 0, 0)),
                teacher: "Ludwig Van Beethoven",
                subject: "Music",
                class: "11Mu1",
                break: false
            },
            {
                id: 33,
                userId: 1,
                startDate: new Date(thursday.setHours(11, 0, 0)),
                endDate: new Date(thursday.setHours(12, 0, 0)),
                teacher: "Albert Einstein",
                subject: "Science",
                class: "11Co1",
                break: false
            },
            {
                id: 34,
                userId: 1,
                startDate: new Date(thursday.setHours(12, 0, 0)),
                endDate: new Date(thursday.setHours(13, 0, 0)),
                teacher: "",
                subject: "",
                class: "",
                break: true
            },
            {
                id: 35,
                userId: 1,
                startDate: new Date(thursday.setHours(13, 0, 0)),
                endDate: new Date(thursday.setHours(14, 0, 0)),
                teacher: "Ferdinand Megellan",
                subject: "History",
                class: "ICT1",
                break: false
            },
            {
                id: 36,
                userId: 1,
                startDate: new Date(thursday.setHours(14, 0, 0)),
                endDate: new Date(thursday.setHours(15, 0, 0)),
                teacher: "Norbert Heyes",
                subject: "English",
                class: "11En1",
                break: false
            },
            {
                id: 37,
                userId: 1,
                startDate: new Date(friday.setHours(7, 0, 0)),
                endDate: new Date(friday.setHours(8, 0, 0)),
                teacher: "Matthew Downs",
                subject: subject.reg,
                class: "Reg",
                break: false
            },
            {
                id: 38,
                userId: 1,
                startDate: new Date(friday.setHours(8, 0, 0)),
                endDate: new Date(friday.setHours(9, 0, 0)),
                teacher: "Albert Einstein",
                subject: "Science",
                class: "11Sc1",
                break: false
            },
            {
                id: 39,
                userId: 1,
                startDate: new Date(friday.setHours(9, 0, 0)),
                endDate: new Date(friday.setHours(10, 0, 0)),
                teacher: "Ferdinand Megellan",
                subject: "History",
                class: "11Hi1",
                break: false
            },
            {
                id: 40,
                userId: 1,
                startDate: new Date(friday.setHours(10, 0, 0)),
                endDate: new Date(friday.setHours(10, 30, 0)),
                teacher: "",
                subject: "",
                class: "",
                break: true
            },
            {
                id: 41,
                userId: 1,
                startDate: new Date(friday.setHours(10, 30, 0)),
                endDate: new Date(friday.setHours(11, 0, 0)),
                teacher: "Ludwig Van Beethoven",
                subject: "Music",
                class: "11Mu1",
                break: false
            },
            {
                id: 42,
                userId: 1,
                startDate: new Date(friday.setHours(11, 0, 0)),
                endDate: new Date(friday.setHours(12, 0, 0)),
                teacher: "Alan Turing",
                subject: "Computing",
                class: "11Co1",
                break: false
            },
            {
                id: 43,
                userId: 1,
                startDate: new Date(friday.setHours(12, 0, 0)),
                endDate: new Date(friday.setHours(13, 0, 0)),
                teacher: "",
                subject: "",
                class: "",
                break: true
            },
            {
                id: 44,
                userId: 1,
                startDate: new Date(friday.setHours(13, 0, 0)),
                endDate: new Date(friday.setHours(14, 0, 0)),
                teacher: "Harry James Moore",
                subject: "Design and Technology",
                class: "ICT1",
                break: false
            },
            {
                id: 45,
                userId: 1,
                startDate: new Date(friday.setHours(14, 0, 0)),
                endDate: new Date(friday.setHours(15, 0, 0)),
                teacher: "Norbert Heyes",
                subject: "English",
                class: "11En1",
                break: false
            },
            {
                id: 46,
                userId: 1,
                startDate: new Date(saturday.setHours(7, 0, 0)),
                endDate: new Date(saturday.setHours(8, 0, 0)),
                teacher: "Matthew Downs",
                subject: subject.reg,
                class: "Reg",
                break: false
            },
            {
                id: 47,
                userId: 1,
                startDate: new Date(saturday.setHours(9, 0, 0)),
                endDate: new Date(saturday.setHours(10, 0, 0)),
                teacher: "Edward Thomas",
                subject: "Physical Education",
                class: "11Pe1",
                break: false
            }
        ];
        var notification = [
            {
                id: 1,
                title: "Homework Overdue",
                message: "Math Homework due: " +
                    nextWeekFriday.toDateString() +
                    " for Mrs. Potts",
                image: "~/images/notif_homework.png",
                createdDate: new Date(friday.setHours(8, 0, 0)),
                expiryDate: nextWeekFriday,
                displayOnLogin: false,
                seen: false
            },
            {
                id: 2,
                title: "Late Registration",
                message: "Late on " + monday.toDateString(),
                image: "~/images/notif_late.png",
                createdDate: new Date(monday.setHours(8, 30, 0)),
                expiryDate: tuesday,
                displayOnLogin: false,
                seen: false
            },
            {
                id: 3,
                title: "Unauthorized Absence",
                message: "Absent on " + tuesday.toDateString(),
                image: "~/images/notif_absent.png",
                createdDate: new Date(tuesday.setHours(8, 0, 0)),
                expiryDate: wednesday,
                displayOnLogin: false,
                seen: false
            },
            {
                id: 4,
                title: "Homework Near Due Date",
                message: "Science Homework due: " +
                    nextWeekMonday.toDateString() +
                    " for Mr. Fixit",
                image: "~/images/notif_homework.png",
                createdDate: new Date(monday.setHours(9, 0, 0)),
                expiryDate: nextWeekMonday,
                displayOnLogin: false,
                seen: false
            },
            {
                id: 5,
                title: "Non-uniform Day",
                message: "Non-uniform day on " + wednesday.toDateString(),
                image: "~/images/notif_non-uniform.png",
                createdDate: new Date(wednesday.setHours(7, 0, 0)),
                expiryDate: thursday,
                displayOnLogin: false,
                seen: false
            },
            {
                id: 6,
                title: "Class Suspension",
                message: "School is shut because of the typhoon on " + thursday.toDateString(),
                image: "~/images/notif_noclass.png",
                createdDate: new Date(thursday.setHours(7, 0, 0)),
                expiryDate: friday,
                displayOnLogin: false,
                seen: false
            }
        ];
        var period = [
            {
                id: 1,
                name: "R1",
                startDate: new Date(monday.setHours(7, 0, 0)),
                endDate: new Date(monday.setHours(8, 0, 0))
            },
            {
                id: 2,
                name: "R2",
                startDate: new Date(tuesday.setHours(7, 0, 0)),
                endDate: new Date(tuesday.setHours(8, 0, 0))
            },
            {
                id: 3,
                name: "R3",
                startDate: new Date(wednesday.setHours(7, 0, 0)),
                endDate: new Date(wednesday.setHours(8, 0, 0))
            },
            {
                id: 4,
                name: "R4",
                startDate: new Date(thursday.setHours(7, 0, 0)),
                endDate: new Date(thursday.setHours(8, 0, 0))
            },
            {
                id: 5,
                name: "R5",
                startDate: new Date(friday.setHours(7, 0, 0)),
                endDate: new Date(friday.setHours(8, 0, 0))
            },
            {
                id: 6,
                name: "R6",
                startDate: new Date(saturday.setHours(7, 0, 0)),
                endDate: new Date(saturday.setHours(8, 0, 0))
            },
            {
                id: 7,
                name: "P1",
                startDate: new Date(monday.setHours(8, 0, 0)),
                endDate: new Date(monday.setHours(9, 0, 0))
            },
            {
                id: 8,
                name: "P1",
                startDate: new Date(tuesday.setHours(8, 0, 0)),
                endDate: new Date(tuesday.setHours(9, 0, 0))
            },
            {
                id: 9,
                name: "P1",
                startDate: new Date(wednesday.setHours(8, 0, 0)),
                endDate: new Date(wednesday.setHours(9, 0, 0))
            },
            {
                id: 10,
                name: "P1",
                startDate: new Date(thursday.setHours(8, 0, 0)),
                endDate: new Date(thursday.setHours(9, 0, 0))
            },
            {
                id: 11,
                name: "P1",
                startDate: new Date(friday.setHours(8, 0, 0)),
                endDate: new Date(friday.setHours(9, 0, 0))
            },
            {
                id: 12,
                name: "P1",
                startDate: new Date(saturday.setHours(8, 0, 0)),
                endDate: new Date(saturday.setHours(9, 0, 0))
            },
            {
                id: 13,
                name: "P2",
                startDate: new Date(monday.setHours(9, 0, 0)),
                endDate: new Date(monday.setHours(10, 0, 0))
            },
            {
                id: 14,
                name: "P2",
                startDate: new Date(tuesday.setHours(9, 0, 0)),
                endDate: new Date(tuesday.setHours(10, 0, 0))
            },
            {
                id: 15,
                name: "P2",
                startDate: new Date(wednesday.setHours(9, 0, 0)),
                endDate: new Date(wednesday.setHours(10, 0, 0))
            },
            {
                id: 16,
                name: "P2",
                startDate: new Date(thursday.setHours(9, 0, 0)),
                endDate: new Date(thursday.setHours(10, 0, 0))
            },
            {
                id: 17,
                name: "P2",
                startDate: new Date(friday.setHours(9, 0, 0)),
                endDate: new Date(friday.setHours(10, 0, 0))
            },
            {
                id: 18,
                name: "P2",
                startDate: new Date(saturday.setHours(9, 0, 0)),
                endDate: new Date(saturday.setHours(10, 0, 0))
            },
            {
                id: 19,
                name: "P3",
                startDate: new Date(monday.setHours(10, 30, 0)),
                endDate: new Date(monday.setHours(11, 0, 0))
            },
            {
                id: 20,
                name: "P3",
                startDate: new Date(tuesday.setHours(10, 30, 0)),
                endDate: new Date(tuesday.setHours(11, 0, 0))
            },
            {
                id: 21,
                name: "P3",
                startDate: new Date(wednesday.setHours(10, 30, 0)),
                endDate: new Date(wednesday.setHours(11, 0, 0))
            },
            {
                id: 22,
                name: "P3",
                startDate: new Date(thursday.setHours(10, 30, 0)),
                endDate: new Date(thursday.setHours(11, 0, 0))
            },
            {
                id: 23,
                name: "P3",
                startDate: new Date(friday.setHours(10, 30, 0)),
                endDate: new Date(friday.setHours(11, 0, 0))
            },
            {
                id: 24,
                name: "P3",
                startDate: new Date(saturday.setHours(10, 30, 0)),
                endDate: new Date(saturday.setHours(11, 0, 0))
            },
            {
                id: 25,
                name: "P4",
                startDate: new Date(monday.setHours(11, 0, 0)),
                endDate: new Date(monday.setHours(12, 0, 0))
            },
            {
                id: 26,
                name: "P4",
                startDate: new Date(tuesday.setHours(11, 0, 0)),
                endDate: new Date(tuesday.setHours(12, 0, 0))
            },
            {
                id: 27,
                name: "P4",
                startDate: new Date(wednesday.setHours(11, 0, 0)),
                endDate: new Date(wednesday.setHours(12, 0, 0))
            },
            {
                id: 28,
                name: "P4",
                startDate: new Date(thursday.setHours(11, 0, 0)),
                endDate: new Date(thursday.setHours(12, 0, 0))
            },
            {
                id: 29,
                name: "P4",
                startDate: new Date(friday.setHours(11, 0, 0)),
                endDate: new Date(friday.setHours(12, 0, 0))
            },
            {
                id: 30,
                name: "P4",
                startDate: new Date(saturday.setHours(11, 0, 0)),
                endDate: new Date(saturday.setHours(12, 0, 0))
            },
            {
                id: 31,
                name: "P5",
                startDate: new Date(monday.setHours(13, 0, 0)),
                endDate: new Date(monday.setHours(14, 0, 0))
            },
            {
                id: 32,
                name: "P5",
                startDate: new Date(tuesday.setHours(13, 0, 0)),
                endDate: new Date(tuesday.setHours(14, 0, 0))
            },
            {
                id: 33,
                name: "P5",
                startDate: new Date(wednesday.setHours(13, 0, 0)),
                endDate: new Date(wednesday.setHours(14, 0, 0))
            },
            {
                id: 34,
                name: "P5",
                startDate: new Date(thursday.setHours(13, 0, 0)),
                endDate: new Date(thursday.setHours(14, 0, 0))
            },
            {
                id: 35,
                name: "P5",
                startDate: new Date(friday.setHours(13, 0, 0)),
                endDate: new Date(friday.setHours(14, 0, 0))
            },
            {
                id: 36,
                name: "P5",
                startDate: new Date(saturday.setHours(13, 0, 0)),
                endDate: new Date(saturday.setHours(14, 0, 0))
            },
            {
                id: 37,
                name: "P6",
                startDate: new Date(monday.setHours(14, 0, 0)),
                endDate: new Date(monday.setHours(15, 0, 0))
            },
            {
                id: 38,
                name: "P6",
                startDate: new Date(tuesday.setHours(14, 0, 0)),
                endDate: new Date(tuesday.setHours(15, 0, 0))
            },
            {
                id: 39,
                name: "P6",
                startDate: new Date(wednesday.setHours(14, 0, 0)),
                endDate: new Date(wednesday.setHours(15, 0, 0))
            },
            {
                id: 40,
                name: "P6",
                startDate: new Date(thursday.setHours(14, 0, 0)),
                endDate: new Date(thursday.setHours(15, 0, 0))
            },
            {
                id: 41,
                name: "P6",
                startDate: new Date(friday.setHours(14, 0, 0)),
                endDate: new Date(friday.setHours(15, 0, 0))
            },
            {
                id: 42,
                name: "P6",
                startDate: new Date(saturday.setHours(14, 0, 0)),
                endDate: new Date(saturday.setHours(15, 0, 0))
            },
            {
                id: 43,
                name: "Morning Break",
                startDate: new Date(monday.setHours(10, 0, 0)),
                endDate: new Date(monday.setHours(10, 30, 0))
            },
            {
                id: 44,
                name: "Afternoon Break",
                startDate: new Date(monday.setHours(12, 0, 0)),
                endDate: new Date(monday.setHours(13, 0, 0))
            },
            {
                id: 45,
                name: "Morning Break",
                startDate: new Date(tuesday.setHours(10, 0, 0)),
                endDate: new Date(tuesday.setHours(10, 30, 0))
            },
            {
                id: 46,
                name: "Afternoon Break",
                startDate: new Date(tuesday.setHours(12, 0, 0)),
                endDate: new Date(tuesday.setHours(13, 0, 0))
            },
            {
                id: 47,
                name: "Morning Break",
                startDate: new Date(wednesday.setHours(10, 0, 0)),
                endDate: new Date(wednesday.setHours(10, 30, 0))
            },
            {
                id: 48,
                name: "Afternoon Break",
                startDate: new Date(wednesday.setHours(12, 0, 0)),
                endDate: new Date(wednesday.setHours(13, 0, 0))
            },
            {
                id: 49,
                name: "Morning Break",
                startDate: new Date(thursday.setHours(10, 0, 0)),
                endDate: new Date(thursday.setHours(10, 30, 0))
            },
            {
                id: 50,
                name: "Afternoon Break",
                startDate: new Date(thursday.setHours(12, 0, 0)),
                endDate: new Date(thursday.setHours(13, 0, 0))
            },
            {
                id: 51,
                name: "Morning Break",
                startDate: new Date(friday.setHours(10, 0, 0)),
                endDate: new Date(friday.setHours(10, 30, 0))
            },
            {
                id: 52,
                name: "Afternoon Break",
                startDate: new Date(friday.setHours(12, 0, 0)),
                endDate: new Date(friday.setHours(13, 0, 0))
            },
            {
                id: 53,
                name: "Morning Break",
                startDate: new Date(saturday.setHours(10, 0, 0)),
                endDate: new Date(saturday.setHours(10, 30, 0))
            },
            {
                id: 54,
                name: "Afternoon Break",
                startDate: new Date(saturday.setHours(12, 0, 0)),
                endDate: new Date(saturday.setHours(13, 0, 0))
            }
        ];
        dateNow1 = new Date();
        var user = [
            {
                id: 1,
                fname: "Jay",
                mname: "",
                lname: "Smith",
                username: "1",
                password: "1",
                birthdate: "1",
                phoneprimary: "9123",
                phonesecondary: "0123",
                emailprimary: encodeURIComponent("jaysmith@email.com"),
                emailsecondary: encodeURIComponent("jaysmith2@email.com"),
                isfirsttime: false,
                usertype: user_model_1.UserType.student,
                hasIncompleteHomework: true,
                image: "~/images/dp1.jpg",
                lastpwupdate: dateNow1,
                lastlogin: dateNow1,
                children: []
            },
            {
                id: 2,
                fname: "Emily",
                mname: "",
                lname: "Smith",
                username: "student1",
                password: "password",
                birthdate: "02/03/2001",
                phoneprimary: "9234",
                phonesecondary: "",
                emailprimary: encodeURIComponent("emilysmith@email.com"),
                emailsecondary: encodeURIComponent("emilysmith2@email.com"),
                isfirsttime: true,
                usertype: user_model_1.UserType.student,
                hasIncompleteHomework: false,
                image: "~/images/dp2.jpg",
                lastpwupdate: dateNow1,
                lastlogin: dateNow1,
                children: []
            },
            {
                id: 3,
                fname: "Grace",
                mname: "",
                lname: "Smith",
                username: "student2",
                password: "password",
                birthdate: "03/03/1978",
                phoneprimary: "9345",
                phonesecondary: "0345",
                emailprimary: encodeURIComponent("gracesmith@email.com"),
                emailsecondary: encodeURIComponent("gracesmith2@email.com"),
                isfirsttime: false,
                usertype: user_model_1.UserType.student,
                hasIncompleteHomework: false,
                image: "~/images/dp3.jpg",
                lastpwupdate: dateNow1,
                lastlogin: dateNow1,
                children: []
            },
            {
                id: 4,
                fname: "Finn",
                mname: "Johnson",
                lname: "Williams",
                username: "student3",
                password: "password",
                birthdate: "04/05/1975",
                phoneprimary: "9456",
                phonesecondary: "",
                emailprimary: encodeURIComponent("finnwilliams@email.com"),
                emailsecondary: encodeURIComponent("finnwilliams2@email.com"),
                isfirsttime: false,
                usertype: user_model_1.UserType.student,
                hasIncompleteHomework: false,
                image: "~/images/dp4.jpg",
                lastpwupdate: dateNow1,
                lastlogin: dateNow1,
                children: []
            },
            {
                id: 5,
                fname: "Jason",
                mname: "",
                lname: "Smith",
                username: "parent",
                password: "parent",
                birthdate: "1",
                phoneprimary: "9567",
                phonesecondary: "0567",
                emailprimary: encodeURIComponent("jasonsmith@email.com"),
                emailsecondary: encodeURIComponent("jasonsmith2@email.com"),
                isfirsttime: false,
                usertype: user_model_1.UserType.parent,
                hasIncompleteHomework: null,
                image: "~/images/dp5.jpg",
                lastpwupdate: dateNow1,
                lastlogin: dateNow1,
                children: [
                    {
                        id: 1,
                        fname: "Jay",
                        mname: "",
                        lname: "Smith",
                        username: "1",
                        password: "1",
                        birthdate: "1",
                        emailprimary: encodeURIComponent("jaysmith@email.com"),
                        emailsecondary: encodeURIComponent("jaysmith2@email.com"),
                        phoneprimary: "9123",
                        phonesecondary: "0123",
                        isfirsttime: false,
                        usertype: user_model_1.UserType.student,
                        hasIncompleteHomework: true,
                        image: "~/images/dp1.jpg",
                        lastpwupdate: dateNow1,
                        lastlogin: dateNow1,
                        children: []
                    },
                    {
                        id: 2,
                        fname: "Emily",
                        mname: "",
                        lname: "Smith",
                        username: "student1",
                        password: "password",
                        birthdate: "02/03/2001",
                        phoneprimary: "9234",
                        phonesecondary: "",
                        emailprimary: encodeURIComponent("emilysmith@email.com"),
                        emailsecondary: encodeURIComponent("emilysmith2@email.com"),
                        isfirsttime: true,
                        usertype: user_model_1.UserType.student,
                        hasIncompleteHomework: false,
                        image: "~/images/dp2.jpg",
                        lastpwupdate: dateNow1,
                        lastlogin: dateNow1,
                        children: []
                    },
                    {
                        id: 3,
                        fname: "Grace",
                        mname: "",
                        lname: "Smith",
                        username: "student2",
                        password: "password",
                        birthdate: "03/03/1978",
                        phoneprimary: "9345",
                        phonesecondary: "0345",
                        emailprimary: encodeURIComponent("gracesmith@email.com"),
                        emailsecondary: encodeURIComponent("gracesmith2@email.com"),
                        isfirsttime: false,
                        usertype: user_model_1.UserType.student,
                        hasIncompleteHomework: false,
                        image: "~/images/dp3.jpg",
                        lastpwupdate: dateNow1,
                        lastlogin: dateNow1,
                        children: []
                    }
                ]
            },
            {
                id: 6,
                fname: "Bon",
                mname: "Johnson",
                lname: "Williams",
                username: "parent1",
                password: "parent",
                birthdate: "01/02/1950",
                phoneprimary: "9678",
                phonesecondary: "",
                emailprimary: encodeURIComponent("bonwilliams@email.com"),
                emailsecondary: encodeURIComponent("bonwilliams2@email.com"),
                isfirsttime: true,
                usertype: user_model_1.UserType.parent,
                hasIncompleteHomework: null,
                image: "",
                lastpwupdate: dateNow1,
                lastlogin: dateNow1,
                children: [
                    {
                        id: 4,
                        fname: "Finn",
                        mname: "Johnson",
                        lname: "Williams",
                        username: "student3",
                        password: "password",
                        birthdate: "04/05/1975",
                        phoneprimary: "9456",
                        phonesecondary: "",
                        emailprimary: encodeURIComponent("finnwilliams@email.com"),
                        emailsecondary: encodeURIComponent("finnwilliams2@email.com"),
                        isfirsttime: false,
                        usertype: user_model_1.UserType.student,
                        hasIncompleteHomework: false,
                        image: "~/images/dp4.jpg",
                        lastpwupdate: dateNow1,
                        lastlogin: dateNow1,
                        children: []
                    }
                ]
            },
            {
                id: 7,
                fname: "Maria",
                mname: "",
                lname: "Brown",
                username: "parent2",
                password: "parent",
                birthdate: "02/01/1950",
                phoneprimary: "9789",
                phonesecondary: "0789",
                emailprimary: encodeURIComponent("mariabrown@email.com"),
                emailsecondary: encodeURIComponent("mariabrown2@email.com"),
                isfirsttime: false,
                usertype: user_model_1.UserType.parent,
                hasIncompleteHomework: null,
                image: "",
                lastpwupdate: dateNow1,
                lastlogin: dateNow1,
                children: []
            }
        ];
        return {
            achievement: achievement,
            advert: advert,
            attendance: attendance,
            behaviour: behaviour,
            contactdetail: contactdetail,
            homework: homework,
            lesson: lesson,
            notification: notification,
            period: period,
            user: user
        };
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsb0VBQTZFO0FBQzdFLGtFQUEwRTtBQUUxRSxpRUFBMEU7QUFFMUUsa0VBQXlFO0FBQ3pFLHlEQUE0RDtBQUU1RDtJQUFBO0lBcW9EQSxDQUFDO0lBcG9EQyw4QkFBUSxHQUFSO1FBQ0UsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksT0FBTyxHQUFHLHlCQUFPLENBQUM7UUFFdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLFlBQVksR0FBRyxJQUFJLElBQUksQ0FDekIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUNwRSxDQUFDO1FBQ0YsSUFBSSxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQzFCLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDbkUsQ0FBQztRQUNGLElBQUksZUFBZSxHQUFHLElBQUksSUFBSSxDQUM1QixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQ25FLENBQUM7UUFDRixJQUFJLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FDM0IsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUNuRSxDQUFDO1FBQ0YsSUFBSSxZQUFZLEdBQUcsSUFB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QkFDTixNQUFNLEVBQUUsQ0FBQztnQkFDVCxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ3RCLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixNQUFNLEVBQUUsQ0FBQztnQkFDVCxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDRSxFQUFFLEVBQUUsRUFBRTtnQkFDTixNQUFNLEVBQUUsQ0FBQztnQkFDVCxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxL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VCxhQUFhLGVBQUE7WUFDYixRQUFRLFVBQUE7WUFDUixNQUFNLFFBQUE7WUFDTixZQUFZLGNBQUE7WUFDWixNQUFNLFFBQUE7WUFDTixJQUFJLE1BQUE7U0FDTCxDQUFDO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXJvREQsSUFxb0RDO0FBcm9EWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSBcImFuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGlcIjtcclxuXHJcbmltcG9ydCB7IEFjaGlldmVtZW50IH0gZnJvbSBcIn4vc2hhcmVkL21vZGVsL2FjaGlldmVtZW50Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFkdmVydCB9IGZyb20gXCJ+L3NoYXJlZC9tb2RlbC9hZHZlcnQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXR0ZW5kYW5jZSwgQXR0ZW5kYW5jZU1hcmsgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWwvYXR0ZW5kYW5jZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvdXIsIEJlaGF2aW91clR5cGUgfSBmcm9tIFwifi9zaGFyZWQvbW9kZWwvYmVoYXZpb3VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IENvbnRhY3REZXRhaWxzIH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbC9jb250YWN0dXMubW9kZWxcIjtcclxuaW1wb3J0IHsgSG9tZXdvcmssIEhvbWV3b3JrU3RhdHVzIH0gZnJvbSBcIi4uL3NoYXJlZC9tb2RlbC9ob21ld29yay5tb2RlbFwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tIFwifi9zaGFyZWQvbW9kZWwvbm90aWZpY2F0aW9uLm1vZGVsXCI7XHJcbmltcG9ydCB7IExlc3NvbiwgUGVyaW9kLCBTdWJqZWN0IH0gZnJvbSBcIn4vc2hhcmVkL21vZGVsL3RpbWV0YWJsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyLCBVc2VyVHlwZSB9IGZyb20gXCIuLi9zaGFyZWQvbW9kZWwvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2Uge1xyXG4gIGNyZWF0ZURiKCkge1xyXG4gICAgdmFyIGRhdGVOb3cxID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBkYXRlTm93MiA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgc3ViamVjdCA9IFN1YmplY3Q7XHJcblxyXG4gICAgdmFyIGxlc3NvbkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIHAyV2Vla01vbmRheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpIC0gMTMpXHJcbiAgICApO1xyXG4gICAgdmFyIHAyV2Vla1R1ZXNkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDIpXHJcbiAgICApO1xyXG4gICAgdmFyIHAyV2Vla1dlZG5lc2RheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgMylcclxuICAgICk7XHJcbiAgICB2YXIgcDJXZWVrVGh1cnNkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDQpXHJcbiAgICApO1xyXG4gICAgdmFyIHAyV2Vla0ZyaWRheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgNSlcclxuICAgICk7XHJcbiAgICB2YXIgcDJXZWVrU2F0dXJkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDYpXHJcbiAgICApO1xyXG5cclxuICAgIHZhciBwcmV2V2Vla01vbmRheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgOClcclxuICAgICk7XHJcbiAgICB2YXIgcHJldldlZWtUdWVzZGF5ID0gbmV3IERhdGUoXHJcbiAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyAyKVxyXG4gICAgKTtcclxuICAgIHZhciBwcmV2V2Vla1dlZG5lc2RheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgMylcclxuICAgICk7XHJcbiAgICB2YXIgcHJldldlZWtUaHVyc2RheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgNClcclxuICAgICk7XHJcbiAgICB2YXIgcHJldldlZWtGcmlkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDUpXHJcbiAgICApO1xyXG4gICAgdmFyIHByZXZXZWVrU2F0dXJkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDYpXHJcbiAgICApO1xyXG5cclxuICAgIHZhciBtb25kYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDgpXHJcbiAgICApO1xyXG4gICAgdmFyIHR1ZXNkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDIpXHJcbiAgICApO1xyXG4gICAgdmFyIHdlZG5lc2RheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgMylcclxuICAgICk7XHJcbiAgICB2YXIgdGh1cnNkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDQpXHJcbiAgICApO1xyXG4gICAgdmFyIGZyaWRheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgNSlcclxuICAgICk7XHJcbiAgICB2YXIgc2F0dXJkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDYpXHJcbiAgICApO1xyXG5cclxuICAgIHZhciBuZXh0V2Vla01vbmRheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgOClcclxuICAgICk7XHJcbiAgICB2YXIgbmV4dFdlZWtUdWVzZGF5ID0gbmV3IERhdGUoXHJcbiAgICAgIGxlc3NvbkRhdGUuc2V0RGF0ZShsZXNzb25EYXRlLmdldERhdGUoKSAtIGxlc3NvbkRhdGUuZ2V0RGF5KCkgKyAyKVxyXG4gICAgKTtcclxuICAgIHZhciBuZXh0V2Vla1dlZG5lc2RheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgMylcclxuICAgICk7XHJcbiAgICB2YXIgbmV4dFdlZWtUaHVyc2RheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgNClcclxuICAgICk7XHJcbiAgICB2YXIgbmV4dFdlZWtGcmlkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDUpXHJcbiAgICApO1xyXG4gICAgdmFyIG5leHRXZWVrU2F0dXJkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDYpXHJcbiAgICApO1xyXG5cclxuICAgIHZhciBuMldlZWtNb25kYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDgpXHJcbiAgICApO1xyXG4gICAgdmFyIG4yV2Vla1R1ZXNkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDIpXHJcbiAgICApO1xyXG4gICAgdmFyIG4yV2Vla1dlZG5lc2RheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgMylcclxuICAgICk7XHJcbiAgICB2YXIgbjJXZWVrVGh1cnNkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDQpXHJcbiAgICApO1xyXG4gICAgdmFyIG4yV2Vla0ZyaWRheSA9IG5ldyBEYXRlKFxyXG4gICAgICBsZXNzb25EYXRlLnNldERhdGUobGVzc29uRGF0ZS5nZXREYXRlKCkgLSBsZXNzb25EYXRlLmdldERheSgpICsgNSlcclxuICAgICk7XHJcbiAgICB2YXIgbjJXZWVrU2F0dXJkYXkgPSBuZXcgRGF0ZShcclxuICAgICAgbGVzc29uRGF0ZS5zZXREYXRlKGxlc3NvbkRhdGUuZ2V0RGF0ZSgpIC0gbGVzc29uRGF0ZS5nZXREYXkoKSArIDYpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGFjaGlldmVtZW50OiBBY2hpZXZlbWVudFtdID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgc3ViamVjdDogXCJFbmdsaXNoXCIsXHJcbiAgICAgICAgdHlwZTogXCJFeGNlbGxlbnQgV29ya1wiLFxyXG4gICAgICAgIGRhdGU6IHAyV2Vla01vbmRheSxcclxuICAgICAgICBzY29yZTogMTBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiTWF0aFwiLFxyXG4gICAgICAgIHR5cGU6IFwiRXhjZWxsZW50IFdvcmtcIixcclxuICAgICAgICBkYXRlOiBwMldlZWtUdWVzZGF5LFxyXG4gICAgICAgIHNjb3JlOiAxMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgc3ViamVjdDogXCJBcnRcIixcclxuICAgICAgICB0eXBlOiBcIkV4Y2VsbGVudCBXb3JrXCIsXHJcbiAgICAgICAgZGF0ZTogcDJXZWVrV2VkbmVzZGF5LFxyXG4gICAgICAgIHNjb3JlOiAyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBzdWJqZWN0OiBcIkVuZ2xpc2hcIixcclxuICAgICAgICB0eXBlOiBcIkhlbHBpbmcgT3RoZXJzXCIsXHJcbiAgICAgICAgZGF0ZTogcDJXZWVrVGh1cnNkYXksXHJcbiAgICAgICAgc2NvcmU6IDhcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIHN1YmplY3Q6IFwiTWF0aFwiLFxyXG4gICAgICAgIHR5cGU6IFwiRXhjZWxsZW50IFdvcmtcIixcclxuICAgICAgICBkYXRlOiBwMldlZWtGcmlkYXksXHJcbiAgICAgICAgc2NvcmU6IDMwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNixcclxuICAgICAgICBzdWJqZWN0OiBcIk1hdGhcIixcclxuICAgICAgICB0eXBlOiBcIkV4Y2VsbGVudCBXb3JrXCIsXHJcbiAgICAgICAgZGF0ZTogcDJXZWVrU2F0dXJkYXksXHJcbiAgICAgICAgc2NvcmU6IDIwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNyxcclxuICAgICAgICBzdWJqZWN0OiBcIk1hdGhcIixcclxuICAgICAgICB0eXBlOiBcIlJlcHJlc2VudGF0aXZlXCIsXHJcbiAgICAgICAgZGF0ZTogcHJldldlZWtNb25kYXksXHJcbiAgICAgICAgc2NvcmU6IDEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogOCxcclxuICAgICAgICBzdWJqZWN0OiBcIk1hdGhcIixcclxuICAgICAgICB0eXBlOiBcIkhlbHBpbmcgT3RoZXJzXCIsXHJcbiAgICAgICAgZGF0ZTogcHJldldlZWtUdWVzZGF5LFxyXG4gICAgICAgIHNjb3JlOiAxMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDksXHJcbiAgICAgICAgc3ViamVjdDogXCJTY2llbmNlXCIsXHJcbiAgICAgICAgdHlwZTogXCJFeGNlbGxlbnQgV29ya1wiLFxyXG4gICAgICAgIGRhdGU6IHByZXZXZWVrV2VkbmVzZGF5LFxyXG4gICAgICAgIHNjb3JlOiAxMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiU2NpZW5jZVwiLFxyXG4gICAgICAgIHR5cGU6IFwiTGVhZGVyc2hpcFwiLFxyXG4gICAgICAgIGRhdGU6IHByZXZXZWVrVGh1cnNkYXksXHJcbiAgICAgICAgc2NvcmU6IDEwXHJcbiAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgYWR2ZXJ0OiBBZHZlcnRbXSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHRpdGxlOiBcIkFmdGVyIFNjaG9vbCBQcm9ncmFtc1wiLFxyXG4gICAgICAgIHN1YlRpdGxlOiBcIkxlYXJuLCBFbmdhZ2UsIFBsYXlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiV2Ugb2ZmZXIgdHV0b3JpbmcsIGludGVuc2l2ZSBsZWFybmluZywgaG9tZXdvcmsgaGVscCwgYXJ0cyBhbmQgY3JhZnRzLCByZWFkaW5nLCBtYXRoLCBhbmQgc28gbXVjaCBtb3JlLiBBZG1pc3Npb24gaXMgb3BlbiBmcm9tIE9jdG9iZXIgdG8gRGVjZW1iZXIsIDIwMTguIFJlZ2lzdGVyIG5vdy5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy9hZHZlcnQtYWZ0ZXJzY2hvb2wucG5nXCIsXHJcbiAgICAgICAgdXJsTGluazogXCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIGV4cGlyeURhdGU6IG5leHRXZWVrTW9uZGF5XHJcbiAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgYXR0ZW5kYW5jZTogQXR0ZW5kYW5jZVtdID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgZGF0ZTogbW9uZGF5LFxyXG4gICAgICAgIGFtTWFyazogQXR0ZW5kYW5jZU1hcmsucHJlc2VudCxcclxuICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIGRhdGU6IHR1ZXNkYXksXHJcbiAgICAgICAgYW1NYXJrOiBBdHRlbmRhbmNlTWFyay5sYXRlLFxyXG4gICAgICAgIHBtTWFyazogQXR0ZW5kYW5jZU1hcmsucHJlc2VudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgZGF0ZTogd2VkbmVzZGF5LFxyXG4gICAgICAgIGFtTWFyazogQXR0ZW5kYW5jZU1hcmsucHJlc2VudCxcclxuICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLmxhdGVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIGRhdGU6IHRodXJzZGF5LFxyXG4gICAgICAgIGFtTWFyazogQXR0ZW5kYW5jZU1hcmsuYXV0aG9yaXNlZCxcclxuICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLmxhdGVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIGRhdGU6IGZyaWRheSxcclxuICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLmF1dGhvcmlzZWQsXHJcbiAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5hdXRob3Jpc2VkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNixcclxuICAgICAgICBkYXRlOiBzYXR1cmRheSxcclxuICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLnVuYXV0aG9yaXNlZCxcclxuICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLnVuYXV0aG9yaXNlZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgZGF0ZTogbmV4dFdlZWtNb25kYXksXHJcbiAgICAgICAgYW1NYXJrOiBBdHRlbmRhbmNlTWFyay5wcmVzZW50LFxyXG4gICAgICAgIHBtTWFyazogQXR0ZW5kYW5jZU1hcmsucHJlc2VudFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgZGF0ZTogbmV4dFdlZWtUdWVzZGF5LFxyXG4gICAgICAgIGFtTWFyazogQXR0ZW5kYW5jZU1hcmsubGF0ZSxcclxuICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA5LFxyXG4gICAgICAgIGRhdGU6IG5leHRXZWVrV2VkbmVzZGF5LFxyXG4gICAgICAgIGFtTWFyazogQXR0ZW5kYW5jZU1hcmsucHJlc2VudCxcclxuICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLmxhdGVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxMCxcclxuICAgICAgICBkYXRlOiBuZXh0V2Vla1RodXJzZGF5LFxyXG4gICAgICAgIGFtTWFyazogQXR0ZW5kYW5jZU1hcmsubGF0ZSxcclxuICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLmxhdGVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxMSxcclxuICAgICAgICBkYXRlOiBuZXh0V2Vla0ZyaWRheSxcclxuICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLmF1dGhvcmlzZWQsXHJcbiAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5hdXRob3Jpc2VkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMTIsXHJcbiAgICAgICAgZGF0ZTogbmV4dFdlZWtTYXR1cmRheSxcclxuICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLnVuYXV0aG9yaXNlZCxcclxuICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLnVuYXV0aG9yaXNlZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEzLFxyXG4gICAgICAgIGRhdGU6IG4yV2Vla01vbmRheSxcclxuICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnQsXHJcbiAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5wcmVzZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMTQsXHJcbiAgICAgICAgZGF0ZTogbjJXZWVrVHVlc2RheSxcclxuICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnQsXHJcbiAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5wcmVzZW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMTUsXHJcbiAgICAgICAgZGF0ZTogbjJXZWVrV2VkbmVzZGF5LFxyXG4gICAgICAgIGFtTWFyazogQXR0ZW5kYW5jZU1hcmsubGF0ZSxcclxuICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxNixcclxuICAgICAgICBkYXRlOiBuMldlZWtUaHVyc2RheSxcclxuICAgICAgICBhbU1hcms6IEF0dGVuZGFuY2VNYXJrLnByZXNlbnQsXHJcbiAgICAgICAgcG1NYXJrOiBBdHRlbmRhbmNlTWFyay5sYXRlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMTcsXHJcbiAgICAgICAgZGF0ZTogbjJXZWVrRnJpZGF5LFxyXG4gICAgICAgIGFtTWFyazogQXR0ZW5kYW5jZU1hcmsucHJlc2VudCxcclxuICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLnVuYXV0aG9yaXNlZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDE4LFxyXG4gICAgICAgIGRhdGU6IG4yV2Vla1NhdHVyZGF5LFxyXG4gICAgICAgIGFtTWFyazogQXR0ZW5kYW5jZU1hcmsubGF0ZSxcclxuICAgICAgICBwbU1hcms6IEF0dGVuZGFuY2VNYXJrLnVuYXV0aG9yaXNlZFxyXG4gICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGJlaGF2aW91cjogQmVoYXZpb3VyW10gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBzdWJqZWN0OiBcIkVuZ2xpc2hcIixcclxuICAgICAgICB0eXBlOiBCZWhhdmlvdXJUeXBlLmhvbWV3b3JrLFxyXG4gICAgICAgIHNjb3JlOiAxLFxyXG4gICAgICAgIGRhdGU6IHAyV2Vla01vbmRheVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgc3ViamVjdDogXCJNYXRoXCIsXHJcbiAgICAgICAgdHlwZTogQmVoYXZpb3VyVHlwZS5kaXNydXB0aW9uLFxyXG4gICAgICAgIHNjb3JlOiAxLFxyXG4gICAgICAgIGRhdGU6IHAyV2Vla01vbmRheVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgc3ViamVjdDogXCJTY2llbmNlXCIsXHJcbiAgICAgICAgdHlwZTogQmVoYXZpb3VyVHlwZS5kaXNydXB0aW9uLFxyXG4gICAgICAgIHNjb3JlOiAyLFxyXG4gICAgICAgIGRhdGU6IHAyV2Vla01vbmRheVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgc3ViamVjdDogXCJHZW9ncmFwaHlcIixcclxuICAgICAgICB0eXBlOiBCZWhhdmlvdXJUeXBlLmhvbWV3b3JrLFxyXG4gICAgICAgIHNjb3JlOiAzLFxyXG4gICAgICAgIGRhdGU6IHAyV2Vla01vbmRheVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgc3ViamVjdDogXCJNYXRoXCIsXHJcbiAgICAgICAgdHlwZTogQmVoYXZpb3VyVHlwZS5vcmdhbmlzYXRpb24sXHJcbiAgICAgICAgc2NvcmU6IDEsXHJcbiAgICAgICAgZGF0ZTogcDJXZWVrTW9uZGF5XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNixcclxuICAgICAgICBzdWJqZWN0OiBcIkFydCBhbmQgRGVzaWduXCIsXHJcbiAgICAgICAgdHlwZTogQmVoYXZpb3VyVHlwZS5vcmdhbmlzYXRpb24sXHJcbiAgICAgICAgc2NvcmU6IDEsXHJcbiAgICAgICAgZGF0ZTogcDJXZWVrTW9uZGF5XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNyxcclxuICAgICAgICBzdWJqZWN0OiBcIk11c2ljXCIsXHJcbiAgICAgICAgdHlwZTogQmVoYXZpb3VyVHlwZS5kaXNydXB0aW9uLFxyXG4gICAgICAgIHNjb3JlOiAxLFxyXG4gICAgICAgIGRhdGU6IHAyV2Vla01vbmRheVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgc3ViamVjdDogXCJTY2llbmNlXCIsXHJcbiAgICAgICAgdHlwZTogQmVoYXZpb3VyVHlwZS5ob21ld29yayxcclxuICAgICAgICBzY29yZTogMixcclxuICAgICAgICBkYXRlOiBwMldlZWtNb25kYXlcclxuICAgICAgfVxyXG4gICAgXTtcclxuICAgIGNvbnN0IGNvbnRhY3RkZXRhaWw6IENvbnRhY3REZXRhaWxzID0ge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgcGhvbmVubzogXCIrMSA5ODktMzU2LTE0MTRcIixcclxuICAgICAgZW1haWw6IFwicGllZHBpcGVyc2Nob29sQGVtYWlsLmNvbVwiLFxyXG4gICAgICBhZGRyZXNzOiBcIjQ0NCBXaWxzb24gU3QsIEFscGVuYSwgTUkgNDk3MDcsIFVTQVwiLFxyXG4gICAgICBtYXA6IFwiXCJcclxuICAgIH07XHJcblxyXG4gICAgZGF0ZU5vdzEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF0ZU5vdzIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgaG9tZXdvcms6IEhvbWV3b3JrW10gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBzdHVkZW50SWQ6IDIsXHJcbiAgICAgICAgc3ViamVjdDogXCJQcm9kdWN0XCIsXHJcbiAgICAgICAgdGFzazogYENvbXBsZXRlIHRoZSBleGlzdGluZyBwcm9kdWN0cyBhbmQgdXNlciBwcm9maWxlIHJlc2VhcmNoIHNvIHRoYXQgeW91IGFyZSByZWFkeSB0byB0eXBlIGFsbCB0aGUgcmVzZWFyY2ggcGFnZXMgaW4gdGhlIGZpcnN0IGxlc3NvbiBpbiBTZXB0ZW1iZXIuIFBsYW4gYSBjb25jbHVzaW9uIGZvciBlYWNoIHBhZ2UgKHRoaXMgaXMgdGhlIHJlc2VhcmNoIGFuYWx5c2lzIHBhZ2UgYnV0IHdlIHdpbGwgYmUgYnJlYWtpbmcgaXQgdXAgaW4gdG8gYSBwYXJhZ3JhcGggb24gZWFjaCBwYWdlKS5cXG5cXG5Zb3UgbWlnaHQgYWxzbyB3YW50IHRvIHdyaXRlIGEgZHJhZnQgRGVzaWduIFNwZWNpZmljYXRpb24gYXMgd2Ugd2lsbCBjb21wbGV0ZSB0aGF0IGluIExlc3NvbiAyIG9mIFkxMS5cXG5cXG5Vc2UgdGhlIHBvd2VyIHBvaW50IHRvIGd1aWRlIHlvdS5gLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJNciBGaXhpdFwiLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShkYXRlTm93MS5zZXREYXRlKGRhdGVOb3cxLmdldERhdGUoKSAtIDcpKSxcclxuICAgICAgICBhdHRhY2hlZEZpbGVzOiB0cnVlLFxyXG4gICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKGRhdGVOb3cyLnNldERhdGUoZGF0ZU5vdzIuZ2V0RGF0ZSgpIC0gNykpLFxyXG4gICAgICAgIHN0YXR1czogSG9tZXdvcmtTdGF0dXMuZG9uZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgc3R1ZGVudElkOiAyLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiRnJlbmNoXCIsXHJcbiAgICAgICAgdGFzazogYENvbnRpbnVlIHRvIHJldmlzZSBmb3IgeW91ciBzcGVha2luZyBleGFtLiBSZXZpc2VkIHRpbWVzIGF0dGFjaGVkIGFzIHdlbGwgYXMgcHJlc2VudGF0aW9uIHRoZW1lcy5gLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJNcnMgRnJlbmNoXCIsXHJcbiAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKGRhdGVOb3cxLnNldERhdGUoZGF0ZU5vdzEuZ2V0RGF0ZSgpICsgMSkpLFxyXG4gICAgICAgIGF0dGFjaGVkRmlsZXM6IHRydWUsXHJcbiAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzIuc2V0RGF0ZShkYXRlTm93Mi5nZXREYXRlKCkgKyAxKSksXHJcbiAgICAgICAgc3RhdHVzOiBIb21ld29ya1N0YXR1cy5kb25lXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBzdHVkZW50SWQ6IDIsXHJcbiAgICAgICAgc3ViamVjdDogXCJIaXN0b3J5XCIsXHJcbiAgICAgICAgdGFzazogYFlvdSB3aWxsIGhhdmUgYSBtZWRpY2luZSBtb2NrIHRoZSBmaXJzdCB3ZWVrIGJhY2sgaW4gWWVhciAxMS5cXG5cXG5Zb3UgaGF2ZSBiZWVuIHJldmlzaW5nIG1lZGljaW5lIHRoaXMgaGFsZiB0ZXJtLCBhbmQgeW91IHdpbGwgbmVlZCB0byBrZWVwIHVwIHdpdGggdGhpcyByZXZpc2lvbiBvdmVyIHRoZSBzdW1tZXIgaG9saWRheXMuIE1hbnkgb2YgeW91IGhhdmUgYm91Z2h0IHJldmlzaW9uIGd1aWRlcyAtIHVzZSB0aGVtIVxcblxcbkkgaGF2ZSBhbHNvIGF0dGFjaGVkIE1lZGljaW5lIGFuZCBXZXN0ZXJuIHJldmlzaW9uIHdvcmsgYm9va3MuYCxcclxuICAgICAgICBjcmVhdGVkQnk6IFwiTXJzIFBhc3RcIixcclxuICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzEuc2V0RGF0ZShkYXRlTm93MS5nZXREYXRlKCkgKyAxKSksXHJcbiAgICAgICAgYXR0YWNoZWRGaWxlczogZmFsc2UsXHJcbiAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzIuc2V0RGF0ZShkYXRlTm93Mi5nZXREYXRlKCkgKyAxKSksXHJcbiAgICAgICAgc3RhdHVzOiBIb21ld29ya1N0YXR1cy5kb25lXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBzdHVkZW50SWQ6IDIsXHJcbiAgICAgICAgc3ViamVjdDogXCJNYXRoc1wiLFxyXG4gICAgICAgIHRhc2s6IGBJIGhhdmUgYXR0YWNoZWQgdGhlIHNwZWFraW5nIHRpbWV0YWJsZXMgZm9yIG5leHQgd2Vlay4gWW91IHdpbGwgbmVlZCB0byBhcnJpdmUgYXQgdGhlIGhvbGRpbmcgcm9vbSAoTUwxMCkgYXQgdGhlIGZvbGxvd2luZyB0aW1lczpcXG5cXG5JZiB5b3VyIGV4YW0gaXMgYXQgOSBvciA5LjE1IC0gc2lnbiBpbiB0byB0dXRvciBhbmQgdGhlbiBnbyBzdHJhaWdodCB0byBob2xkaW5nIHJvb20uXFxuSWYgeW91ciBleGFtIGlzIGZyb20gOS4zMCB0byAxMC40NSBnbyBhdCBzdGFydCBvZiBsZXNzb24gMS5cXG5JZiB5b3VyIGV4YW0gaXMgZnJvbSAxMS4yNSB0byAxMi41MCBnbyBhdCBzdGFydCBvZiBsZXNzb24gMy5cXG5JZiB5b3VyIGV4YW0gaXMgaW4gdGhlIGFmdGVybm9vbiwgZ28gYXQgdGhlIHN0YXJ0IG9mIGxlc3NvbiA1LmAsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcIk1yIEZyZW5jaFwiLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShkYXRlTm93MS5zZXREYXRlKGRhdGVOb3cxLmdldERhdGUoKSArIDEpKSxcclxuICAgICAgICBhdHRhY2hlZEZpbGVzOiBmYWxzZSxcclxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSArIDEpKSxcclxuICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLmRvbmVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIHN0dWRlbnRJZDogMixcclxuICAgICAgICBzdWJqZWN0OiBcIlBoeXNpY3NcIixcclxuICAgICAgICB0YXNrOlxyXG4gICAgICAgICAgXCJDb21wbGV0ZSB0aGUgZXhpc3RpbmcgcHJvZHVjdHMgYW5kIHVzZXIgcHJvZmlsZSByZXNlYXJjaCBzbyB0aGF0IHlvdSBhcmUgcmVhZHkgdG8gdHlwZSBhbGwgdGhlIHJlc2VhcmNoIHBhZ2VzIGluIHRoZSBmaXJzdCBsZXNzb24gaW4gU2VwdGVtYmVyLiBQbGFuIGEgY29uY2x1c2lvbiBmb3IgZWFjaCBwYWdlICh0aGlzIGlzIHRoZSByZXNlYXJjaCBhbmFseXNpcyBwYWdlIGJ1dCB3ZSB3aWxsIGJlIGJyZWFraW5nIGl0IHVwIGluIHRvIGEgcGFyYWdyYXBoIG9uIGVhY2ggcGFnZSkuXFxuXFxuWW91IG1pZ2h0IGFsc28gd2FudCB0byB3cml0ZSBhIGRyYWZ0IERlc2lnbiBTcGVjaWZpY2F0aW9uIGFzIHdlIHdpbGwgY29tcGxldGUgdGhhdCBpbiBMZXNzb24gMiBvZiBZMTEuXFxuXFxuVXNlIHRoZSBwb3dlciBwb2ludCB0byBndWlkZSB5b3UuXCIsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcIk1yIEZyZW5jaFwiLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShkYXRlTm93MS5zZXREYXRlKGRhdGVOb3cxLmdldERhdGUoKSArIDEpKSxcclxuICAgICAgICBhdHRhY2hlZEZpbGVzOiBmYWxzZSxcclxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSArIDEpKSxcclxuICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLmRvbmVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA2LFxyXG4gICAgICAgIHN0dWRlbnRJZDogMixcclxuICAgICAgICBzdWJqZWN0OiBcIkNoZW1pc3RyeVwiLFxyXG4gICAgICAgIHRhc2s6XHJcbiAgICAgICAgICBcIkNvbnRpbnVlIHRvIHJldmlzZSBmb3IgeW91ciBzcGVha2luZyBleGFtLiBSZXZpc2VkIHRpbWVzIGF0dGFjaGVkIGFzIHdlbGwgYXMgcHJlc2VudGF0aW9uIHRoZW1lcy5cIixcclxuICAgICAgICBjcmVhdGVkQnk6IFwiTXIgRnJlbmNoXCIsXHJcbiAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKGRhdGVOb3cxLnNldERhdGUoZGF0ZU5vdzEuZ2V0RGF0ZSgpICsgMSkpLFxyXG4gICAgICAgIGF0dGFjaGVkRmlsZXM6IGZhbHNlLFxyXG4gICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKGRhdGVOb3cyLnNldERhdGUoZGF0ZU5vdzIuZ2V0RGF0ZSgpICsgMSkpLFxyXG4gICAgICAgIHN0YXR1czogSG9tZXdvcmtTdGF0dXMuZG9uZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgc3R1ZGVudElkOiAyLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiQmlvbG9neVwiLFxyXG4gICAgICAgIHRhc2s6XHJcbiAgICAgICAgICBcIllvdSB3aWxsIGhhdmUgYSBtZWRpY2luZSBtb2NrIHRoZSBmaXJzdCB3ZWVrIGJhY2sgaW4gWWVhciAxMS5cXG5cXG5Zb3UgaGF2ZSBiZWVuIHJldmlzaW5nIG1lZGljaW5lIHRoaXMgaGFsZiB0ZXJtLCBhbmQgeW91IHdpbGwgbmVlZCB0byBrZWVwIHVwIHdpdGggdGhpcyByZXZpc2lvbiBvdmVyIHRoZSBzdW1tZXIgaG9saWRheXMuIE1hbnkgb2YgeW91IGhhdmUgYm91Z2h0IHJldmlzaW9uIGd1aWRlcyAtIHVzZSB0aGVtIVxcblxcbkkgaGF2ZSBhbHNvIGF0dGFjaGVkIE1lZGljaW5lIGFuZCBXZXN0ZXJuIHJldmlzaW9uIHdvcmsgYm9va3MuXCIsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcIk1yIEZyZW5jaFwiLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShkYXRlTm93MS5zZXREYXRlKGRhdGVOb3cxLmdldERhdGUoKSArIDEpKSxcclxuICAgICAgICBhdHRhY2hlZEZpbGVzOiBmYWxzZSxcclxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSArIDEpKSxcclxuICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLnRvZG9cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA4LFxyXG4gICAgICAgIHN0dWRlbnRJZDogMixcclxuICAgICAgICBzdWJqZWN0OiBcIkdlb21ldHJ5XCIsXHJcbiAgICAgICAgdGFzazpcclxuICAgICAgICAgIFwiWW91IHdpbGwgaGF2ZSBhIG1lZGljaW5lIG1vY2sgdGhlIGZpcnN0IHdlZWsgYmFjayBpbiBZZWFyIDExLlxcblxcbllvdSBoYXZlIGJlZW4gcmV2aXNpbmcgbWVkaWNpbmUgdGhpcyBoYWxmIHRlcm0sIGFuZCB5b3Ugd2lsbCBuZWVkIHRvIGtlZXAgdXAgd2l0aCB0aGlzIHJldmlzaW9uIG92ZXIgdGhlIHN1bW1lciBob2xpZGF5cy4gTWFueSBvZiB5b3UgaGF2ZSBib3VnaHQgcmV2aXNpb24gZ3VpZGVzIC0gdXNlIHRoZW0hXFxuXFxuSSBoYXZlIGFsc28gYXR0YWNoZWQgTWVkaWNpbmUgYW5kIFdlc3Rlcm4gcmV2aXNpb24gd29yayBib29rcy5cIixcclxuICAgICAgICBjcmVhdGVkQnk6IFwiTXIgRml4aXRcIixcclxuICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzEuc2V0RGF0ZShkYXRlTm93MS5nZXREYXRlKCkgKyAxKSksXHJcbiAgICAgICAgYXR0YWNoZWRGaWxlczogdHJ1ZSxcclxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSArIDEpKSxcclxuICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLnRvZG9cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA5LFxyXG4gICAgICAgIHN0dWRlbnRJZDogMSxcclxuICAgICAgICBzdWJqZWN0OiBcIlBoeXNpY2FsIEVkdWNhdGlvblwiLFxyXG4gICAgICAgIHRhc2s6XHJcbiAgICAgICAgICBcIkNvbXBsZXRlIHRoZSBleGlzdGluZyBwcm9kdWN0cyBhbmQgdXNlciBwcm9maWxlIHJlc2VhcmNoIHNvIHRoYXQgeW91IGFyZSByZWFkeSB0byB0eXBlIGFsbCB0aGUgcmVzZWFyY2ggcGFnZXMgaW4gdGhlIGZpcnN0IGxlc3NvbiBpbiBTZXB0ZW1iZXIuIFBsYW4gYSBjb25jbHVzaW9uIGZvciBlYWNoIHBhZ2UgKHRoaXMgaXMgdGhlIHJlc2VhcmNoIGFuYWx5c2lzIHBhZ2UgYnV0IHdlIHdpbGwgYmUgYnJlYWtpbmcgaXQgdXAgaW4gdG8gYSBwYXJhZ3JhcGggb24gZWFjaCBwYWdlKS5cXG5cXG5Zb3UgbWlnaHQgYWxzbyB3YW50IHRvIHdyaXRlIGEgZHJhZnQgRGVzaWduIFNwZWNpZmljYXRpb24gYXMgd2Ugd2lsbCBjb21wbGV0ZSB0aGF0IGluIExlc3NvbiAyIG9mIFkxMS5cXG5cXG5Vc2UgdGhlIHBvd2VyIHBvaW50IHRvIGd1aWRlIHlvdS5cIixcclxuICAgICAgICBjcmVhdGVkQnk6IFwiTXJzIEZyZW5jaFwiLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShkYXRlTm93MS5zZXREYXRlKGRhdGVOb3cxLmdldERhdGUoKSArIDEpKSxcclxuICAgICAgICBhdHRhY2hlZEZpbGVzOiB0cnVlLFxyXG4gICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKGRhdGVOb3cyLnNldERhdGUoZGF0ZU5vdzIuZ2V0RGF0ZSgpICsgMSkpLFxyXG4gICAgICAgIHN0YXR1czogSG9tZXdvcmtTdGF0dXMudG9kb1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgIHN0dWRlbnRJZDogMixcclxuICAgICAgICBzdWJqZWN0OiBcIlByb2dyYW1taW5nIDFcIixcclxuICAgICAgICB0YXNrOlxyXG4gICAgICAgICAgXCJDb250aW51ZSB0byByZXZpc2UgZm9yIHlvdXIgc3BlYWtpbmcgZXhhbS4gUmV2aXNlZCB0aW1lcyBhdHRhY2hlZCBhcyB3ZWxsIGFzIHByZXNlbnRhdGlvbiB0aGVtZXMuXCIsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcIk1ycyBQYXN0XCIsXHJcbiAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKGRhdGVOb3cxLnNldERhdGUoZGF0ZU5vdzEuZ2V0RGF0ZSgpICsgMSkpLFxyXG4gICAgICAgIGF0dGFjaGVkRmlsZXM6IGZhbHNlLFxyXG4gICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKGRhdGVOb3cyLnNldERhdGUoZGF0ZU5vdzIuZ2V0RGF0ZSgpICsgMSkpLFxyXG4gICAgICAgIHN0YXR1czogSG9tZXdvcmtTdGF0dXMudG9kb1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDExLFxyXG4gICAgICAgIHN0dWRlbnRJZDogMixcclxuICAgICAgICBzdWJqZWN0OiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlXCIsXHJcbiAgICAgICAgdGFzazpcclxuICAgICAgICAgIFwiWW91IHdpbGwgaGF2ZSBhIG1lZGljaW5lIG1vY2sgdGhlIGZpcnN0IHdlZWsgYmFjayBpbiBZZWFyIDExLlxcblxcbllvdSBoYXZlIGJlZW4gcmV2aXNpbmcgbWVkaWNpbmUgdGhpcyBoYWxmIHRlcm0sIGFuZCB5b3Ugd2lsbCBuZWVkIHRvIGtlZXAgdXAgd2l0aCB0aGlzIHJldmlzaW9uIG92ZXIgdGhlIHN1bW1lciBob2xpZGF5cy4gTWFueSBvZiB5b3UgaGF2ZSBib3VnaHQgcmV2aXNpb24gZ3VpZGVzIC0gdXNlIHRoZW0hXFxuXFxuSSBoYXZlIGFsc28gYXR0YWNoZWQgTWVkaWNpbmUgYW5kIFdlc3Rlcm4gcmV2aXNpb24gd29yayBib29rcy5cIixcclxuICAgICAgICBjcmVhdGVkQnk6IFwiTXIgRnJlbmNoXCIsXHJcbiAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKGRhdGVOb3cxLnNldERhdGUoZGF0ZU5vdzEuZ2V0RGF0ZSgpICsgMSkpLFxyXG4gICAgICAgIGF0dGFjaGVkRmlsZXM6IGZhbHNlLFxyXG4gICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKGRhdGVOb3cyLnNldERhdGUoZGF0ZU5vdzIuZ2V0RGF0ZSgpICsgMSkpLFxyXG4gICAgICAgIHN0YXR1czogSG9tZXdvcmtTdGF0dXMudG9kb1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEyLFxyXG4gICAgICAgIHN0dWRlbnRJZDogMixcclxuICAgICAgICBzdWJqZWN0OiBcIkNvbXB1dGVyIFNjaWVuY2VcIixcclxuICAgICAgICB0YXNrOiBcIlJlYWQgYWJvdXQgU3lzdGVtIEFuYWx5c2lzICYgRGVzaWduXCIsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcIk1yIEZyZW5jaFwiLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShkYXRlTm93MS5zZXREYXRlKGRhdGVOb3cxLmdldERhdGUoKSArIDEpKSxcclxuICAgICAgICBhdHRhY2hlZEZpbGVzOiBmYWxzZSxcclxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSArIDEpKSxcclxuICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLnRvZG9cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxMyxcclxuICAgICAgICBzdHVkZW50SWQ6IDIsXHJcbiAgICAgICAgc3ViamVjdDogXCJDaGVtaXN0cnlcIixcclxuICAgICAgICB0YXNrOiBcIkludHJvZHVjdGlvbiB0byBDaGVtaXN0cnlcIixcclxuICAgICAgICBjcmVhdGVkQnk6IFwiTXIgRnJlbmNoXCIsXHJcbiAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKGRhdGVOb3cxLnNldERhdGUoZGF0ZU5vdzEuZ2V0RGF0ZSgpIC0gMTUpKSxcclxuICAgICAgICBhdHRhY2hlZEZpbGVzOiBmYWxzZSxcclxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSAtIDE1KSksXHJcbiAgICAgICAgc3RhdHVzOiBIb21ld29ya1N0YXR1cy5yZW1vdmVkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMTQsXHJcbiAgICAgICAgc3R1ZGVudElkOiAxLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiU2NpZW5jZVwiLFxyXG4gICAgICAgIHRhc2s6IGBDb21wbGV0ZSB0aGUgZXhpc3RpbmcgcHJvZHVjdHMgYW5kIHVzZXIgcHJvZmlsZSByZXNlYXJjaCBzbyB0aGF0IHlvdSBhcmUgcmVhZHkgdG8gdHlwZSBhbGwgdGhlIHJlc2VhcmNoIHBhZ2VzIGluIHRoZSBmaXJzdCBsZXNzb24gaW4gU2VwdGVtYmVyLiBQbGFuIGEgY29uY2x1c2lvbiBmb3IgZWFjaCBwYWdlICh0aGlzIGlzIHRoZSByZXNlYXJjaCBhbmFseXNpcyBwYWdlIGJ1dCB3ZSB3aWxsIGJlIGJyZWFraW5nIGl0IHVwIGluIHRvIGEgcGFyYWdyYXBoIG9uIGVhY2ggcGFnZSkuXFxuXFxuWW91IG1pZ2h0IGFsc28gd2FudCB0byB3cml0ZSBhIGRyYWZ0IERlc2lnbiBTcGVjaWZpY2F0aW9uIGFzIHdlIHdpbGwgY29tcGxldGUgdGhhdCBpbiBMZXNzb24gMiBvZiBZMTEuXFxuXFxuVXNlIHRoZSBwb3dlciBwb2ludCB0byBndWlkZSB5b3UuYCxcclxuICAgICAgICBjcmVhdGVkQnk6IFwiTXIgRml4aXRcIixcclxuICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzEuc2V0RGF0ZShkYXRlTm93MS5nZXREYXRlKCkgLSA3KSksXHJcbiAgICAgICAgYXR0YWNoZWRGaWxlczogdHJ1ZSxcclxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSArIDIpKSxcclxuICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLnRvZG9cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxNSxcclxuICAgICAgICBzdHVkZW50SWQ6IDEsXHJcbiAgICAgICAgc3ViamVjdDogXCJNdXNpY1wiLFxyXG4gICAgICAgIHRhc2s6IGBDb21wbGV0ZSB0aGUgZXhpc3RpbmcgcHJvZHVjdHMgYW5kIHVzZXIgcHJvZmlsZSByZXNlYXJjaCBzbyB0aGF0IHlvdSBhcmUgcmVhZHkgdG8gdHlwZSBhbGwgdGhlIHJlc2VhcmNoIHBhZ2VzIGluIHRoZSBmaXJzdCBsZXNzb24gaW4gU2VwdGVtYmVyLiBQbGFuIGEgY29uY2x1c2lvbiBmb3IgZWFjaCBwYWdlICh0aGlzIGlzIHRoZSByZXNlYXJjaCBhbmFseXNpcyBwYWdlIGJ1dCB3ZSB3aWxsIGJlIGJyZWFraW5nIGl0IHVwIGluIHRvIGEgcGFyYWdyYXBoIG9uIGVhY2ggcGFnZSkuXFxuXFxuWW91IG1pZ2h0IGFsc28gd2FudCB0byB3cml0ZSBhIGRyYWZ0IERlc2lnbiBTcGVjaWZpY2F0aW9uIGFzIHdlIHdpbGwgY29tcGxldGUgdGhhdCBpbiBMZXNzb24gMiBvZiBZMTEuXFxuXFxuVXNlIHRoZSBwb3dlciBwb2ludCB0byBndWlkZSB5b3UuYCxcclxuICAgICAgICBjcmVhdGVkQnk6IFwiTXIgRml4aXRcIixcclxuICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoZGF0ZU5vdzEuc2V0RGF0ZShkYXRlTm93MS5nZXREYXRlKCkgLSA3KSksXHJcbiAgICAgICAgYXR0YWNoZWRGaWxlczogdHJ1ZSxcclxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZShkYXRlTm93Mi5zZXREYXRlKGRhdGVOb3cyLmdldERhdGUoKSArIDIpKSxcclxuICAgICAgICBzdGF0dXM6IEhvbWV3b3JrU3RhdHVzLnRvZG9cclxuICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBsZXNzb246IExlc3NvbltdID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDcsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiTWF0dGhldyBEb3duc1wiLFxyXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3QucmVnLFxyXG4gICAgICAgIGNsYXNzOiBcIlJlZ1wiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiQWxiZXJ0IEVpbnN0ZWluXCIsXHJcbiAgICAgICAgc3ViamVjdDogc3ViamVjdC5zY2llbmNlLFxyXG4gICAgICAgIGNsYXNzOiBcIjExU2MxXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiRmVyZGluYW5kIE1lZ2VsbGFuXCIsXHJcbiAgICAgICAgc3ViamVjdDogc3ViamVjdC5oaXN0b3J5LFxyXG4gICAgICAgIGNsYXNzOiBcIjExSGkxXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJcIixcclxuICAgICAgICBzdWJqZWN0OiBcIlwiLFxyXG4gICAgICAgIGNsYXNzOiBcIlwiLFxyXG4gICAgICAgIGJyZWFrOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDExLCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJMdWR3aWcgVmFuIEJlZXRob3ZlblwiLFxyXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3QubXVzaWMsXHJcbiAgICAgICAgY2xhc3M6IFwiMTFNdTFcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA2LFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMSwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMiwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiQWxhbiBUdXJpbmdcIixcclxuICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LmNvbXB1dGluZyxcclxuICAgICAgICBjbGFzczogXCIxMUNvMVwiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDEzLCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJcIixcclxuICAgICAgICBzdWJqZWN0OiBcIlwiLFxyXG4gICAgICAgIGNsYXNzOiBcIlwiLFxyXG4gICAgICAgIGJyZWFrOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogOCxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTQsIDAsIDApKSxcclxuICAgICAgICB0ZWFjaGVyOiBcIkhhcnJ5IEphbWVzIE1vb3JlXCIsXHJcbiAgICAgICAgc3ViamVjdDogc3ViamVjdC5kZXNpZ24sXHJcbiAgICAgICAgY2xhc3M6IFwiSUNUMVwiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDksXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDE1LCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJOb3JiZXJ0IEhleWVzXCIsXHJcbiAgICAgICAgc3ViamVjdDogc3ViamVjdC5lbmdsaXNoLFxyXG4gICAgICAgIGNsYXNzOiBcIjExRW4xXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoNywgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiTWF0dGhldyBEb3duc1wiLFxyXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3QucmVnLFxyXG4gICAgICAgIGNsYXNzOiBcIlJlZ1wiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDExLFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiQWxiZXJ0IEVpbnN0ZWluXCIsXHJcbiAgICAgICAgc3ViamVjdDogXCJTY2llbmNlXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiMTFTYzFcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxMixcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDEwLCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJGZXJkaW5hbmQgTWVnZWxsYW5cIixcclxuICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LmVuZ2xpc2gsXHJcbiAgICAgICAgY2xhc3M6IFwiMTFIaTFcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxMyxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDEwLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMCwgMzAsIDApKSxcclxuICAgICAgICB0ZWFjaGVyOiBcIlwiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiXCIsXHJcbiAgICAgICAgYnJlYWs6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxNCxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTEsIDAsIDApKSxcclxuICAgICAgICB0ZWFjaGVyOiBcIkx1ZHdpZyBWYW4gQmVldGhvdmVuXCIsXHJcbiAgICAgICAgc3ViamVjdDogc3ViamVjdC5hcnQsXHJcbiAgICAgICAgY2xhc3M6IFwiMTFNdTFcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxNSxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDExLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMiwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiQWxhbiBUdXJpbmdcIixcclxuICAgICAgICBzdWJqZWN0OiBzdWJqZWN0Lm1hdGgsXHJcbiAgICAgICAgY2xhc3M6IFwiMTFDbzFcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxNixcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMywgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiXCIsXHJcbiAgICAgICAgc3ViamVjdDogXCJcIixcclxuICAgICAgICBjbGFzczogXCJcIixcclxuICAgICAgICBicmVhazogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDE3LFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJIYXJyeSBKYW1lcyBNb29yZVwiLFxyXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3QuZ2VvZ3JhcGh5LFxyXG4gICAgICAgIGNsYXNzOiBcIklDVDFcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxOCxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxNSwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiTm9yYmVydCBIZXllc1wiLFxyXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3QubGFuZ3VhZ2VzLFxyXG4gICAgICAgIGNsYXNzOiBcIjExRW4xXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDE5LFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3Vycyg3LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuICAgICAgICB0ZWFjaGVyOiBcIk1hdHRoZXcgRG93bnNcIixcclxuICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LnJlZyxcclxuICAgICAgICBjbGFzczogXCJSZWdcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyMCxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3Vycyg5LCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJBbGJlcnQgRWluc3RlaW5cIixcclxuICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LnNjaWVuY2UsXHJcbiAgICAgICAgY2xhc3M6IFwiMTFTYzFcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyMSxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiRWR3YXJkIFRob21hc1wiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiUGh5c2ljYWwgRWR1Y2F0aW9uXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiMTFQZTFcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyMixcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJcIixcclxuICAgICAgICBzdWJqZWN0OiBcIlwiLFxyXG4gICAgICAgIGNsYXNzOiBcIlwiLFxyXG4gICAgICAgIGJyZWFrOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMjMsXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxMSwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiTHVkd2lnIFZhbiBCZWV0aG92ZW5cIixcclxuICAgICAgICBzdWJqZWN0OiBzdWJqZWN0Lm11c2ljLFxyXG4gICAgICAgIGNsYXNzOiBcIjExTXUxXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMjQsXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDExLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJBbGFuIFR1cmluZ1wiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiQ29tcHV0aW5nXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiMTFDbzFcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyNSxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTIsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuICAgICAgICB0ZWFjaGVyOiBcIlwiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiXCIsXHJcbiAgICAgICAgYnJlYWs6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyNixcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTQsIDAsIDApKSxcclxuICAgICAgICB0ZWFjaGVyOiBcIkhhcnJ5IEphbWVzIE1vb3JlXCIsXHJcbiAgICAgICAgc3ViamVjdDogc3ViamVjdC5nZW9ncmFwaHksXHJcbiAgICAgICAgY2xhc3M6IFwiSUNUMVwiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDI3LFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxNSwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiTm9yYmVydCBIZXllc1wiLFxyXG4gICAgICAgIHN1YmplY3Q6IHN1YmplY3QubGFuZ3VhZ2VzLFxyXG4gICAgICAgIGNsYXNzOiBcIjExRW4xXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDI4LFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDcsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJNYXR0aGV3IERvd25zXCIsXHJcbiAgICAgICAgc3ViamVjdDogc3ViamVjdC5yZWcsXHJcbiAgICAgICAgY2xhc3M6IFwiUmVnXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMjksXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuICAgICAgICB0ZWFjaGVyOiBcIkFsYW4gVHVyaW5nXCIsXHJcbiAgICAgICAgc3ViamVjdDogXCJDb21wdXRpbmdcIixcclxuICAgICAgICBjbGFzczogXCIxMVNjMVwiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMwLFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiSGFycnkgSmFtZXMgTW9vcmVcIixcclxuICAgICAgICBzdWJqZWN0OiBcIkRlc2lnbiBhbmQgVGVjaG5vbG9neVwiLFxyXG4gICAgICAgIGNsYXNzOiBcIjExSGkxXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMzEsXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMCwgMzAsIDApKSxcclxuICAgICAgICB0ZWFjaGVyOiBcIlwiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiXCIsXHJcbiAgICAgICAgYnJlYWs6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzMixcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMCwgMzAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMSwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiTHVkd2lnIFZhbiBCZWV0aG92ZW5cIixcclxuICAgICAgICBzdWJqZWN0OiBcIk11c2ljXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiMTFNdTFcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzMyxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMSwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJBbGJlcnQgRWluc3RlaW5cIixcclxuICAgICAgICBzdWJqZWN0OiBcIlNjaWVuY2VcIixcclxuICAgICAgICBjbGFzczogXCIxMUNvMVwiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDM0LFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuICAgICAgICB0ZWFjaGVyOiBcIlwiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiXCIsXHJcbiAgICAgICAgYnJlYWs6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzNSxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMywgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJGZXJkaW5hbmQgTWVnZWxsYW5cIixcclxuICAgICAgICBzdWJqZWN0OiBcIkhpc3RvcnlcIixcclxuICAgICAgICBjbGFzczogXCJJQ1QxXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMzYsXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTQsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxNSwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiTm9yYmVydCBIZXllc1wiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiRW5nbGlzaFwiLFxyXG4gICAgICAgIGNsYXNzOiBcIjExRW4xXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDM3LFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3Vycyg3LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuICAgICAgICB0ZWFjaGVyOiBcIk1hdHRoZXcgRG93bnNcIixcclxuICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LnJlZyxcclxuICAgICAgICBjbGFzczogXCJSZWdcIixcclxuICAgICAgICBicmVhazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzOCxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3Vycyg5LCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJBbGJlcnQgRWluc3RlaW5cIixcclxuICAgICAgICBzdWJqZWN0OiBcIlNjaWVuY2VcIixcclxuICAgICAgICBjbGFzczogXCIxMVNjMVwiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDM5LFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3Vycyg5LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDEwLCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJGZXJkaW5hbmQgTWVnZWxsYW5cIixcclxuICAgICAgICBzdWJqZWN0OiBcIkhpc3RvcnlcIixcclxuICAgICAgICBjbGFzczogXCIxMUhpMVwiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDQwLFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMCwgMzAsIDApKSxcclxuICAgICAgICB0ZWFjaGVyOiBcIlwiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiXCIsXHJcbiAgICAgICAgYnJlYWs6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0MSxcclxuICAgICAgICB1c2VySWQ6IDEsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDExLCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJMdWR3aWcgVmFuIEJlZXRob3ZlblwiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiTXVzaWNcIixcclxuICAgICAgICBjbGFzczogXCIxMU11MVwiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDQyLFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMSwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMiwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiQWxhbiBUdXJpbmdcIixcclxuICAgICAgICBzdWJqZWN0OiBcIkNvbXB1dGluZ1wiLFxyXG4gICAgICAgIGNsYXNzOiBcIjExQ28xXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNDMsXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDEzLCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJcIixcclxuICAgICAgICBzdWJqZWN0OiBcIlwiLFxyXG4gICAgICAgIGNsYXNzOiBcIlwiLFxyXG4gICAgICAgIGJyZWFrOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNDQsXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDEzLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJIYXJyeSBKYW1lcyBNb29yZVwiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiRGVzaWduIGFuZCBUZWNobm9sb2d5XCIsXHJcbiAgICAgICAgY2xhc3M6IFwiSUNUMVwiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDQ1LFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxNSwgMCwgMCkpLFxyXG4gICAgICAgIHRlYWNoZXI6IFwiTm9yYmVydCBIZXllc1wiLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiRW5nbGlzaFwiLFxyXG4gICAgICAgIGNsYXNzOiBcIjExRW4xXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDQ2LFxyXG4gICAgICAgIHVzZXJJZDogMSxcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDcsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJNYXR0aGV3IERvd25zXCIsXHJcbiAgICAgICAgc3ViamVjdDogc3ViamVjdC5yZWcsXHJcbiAgICAgICAgY2xhc3M6IFwiUmVnXCIsXHJcbiAgICAgICAgYnJlYWs6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNDcsXHJcbiAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDEwLCAwLCAwKSksXHJcbiAgICAgICAgdGVhY2hlcjogXCJFZHdhcmQgVGhvbWFzXCIsXHJcbiAgICAgICAgc3ViamVjdDogXCJQaHlzaWNhbCBFZHVjYXRpb25cIixcclxuICAgICAgICBjbGFzczogXCIxMVBlMVwiLFxyXG4gICAgICAgIGJyZWFrOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uW10gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0aXRsZTogXCJIb21ld29yayBPdmVyZHVlXCIsXHJcbiAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgIFwiTWF0aCBIb21ld29yayBkdWU6IFwiICtcclxuICAgICAgICAgIG5leHRXZWVrRnJpZGF5LnRvRGF0ZVN0cmluZygpICtcclxuICAgICAgICAgIFwiIGZvciBNcnMuIFBvdHRzXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvbm90aWZfaG9tZXdvcmsucG5nXCIsXHJcbiAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbiAgICAgICAgZXhwaXJ5RGF0ZTogbmV4dFdlZWtGcmlkYXksXHJcbiAgICAgICAgZGlzcGxheU9uTG9naW46IGZhbHNlLFxyXG4gICAgICAgIHNlZW46IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICB0aXRsZTogXCJMYXRlIFJlZ2lzdHJhdGlvblwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiTGF0ZSBvbiBcIiArIG1vbmRheS50b0RhdGVTdHJpbmcoKSxcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy9ub3RpZl9sYXRlLnBuZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoOCwgMzAsIDApKSxcclxuICAgICAgICBleHBpcnlEYXRlOiB0dWVzZGF5LFxyXG4gICAgICAgIGRpc3BsYXlPbkxvZ2luOiBmYWxzZSxcclxuICAgICAgICBzZWVuOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgdGl0bGU6IFwiVW5hdXRob3JpemVkIEFic2VuY2VcIixcclxuICAgICAgICBtZXNzYWdlOiBcIkFic2VudCBvbiBcIiArIHR1ZXNkYXkudG9EYXRlU3RyaW5nKCksXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvbm90aWZfYWJzZW50LnBuZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuICAgICAgICBleHBpcnlEYXRlOiB3ZWRuZXNkYXksXHJcbiAgICAgICAgZGlzcGxheU9uTG9naW46IGZhbHNlLFxyXG4gICAgICAgIHNlZW46IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICB0aXRsZTogXCJIb21ld29yayBOZWFyIER1ZSBEYXRlXCIsXHJcbiAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgIFwiU2NpZW5jZSBIb21ld29yayBkdWU6IFwiICtcclxuICAgICAgICAgIG5leHRXZWVrTW9uZGF5LnRvRGF0ZVN0cmluZygpICtcclxuICAgICAgICAgIFwiIGZvciBNci4gRml4aXRcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy9ub3RpZl9ob21ld29yay5wbmdcIixcclxuICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuICAgICAgICBleHBpcnlEYXRlOiBuZXh0V2Vla01vbmRheSxcclxuICAgICAgICBkaXNwbGF5T25Mb2dpbjogZmFsc2UsXHJcbiAgICAgICAgc2VlbjogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIHRpdGxlOiBcIk5vbi11bmlmb3JtIERheVwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiTm9uLXVuaWZvcm0gZGF5IG9uIFwiICsgd2VkbmVzZGF5LnRvRGF0ZVN0cmluZygpLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL25vdGlmX25vbi11bmlmb3JtLnBuZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoNywgMCwgMCkpLFxyXG4gICAgICAgIGV4cGlyeURhdGU6IHRodXJzZGF5LFxyXG4gICAgICAgIGRpc3BsYXlPbkxvZ2luOiBmYWxzZSxcclxuICAgICAgICBzZWVuOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgdGl0bGU6IFwiQ2xhc3MgU3VzcGVuc2lvblwiLFxyXG4gICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICBcIlNjaG9vbCBpcyBzaHV0IGJlY2F1c2Ugb2YgdGhlIHR5cGhvb24gb24gXCIgKyB0aHVyc2RheS50b0RhdGVTdHJpbmcoKSxcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy9ub3RpZl9ub2NsYXNzLnBuZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3Vycyg3LCAwLCAwKSksXHJcbiAgICAgICAgZXhwaXJ5RGF0ZTogZnJpZGF5LFxyXG4gICAgICAgIGRpc3BsYXlPbkxvZ2luOiBmYWxzZSxcclxuICAgICAgICBzZWVuOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHBlcmlvZDogUGVyaW9kW10gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcIlIxXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoNywgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3Vycyg4LCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiUjJcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoNywgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoOCwgMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcIlIzXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoNywgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3Vycyg4LCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5hbWU6IFwiUjRcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDcsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3Vycyg4LCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIG5hbWU6IFwiUjVcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3Vycyg3LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDgsIDAsIDApKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgbmFtZTogXCJSNlwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoNywgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDgsIDAsIDApKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGlkOiA3LFxyXG4gICAgICAgIG5hbWU6IFwiUDFcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDksIDAsIDApKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgbmFtZTogXCJQMVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3Vycyg5LCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA5LFxyXG4gICAgICAgIG5hbWU6IFwiUDFcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDksIDAsIDApKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgIG5hbWU6IFwiUDFcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDgsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3Vycyg5LCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxMSxcclxuICAgICAgICBuYW1lOiBcIlAxXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoOCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3Vycyg5LCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxMixcclxuICAgICAgICBuYW1lOiBcIlAxXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3Vycyg4LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoOSwgMCwgMCkpXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEzLFxyXG4gICAgICAgIG5hbWU6IFwiUDJcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3Vycyg5LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDEwLCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxNCxcclxuICAgICAgICBuYW1lOiBcIlAyXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDksIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDEwLCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxNSxcclxuICAgICAgICBuYW1lOiBcIlAyXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxMCwgMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMTYsXHJcbiAgICAgICAgbmFtZTogXCJQMlwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDEwLCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxNyxcclxuICAgICAgICBuYW1lOiBcIlAyXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMCwgMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMTgsXHJcbiAgICAgICAgbmFtZTogXCJQMlwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoOSwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDEwLCAwLCAwKSlcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMTksXHJcbiAgICAgICAgbmFtZTogXCJQM1wiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMSwgMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMjAsXHJcbiAgICAgICAgbmFtZTogXCJQM1wiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMCwgMzAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDExLCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyMSxcclxuICAgICAgICBuYW1lOiBcIlAzXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDExLCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyMixcclxuICAgICAgICBuYW1lOiBcIlAzXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMCwgMzAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMSwgMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMjMsXHJcbiAgICAgICAgbmFtZTogXCJQM1wiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMSwgMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMjQsXHJcbiAgICAgICAgbmFtZTogXCJQM1wiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoMTEsIDAsIDApKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyNSxcclxuICAgICAgICBuYW1lOiBcIlA0XCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTEsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTIsIDAsIDApKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDI2LFxyXG4gICAgICAgIG5hbWU6IFwiUDRcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTEsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDEyLCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyNyxcclxuICAgICAgICBuYW1lOiBcIlA0XCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTEsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTIsIDAsIDApKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDI4LFxyXG4gICAgICAgIG5hbWU6IFwiUDRcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDExLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTIsIDAsIDApKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDI5LFxyXG4gICAgICAgIG5hbWU6IFwiUDRcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMSwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMiwgMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMzAsXHJcbiAgICAgICAgbmFtZTogXCJQNFwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoMTEsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3VycygxMiwgMCwgMCkpXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMxLFxyXG4gICAgICAgIG5hbWU6IFwiUDVcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMywgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxNCwgMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMzIsXHJcbiAgICAgICAgbmFtZTogXCJQNVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxMywgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTQsIDAsIDApKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMzLFxyXG4gICAgICAgIG5hbWU6IFwiUDVcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxMywgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHdlZG5lc2RheS5zZXRIb3VycygxNCwgMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMzQsXHJcbiAgICAgICAgbmFtZTogXCJQNVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTMsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxNCwgMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMzUsXHJcbiAgICAgICAgbmFtZTogXCJQNVwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDEzLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoZnJpZGF5LnNldEhvdXJzKDE0LCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzNixcclxuICAgICAgICBuYW1lOiBcIlA1XCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3VycygxMywgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDE0LCAwLCAwKSlcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMzcsXHJcbiAgICAgICAgbmFtZTogXCJQNlwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUobW9uZGF5LnNldEhvdXJzKDE1LCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzOCxcclxuICAgICAgICBuYW1lOiBcIlA2XCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodHVlc2RheS5zZXRIb3VycygxNSwgMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMzksXHJcbiAgICAgICAgbmFtZTogXCJQNlwiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDE1LCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0MCxcclxuICAgICAgICBuYW1lOiBcIlA2XCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxNCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDE1LCAwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0MSxcclxuICAgICAgICBuYW1lOiBcIlA2XCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTQsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTUsIDAsIDApKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDQyLFxyXG4gICAgICAgIG5hbWU6IFwiUDZcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDE0LCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoMTUsIDAsIDApKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0MyxcclxuICAgICAgICBuYW1lOiBcIk1vcm5pbmcgQnJlYWtcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKG1vbmRheS5zZXRIb3VycygxMCwgMzAsIDApKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDQ0LFxyXG4gICAgICAgIG5hbWU6IFwiQWZ0ZXJub29uIEJyZWFrXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTIsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShtb25kYXkuc2V0SG91cnMoMTMsIDAsIDApKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0NSxcclxuICAgICAgICBuYW1lOiBcIk1vcm5pbmcgQnJlYWtcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNDYsXHJcbiAgICAgICAgbmFtZTogXCJBZnRlcm5vb24gQnJlYWtcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHR1ZXNkYXkuc2V0SG91cnMoMTIsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh0dWVzZGF5LnNldEhvdXJzKDEzLCAwLCAwKSlcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNDcsXHJcbiAgICAgICAgbmFtZTogXCJNb3JuaW5nIEJyZWFrXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTAsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSh3ZWRuZXNkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0OCxcclxuICAgICAgICBuYW1lOiBcIkFmdGVybm9vbiBCcmVha1wiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUod2VkbmVzZGF5LnNldEhvdXJzKDEzLCAwLCAwKSlcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNDksXHJcbiAgICAgICAgbmFtZTogXCJNb3JuaW5nIEJyZWFrXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSh0aHVyc2RheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDEwLCAzMCwgMCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNTAsXHJcbiAgICAgICAgbmFtZTogXCJBZnRlcm5vb24gQnJlYWtcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHRodXJzZGF5LnNldEhvdXJzKDEyLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUodGh1cnNkYXkuc2V0SG91cnMoMTMsIDAsIDApKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1MSxcclxuICAgICAgICBuYW1lOiBcIk1vcm5pbmcgQnJlYWtcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMCwgMCwgMCkpLFxyXG4gICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKGZyaWRheS5zZXRIb3VycygxMCwgMzAsIDApKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDUyLFxyXG4gICAgICAgIG5hbWU6IFwiQWZ0ZXJub29uIEJyZWFrXCIsXHJcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTIsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShmcmlkYXkuc2V0SG91cnMoMTMsIDAsIDApKVxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1MyxcclxuICAgICAgICBuYW1lOiBcIk1vcm5pbmcgQnJlYWtcIixcclxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHNhdHVyZGF5LnNldEhvdXJzKDEwLCAwLCAwKSksXHJcbiAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoMTAsIDMwLCAwKSlcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1NCxcclxuICAgICAgICBuYW1lOiBcIkFmdGVybm9vbiBCcmVha1wiLFxyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoc2F0dXJkYXkuc2V0SG91cnMoMTIsIDAsIDApKSxcclxuICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZShzYXR1cmRheS5zZXRIb3VycygxMywgMCwgMCkpXHJcbiAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgZGF0ZU5vdzEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgdXNlcjogVXNlcltdID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgZm5hbWU6IFwiSmF5XCIsXHJcbiAgICAgICAgbW5hbWU6IFwiXCIsXHJcbiAgICAgICAgbG5hbWU6IFwiU21pdGhcIixcclxuICAgICAgICB1c2VybmFtZTogXCIxXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiMVwiLFxyXG4gICAgICAgIGJpcnRoZGF0ZTogXCIxXCIsXHJcbiAgICAgICAgcGhvbmVwcmltYXJ5OiBcIjkxMjNcIixcclxuICAgICAgICBwaG9uZXNlY29uZGFyeTogXCIwMTIzXCIsXHJcbiAgICAgICAgZW1haWxwcmltYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJqYXlzbWl0aEBlbWFpbC5jb21cIiksXHJcbiAgICAgICAgZW1haWxzZWNvbmRhcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImpheXNtaXRoMkBlbWFpbC5jb21cIiksXHJcbiAgICAgICAgaXNmaXJzdHRpbWU6IGZhbHNlLFxyXG4gICAgICAgIHVzZXJ0eXBlOiBVc2VyVHlwZS5zdHVkZW50LFxyXG4gICAgICAgIGhhc0luY29tcGxldGVIb21ld29yazogdHJ1ZSxcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy9kcDEuanBnXCIsXHJcbiAgICAgICAgbGFzdHB3dXBkYXRlOiBkYXRlTm93MSxcclxuICAgICAgICBsYXN0bG9naW46IGRhdGVOb3cxLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgZm5hbWU6IFwiRW1pbHlcIixcclxuICAgICAgICBtbmFtZTogXCJcIixcclxuICAgICAgICBsbmFtZTogXCJTbWl0aFwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcInN0dWRlbnQxXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIixcclxuICAgICAgICBiaXJ0aGRhdGU6IFwiMDIvMDMvMjAwMVwiLFxyXG4gICAgICAgIHBob25lcHJpbWFyeTogXCI5MjM0XCIsXHJcbiAgICAgICAgcGhvbmVzZWNvbmRhcnk6IFwiXCIsXHJcbiAgICAgICAgZW1haWxwcmltYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJlbWlseXNtaXRoQGVtYWlsLmNvbVwiKSxcclxuICAgICAgICBlbWFpbHNlY29uZGFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiZW1pbHlzbWl0aDJAZW1haWwuY29tXCIpLFxyXG4gICAgICAgIGlzZmlyc3R0aW1lOiB0cnVlLFxyXG4gICAgICAgIHVzZXJ0eXBlOiBVc2VyVHlwZS5zdHVkZW50LFxyXG4gICAgICAgIGhhc0luY29tcGxldGVIb21ld29yazogZmFsc2UsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZHAyLmpwZ1wiLFxyXG4gICAgICAgIGxhc3Rwd3VwZGF0ZTogZGF0ZU5vdzEsXHJcbiAgICAgICAgbGFzdGxvZ2luOiBkYXRlTm93MSxcclxuICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIGZuYW1lOiBcIkdyYWNlXCIsXHJcbiAgICAgICAgbW5hbWU6IFwiXCIsXHJcbiAgICAgICAgbG5hbWU6IFwiU21pdGhcIixcclxuICAgICAgICB1c2VybmFtZTogXCJzdHVkZW50MlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgICAgYmlydGhkYXRlOiBcIjAzLzAzLzE5NzhcIixcclxuICAgICAgICBwaG9uZXByaW1hcnk6IFwiOTM0NVwiLFxyXG4gICAgICAgIHBob25lc2Vjb25kYXJ5OiBcIjAzNDVcIixcclxuICAgICAgICBlbWFpbHByaW1hcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImdyYWNlc21pdGhAZW1haWwuY29tXCIpLFxyXG4gICAgICAgIGVtYWlsc2Vjb25kYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJncmFjZXNtaXRoMkBlbWFpbC5jb21cIiksXHJcbiAgICAgICAgaXNmaXJzdHRpbWU6IGZhbHNlLFxyXG4gICAgICAgIHVzZXJ0eXBlOiBVc2VyVHlwZS5zdHVkZW50LFxyXG4gICAgICAgIGhhc0luY29tcGxldGVIb21ld29yazogZmFsc2UsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZHAzLmpwZ1wiLFxyXG4gICAgICAgIGxhc3Rwd3VwZGF0ZTogZGF0ZU5vdzEsXHJcbiAgICAgICAgbGFzdGxvZ2luOiBkYXRlTm93MSxcclxuICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIGZuYW1lOiBcIkZpbm5cIixcclxuICAgICAgICBtbmFtZTogXCJKb2huc29uXCIsXHJcbiAgICAgICAgbG5hbWU6IFwiV2lsbGlhbXNcIixcclxuICAgICAgICB1c2VybmFtZTogXCJzdHVkZW50M1wiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXHJcbiAgICAgICAgYmlydGhkYXRlOiBcIjA0LzA1LzE5NzVcIixcclxuICAgICAgICBwaG9uZXByaW1hcnk6IFwiOTQ1NlwiLFxyXG4gICAgICAgIHBob25lc2Vjb25kYXJ5OiBcIlwiLFxyXG4gICAgICAgIGVtYWlscHJpbWFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiZmlubndpbGxpYW1zQGVtYWlsLmNvbVwiKSxcclxuICAgICAgICBlbWFpbHNlY29uZGFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiZmlubndpbGxpYW1zMkBlbWFpbC5jb21cIiksXHJcbiAgICAgICAgaXNmaXJzdHRpbWU6IGZhbHNlLFxyXG4gICAgICAgIHVzZXJ0eXBlOiBVc2VyVHlwZS5zdHVkZW50LFxyXG4gICAgICAgIGhhc0luY29tcGxldGVIb21ld29yazogZmFsc2UsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZHA0LmpwZ1wiLFxyXG4gICAgICAgIGxhc3Rwd3VwZGF0ZTogZGF0ZU5vdzEsXHJcbiAgICAgICAgbGFzdGxvZ2luOiBkYXRlTm93MSxcclxuICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIGZuYW1lOiBcIkphc29uXCIsXHJcbiAgICAgICAgbW5hbWU6IFwiXCIsXHJcbiAgICAgICAgbG5hbWU6IFwiU21pdGhcIixcclxuICAgICAgICB1c2VybmFtZTogXCJwYXJlbnRcIixcclxuICAgICAgICBwYXNzd29yZDogXCJwYXJlbnRcIixcclxuICAgICAgICBiaXJ0aGRhdGU6IFwiMVwiLFxyXG4gICAgICAgIHBob25lcHJpbWFyeTogXCI5NTY3XCIsXHJcbiAgICAgICAgcGhvbmVzZWNvbmRhcnk6IFwiMDU2N1wiLFxyXG4gICAgICAgIGVtYWlscHJpbWFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiamFzb25zbWl0aEBlbWFpbC5jb21cIiksXHJcbiAgICAgICAgZW1haWxzZWNvbmRhcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImphc29uc21pdGgyQGVtYWlsLmNvbVwiKSxcclxuICAgICAgICBpc2ZpcnN0dGltZTogZmFsc2UsXHJcbiAgICAgICAgdXNlcnR5cGU6IFVzZXJUeXBlLnBhcmVudCxcclxuICAgICAgICBoYXNJbmNvbXBsZXRlSG9tZXdvcms6IG51bGwsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZHA1LmpwZ1wiLFxyXG4gICAgICAgIGxhc3Rwd3VwZGF0ZTogZGF0ZU5vdzEsXHJcbiAgICAgICAgbGFzdGxvZ2luOiBkYXRlTm93MSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgZm5hbWU6IFwiSmF5XCIsXHJcbiAgICAgICAgICAgIG1uYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBsbmFtZTogXCJTbWl0aFwiLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogXCIxXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIjFcIixcclxuICAgICAgICAgICAgYmlydGhkYXRlOiBcIjFcIixcclxuICAgICAgICAgICAgZW1haWxwcmltYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJqYXlzbWl0aEBlbWFpbC5jb21cIiksXHJcbiAgICAgICAgICAgIGVtYWlsc2Vjb25kYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJqYXlzbWl0aDJAZW1haWwuY29tXCIpLFxyXG4gICAgICAgICAgICBwaG9uZXByaW1hcnk6IFwiOTEyM1wiLFxyXG4gICAgICAgICAgICBwaG9uZXNlY29uZGFyeTogXCIwMTIzXCIsXHJcbiAgICAgICAgICAgIGlzZmlyc3R0aW1lOiBmYWxzZSxcclxuICAgICAgICAgICAgdXNlcnR5cGU6IFVzZXJUeXBlLnN0dWRlbnQsXHJcbiAgICAgICAgICAgIGhhc0luY29tcGxldGVIb21ld29yazogdHJ1ZSxcclxuICAgICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZHAxLmpwZ1wiLFxyXG4gICAgICAgICAgICBsYXN0cHd1cGRhdGU6IGRhdGVOb3cxLFxyXG4gICAgICAgICAgICBsYXN0bG9naW46IGRhdGVOb3cxLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBmbmFtZTogXCJFbWlseVwiLFxyXG4gICAgICAgICAgICBtbmFtZTogXCJcIixcclxuICAgICAgICAgICAgbG5hbWU6IFwiU21pdGhcIixcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwic3R1ZGVudDFcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIixcclxuICAgICAgICAgICAgYmlydGhkYXRlOiBcIjAyLzAzLzIwMDFcIixcclxuICAgICAgICAgICAgcGhvbmVwcmltYXJ5OiBcIjkyMzRcIixcclxuICAgICAgICAgICAgcGhvbmVzZWNvbmRhcnk6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlscHJpbWFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiZW1pbHlzbWl0aEBlbWFpbC5jb21cIiksXHJcbiAgICAgICAgICAgIGVtYWlsc2Vjb25kYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJlbWlseXNtaXRoMkBlbWFpbC5jb21cIiksXHJcbiAgICAgICAgICAgIGlzZmlyc3R0aW1lOiB0cnVlLFxyXG4gICAgICAgICAgICB1c2VydHlwZTogVXNlclR5cGUuc3R1ZGVudCxcclxuICAgICAgICAgICAgaGFzSW5jb21wbGV0ZUhvbWV3b3JrOiBmYWxzZSxcclxuICAgICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZHAyLmpwZ1wiLFxyXG4gICAgICAgICAgICBsYXN0cHd1cGRhdGU6IGRhdGVOb3cxLFxyXG4gICAgICAgICAgICBsYXN0bG9naW46IGRhdGVOb3cxLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICBmbmFtZTogXCJHcmFjZVwiLFxyXG4gICAgICAgICAgICBtbmFtZTogXCJcIixcclxuICAgICAgICAgICAgbG5hbWU6IFwiU21pdGhcIixcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwic3R1ZGVudDJcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIixcclxuICAgICAgICAgICAgYmlydGhkYXRlOiBcIjAzLzAzLzE5NzhcIixcclxuICAgICAgICAgICAgcGhvbmVwcmltYXJ5OiBcIjkzNDVcIixcclxuICAgICAgICAgICAgcGhvbmVzZWNvbmRhcnk6IFwiMDM0NVwiLFxyXG4gICAgICAgICAgICBlbWFpbHByaW1hcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImdyYWNlc21pdGhAZW1haWwuY29tXCIpLFxyXG4gICAgICAgICAgICBlbWFpbHNlY29uZGFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiZ3JhY2VzbWl0aDJAZW1haWwuY29tXCIpLFxyXG4gICAgICAgICAgICBpc2ZpcnN0dGltZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXJ0eXBlOiBVc2VyVHlwZS5zdHVkZW50LFxyXG4gICAgICAgICAgICBoYXNJbmNvbXBsZXRlSG9tZXdvcms6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy9kcDMuanBnXCIsXHJcbiAgICAgICAgICAgIGxhc3Rwd3VwZGF0ZTogZGF0ZU5vdzEsXHJcbiAgICAgICAgICAgIGxhc3Rsb2dpbjogZGF0ZU5vdzEsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA2LFxyXG4gICAgICAgIGZuYW1lOiBcIkJvblwiLFxyXG4gICAgICAgIG1uYW1lOiBcIkpvaG5zb25cIixcclxuICAgICAgICBsbmFtZTogXCJXaWxsaWFtc1wiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcInBhcmVudDFcIixcclxuICAgICAgICBwYXNzd29yZDogXCJwYXJlbnRcIixcclxuICAgICAgICBiaXJ0aGRhdGU6IFwiMDEvMDIvMTk1MFwiLFxyXG4gICAgICAgIHBob25lcHJpbWFyeTogXCI5Njc4XCIsXHJcbiAgICAgICAgcGhvbmVzZWNvbmRhcnk6IFwiXCIsXHJcbiAgICAgICAgZW1haWxwcmltYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJib253aWxsaWFtc0BlbWFpbC5jb21cIiksXHJcbiAgICAgICAgZW1haWxzZWNvbmRhcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImJvbndpbGxpYW1zMkBlbWFpbC5jb21cIiksXHJcbiAgICAgICAgaXNmaXJzdHRpbWU6IHRydWUsXHJcbiAgICAgICAgdXNlcnR5cGU6IFVzZXJUeXBlLnBhcmVudCxcclxuICAgICAgICBoYXNJbmNvbXBsZXRlSG9tZXdvcms6IG51bGwsXHJcbiAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgbGFzdHB3dXBkYXRlOiBkYXRlTm93MSxcclxuICAgICAgICBsYXN0bG9naW46IGRhdGVOb3cxLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBmbmFtZTogXCJGaW5uXCIsXHJcbiAgICAgICAgICAgIG1uYW1lOiBcIkpvaG5zb25cIixcclxuICAgICAgICAgICAgbG5hbWU6IFwiV2lsbGlhbXNcIixcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwic3R1ZGVudDNcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIixcclxuICAgICAgICAgICAgYmlydGhkYXRlOiBcIjA0LzA1LzE5NzVcIixcclxuICAgICAgICAgICAgcGhvbmVwcmltYXJ5OiBcIjk0NTZcIixcclxuICAgICAgICAgICAgcGhvbmVzZWNvbmRhcnk6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlscHJpbWFyeTogZW5jb2RlVVJJQ29tcG9uZW50KFwiZmlubndpbGxpYW1zQGVtYWlsLmNvbVwiKSxcclxuICAgICAgICAgICAgZW1haWxzZWNvbmRhcnk6IGVuY29kZVVSSUNvbXBvbmVudChcImZpbm53aWxsaWFtczJAZW1haWwuY29tXCIpLFxyXG4gICAgICAgICAgICBpc2ZpcnN0dGltZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXJ0eXBlOiBVc2VyVHlwZS5zdHVkZW50LFxyXG4gICAgICAgICAgICBoYXNJbmNvbXBsZXRlSG9tZXdvcms6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy9kcDQuanBnXCIsXHJcbiAgICAgICAgICAgIGxhc3Rwd3VwZGF0ZTogZGF0ZU5vdzEsXHJcbiAgICAgICAgICAgIGxhc3Rsb2dpbjogZGF0ZU5vdzEsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA3LFxyXG4gICAgICAgIGZuYW1lOiBcIk1hcmlhXCIsXHJcbiAgICAgICAgbW5hbWU6IFwiXCIsXHJcbiAgICAgICAgbG5hbWU6IFwiQnJvd25cIixcclxuICAgICAgICB1c2VybmFtZTogXCJwYXJlbnQyXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwicGFyZW50XCIsXHJcbiAgICAgICAgYmlydGhkYXRlOiBcIjAyLzAxLzE5NTBcIixcclxuICAgICAgICBwaG9uZXByaW1hcnk6IFwiOTc4OVwiLFxyXG4gICAgICAgIHBob25lc2Vjb25kYXJ5OiBcIjA3ODlcIixcclxuICAgICAgICBlbWFpbHByaW1hcnk6IGVuY29kZVVSSUNvbXBvbmVudChcIm1hcmlhYnJvd25AZW1haWwuY29tXCIpLFxyXG4gICAgICAgIGVtYWlsc2Vjb25kYXJ5OiBlbmNvZGVVUklDb21wb25lbnQoXCJtYXJpYWJyb3duMkBlbWFpbC5jb21cIiksXHJcbiAgICAgICAgaXNmaXJzdHRpbWU6IGZhbHNlLFxyXG4gICAgICAgIHVzZXJ0eXBlOiBVc2VyVHlwZS5wYXJlbnQsXHJcbiAgICAgICAgaGFzSW5jb21wbGV0ZUhvbWV3b3JrOiBudWxsLFxyXG4gICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgIGxhc3Rwd3VwZGF0ZTogZGF0ZU5vdzEsXHJcbiAgICAgICAgbGFzdGxvZ2luOiBkYXRlTm93MSxcclxuICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhY2hpZXZlbWVudCxcclxuICAgICAgYWR2ZXJ0LFxyXG4gICAgICBhdHRlbmRhbmNlLFxyXG4gICAgICBiZWhhdmlvdXIsXHJcbiAgICAgIGNvbnRhY3RkZXRhaWwsXHJcbiAgICAgIGhvbWV3b3JrLFxyXG4gICAgICBsZXNzb24sXHJcbiAgICAgIG5vdGlmaWNhdGlvbixcclxuICAgICAgcGVyaW9kLFxyXG4gICAgICB1c2VyXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=