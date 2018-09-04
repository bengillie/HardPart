"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ErrorService = /** @class */ (function () {
    function ErrorService() {
    }
    ErrorService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            _this.logService.log(operation + " failed: " + error.message);
            return rxjs_1.of(result);
        };
    };
    ErrorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());
exports.ErrorService = ErrorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVycm9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQXNDO0FBS3RDO0lBRUk7SUFBZ0IsQ0FBQztJQUVqQixrQ0FBVyxHQUFYLFVBQWdCLFNBQXVCLEVBQUUsTUFBVTtRQUFuRCxpQkFNQztRQU5lLDBCQUFBLEVBQUEsdUJBQXVCO1FBQ25DLE1BQU0sQ0FBQyxVQUFDLEtBQVU7WUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBSSxTQUFTLGlCQUFZLEtBQUssQ0FBQyxPQUFTLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsU0FBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFWUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQVd4QjtJQUFELG1CQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSB9IGZyb20gXCIuL2xvZ2dpbmcuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGxvZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgXG4gICAgaGFuZGxlRXJyb3I8VD4gKG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIHRoaXMubG9nU2VydmljZS5sb2coYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICByZXR1cm4gb2YocmVzdWx0IGFzIFQpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==