"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var Break;
(function (Break) {
    Break["amBreak"] = "Morning Break";
    Break["pmBreak"] = "Afternoon Break";
})(Break = exports.Break || (exports.Break = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXRhYmxlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGltZXRhYmxlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQVFBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSx3QkFBTTtBQVVuQjtJQUFBO0lBS0EsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLHdCQUFNO0FBT25CLElBQVksT0FhWDtBQWJELFdBQVksT0FBTztJQUNmLGlDQUFzQixDQUFBO0lBQ3RCLGtDQUF1QixDQUFBO0lBQ3ZCLDJDQUFnQyxDQUFBO0lBQ2hDLDhCQUFtQixDQUFBO0lBQ25CLGtDQUF1QixDQUFBO0lBQ3ZCLDhCQUFtQixDQUFBO0lBQ25CLGtDQUF1QixDQUFBO0lBQ3ZCLCtCQUFvQixDQUFBO0lBQ3BCLDBCQUFlLENBQUE7SUFDZixvQ0FBeUIsQ0FBQTtJQUN6QiwrQkFBb0IsQ0FBQTtJQUNwQiw4QkFBbUIsQ0FBQTtBQUN2QixDQUFDLEVBYlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBYWxCO0FBRUQsSUFBWSxLQUdYO0FBSEQsV0FBWSxLQUFLO0lBQ2Isa0NBQXlCLENBQUE7SUFDekIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUhXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQUdoQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMZXNzb24ge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHVzZXJJZDogbnVtYmVyO1xyXG4gICAgc3RhcnREYXRlOiBEYXRlO1xyXG4gICAgZW5kRGF0ZTogRGF0ZTtcclxuICAgIHRlYWNoZXI6IHN0cmluZztcclxuICAgIHN1YmplY3Q6IHN0cmluZztcclxuICAgIGNsYXNzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJpb2Qge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHN0YXJ0RGF0ZTogRGF0ZTtcclxuICAgIGVuZERhdGU6IERhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFN1YmplY3Qge1xyXG4gICAgYXJ0ID0gXCJBcnQgYW5kIERlc2lnblwiLFxyXG4gICAgY29tcHV0aW5nID0gXCJDb21wdXRpbmdcIixcclxuICAgIGRlc2lnbiA9IFwiRGVzaWduIGFuZCBUZWNobm9sb2d5XCIsXHJcbiAgICBlbmdsaXNoID0gXCJFbmdsaXNoXCIsXHJcbiAgICBnZW9ncmFwaHkgPSBcIkdlb2dyYXBoeVwiLFxyXG4gICAgaGlzdG9yeSA9IFwiSGlzdG9yeVwiLFxyXG4gICAgbGFuZ3VhZ2VzID0gXCJMYW5ndWFnZXNcIixcclxuICAgIG1hdGggPSBcIk1hdGhlbWF0aWNzXCIsXHJcbiAgICBtdXNpYyA9IFwiTXVzaWNcIixcclxuICAgIHBlID0gXCJQaHlzaWNhbCBFZHVjYXRpb25cIixcclxuICAgIHJlZyA9IFwiUmVnaXN0cmF0aW9uXCIsXHJcbiAgICBzY2llbmNlID0gXCJTY2llbmNlXCIsIFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCcmVhayB7XHJcbiAgICBhbUJyZWFrID0gXCJNb3JuaW5nIEJyZWFrXCIsXHJcbiAgICBwbUJyZWFrID0gXCJBZnRlcm5vb24gQnJlYWtcIlxyXG59Il19