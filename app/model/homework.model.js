"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Homework = /** @class */ (function () {
    function Homework() {
    }
    return Homework;
}());
exports.Homework = Homework;
var HomeworkDeadlineStatus;
(function (HomeworkDeadlineStatus) {
    HomeworkDeadlineStatus["good"] = "good";
    HomeworkDeadlineStatus["nearDueDate"] = "nearDueDate";
    HomeworkDeadlineStatus["overDue"] = "overDue";
})(HomeworkDeadlineStatus = exports.HomeworkDeadlineStatus || (exports.HomeworkDeadlineStatus = {}));
var HomeworkStatus;
(function (HomeworkStatus) {
    HomeworkStatus["todo"] = "TODO";
    HomeworkStatus["done"] = "DONE";
    HomeworkStatus["removed"] = "REMOVED";
})(HomeworkStatus = exports.HomeworkStatus || (exports.HomeworkStatus = {}));
