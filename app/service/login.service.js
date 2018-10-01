"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var httpservice_service_1 = require("../service/httpservice.service");
var LoginService = /** @class */ (function () {
    function LoginService(httpService) {
        this.httpService = httpService;
    }
    LoginService.prototype.getUser = function (login) {
        return this.httpService.getUser(login);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [httpservice_service_1.HttpService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0Msc0VBQTZEO0FBRzdEO0lBQ0ksc0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCw4QkFBTyxHQUFQLFVBQVEsS0FBVztRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBTFEsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUV3QixpQ0FBVztPQURuQyxZQUFZLENBTXhCO0lBQUQsbUJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbC91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2h0dHBzZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBnZXRVc2VyKGxvZ2luOiBVc2VyKTogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0VXNlcihsb2dpbik7XHJcbiAgICB9XHJcbn1cclxuIl19