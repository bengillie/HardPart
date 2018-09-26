"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Break;
(function (Break) {
    Break["amBreak"] = "Morning Break";
    Break["pmBreak"] = "Afternoon Break";
})(Break = exports.Break || (exports.Break = {}));
var Lesson = /** @class */ (function () {
    function Lesson() {
    }
    return Lesson;
}());
exports.Lesson = Lesson;
var Period = /** @class */ (function () {
    function Period() {
    }
    return Period;
}());
exports.Period = Period;
var Subject;
(function (Subject) {
    Subject["art"] = "Art and Design";
    Subject["computing"] = "Computing";
    Subject["design"] = "Design and Technology";
    Subject["english"] = "English";
    Subject["geography"] = "Geography";
    Subject["history"] = "History";
    Subject["languages"] = "Languages";
    Subject["math"] = "Mathematics";
    Subject["music"] = "Music";
    Subject["pe"] = "Physical Education";
    Subject["reg"] = "Registration";
    Subject["science"] = "Science";
})(Subject = exports.Subject || (exports.Subject = {}));
var TimetableTab = /** @class */ (function () {
    function TimetableTab() {
    }
    return TimetableTab;
}());
exports.TimetableTab = TimetableTab;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGltZXRhYmxlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBWSxLQUdYO0FBSEQsV0FBWSxLQUFLO0lBQ2Isa0NBQXlCLENBQUE7SUFDekIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUhXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQUdoQjtBQUVEO0lBQUE7SUFRQSxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksd0JBQU07QUFVbkI7SUFBQTtJQUtBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSx3QkFBTTtBQU9uQixJQUFZLE9BYVg7QUFiRCxXQUFZLE9BQU87SUFDZixpQ0FBc0IsQ0FBQTtJQUN0QixrQ0FBdUIsQ0FBQTtJQUN2QiwyQ0FBZ0MsQ0FBQTtJQUNoQyw4QkFBbUIsQ0FBQTtJQUNuQixrQ0FBdUIsQ0FBQTtJQUN2Qiw4QkFBbUIsQ0FBQTtJQUNuQixrQ0FBdUIsQ0FBQTtJQUN2QiwrQkFBb0IsQ0FBQTtJQUNwQiwwQkFBZSxDQUFBO0lBQ2Ysb0NBQXlCLENBQUE7SUFDekIsK0JBQW9CLENBQUE7SUFDcEIsOEJBQW1CLENBQUE7QUFDdkIsQ0FBQyxFQWJXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQWFsQjtBQUVEO0lBQUE7SUFHQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQnJlYWsge1xyXG4gICAgYW1CcmVhayA9IFwiTW9ybmluZyBCcmVha1wiLFxyXG4gICAgcG1CcmVhayA9IFwiQWZ0ZXJub29uIEJyZWFrXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExlc3NvbiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdXNlcklkOiBudW1iZXI7XHJcbiAgICBzdGFydERhdGU6IERhdGU7XHJcbiAgICBlbmREYXRlOiBEYXRlO1xyXG4gICAgdGVhY2hlcjogc3RyaW5nO1xyXG4gICAgc3ViamVjdDogc3RyaW5nO1xyXG4gICAgY2xhc3M6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmlvZCB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc3RhcnREYXRlOiBEYXRlO1xyXG4gICAgZW5kRGF0ZTogRGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3ViamVjdCB7XHJcbiAgICBhcnQgPSBcIkFydCBhbmQgRGVzaWduXCIsXHJcbiAgICBjb21wdXRpbmcgPSBcIkNvbXB1dGluZ1wiLFxyXG4gICAgZGVzaWduID0gXCJEZXNpZ24gYW5kIFRlY2hub2xvZ3lcIixcclxuICAgIGVuZ2xpc2ggPSBcIkVuZ2xpc2hcIixcclxuICAgIGdlb2dyYXBoeSA9IFwiR2VvZ3JhcGh5XCIsXHJcbiAgICBoaXN0b3J5ID0gXCJIaXN0b3J5XCIsXHJcbiAgICBsYW5ndWFnZXMgPSBcIkxhbmd1YWdlc1wiLFxyXG4gICAgbWF0aCA9IFwiTWF0aGVtYXRpY3NcIixcclxuICAgIG11c2ljID0gXCJNdXNpY1wiLFxyXG4gICAgcGUgPSBcIlBoeXNpY2FsIEVkdWNhdGlvblwiLFxyXG4gICAgcmVnID0gXCJSZWdpc3RyYXRpb25cIixcclxuICAgIHNjaWVuY2UgPSBcIlNjaWVuY2VcIiwgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1ldGFibGVUYWIge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGxlc3NvbnM6IExlc3NvbltdO1xyXG59ICJdfQ==