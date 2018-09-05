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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVycm9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQXNDO0FBS3RDO0lBRUk7SUFBZ0IsQ0FBQztJQUVqQixrQ0FBVyxHQUFYLFVBQWdCLFNBQXVCLEVBQUUsTUFBVTtRQUFuRCxpQkFNQztRQU5lLDBCQUFBLEVBQUEsdUJBQXVCO1FBQ25DLE1BQU0sQ0FBQyxVQUFDLEtBQVU7WUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBSSxTQUFTLGlCQUFZLEtBQUssQ0FBQyxPQUFTLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsU0FBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFWUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQVd4QjtJQUFELG1CQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBMb2dnaW5nU2VydmljZSB9IGZyb20gXCIuL2xvZ2dpbmcuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXJyb3JTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9nU2VydmljZTogTG9nZ2luZ1NlcnZpY2U7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVFcnJvcjxUPiAob3BlcmF0aW9uID0gJ29wZXJhdGlvbicsIHJlc3VsdD86IFQpIHtcclxuICAgICAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5sb2dTZXJ2aWNlLmxvZyhgJHtvcGVyYXRpb259IGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==