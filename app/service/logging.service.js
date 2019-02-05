"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoggingService = /** @class */ (function () {
    function LoggingService() {
    }
    LoggingService.prototype.log = function (message) {
        console.log(message);
    };
    LoggingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LoggingService);
    return LoggingService;
}());
exports.LoggingService = LoggingService;
