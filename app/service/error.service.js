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
