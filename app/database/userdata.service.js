"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserdataService = /** @class */ (function () {
    function UserdataService() {
    }
    UserdataService.prototype.createDb = function () {
        var users = [
            { id: 1, username: 'student1', password: 'password', usertype: 0 },
            { id: 2, username: 'student2', password: 'password', usertype: 0 },
            { id: 3, username: 'parent1', password: 'password', usertype: 1 },
            { id: 4, username: 'parent2', password: 'password', usertype: 1 },
        ];
        return { users: users };
    };
    return UserdataService;
}());
exports.UserdataService = UserdataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJkYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUFBO0lBVUEsQ0FBQztJQVRDLGtDQUFRLEdBQVI7UUFDRSxJQUFNLEtBQUssR0FBRztZQUNaLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUNsRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7WUFDbEUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1lBQ2pFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtTQUNsRSxDQUFDO1FBQ0YsTUFBTSxDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5NZW1vcnlEYlNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuZXhwb3J0IGNsYXNzIFVzZXJkYXRhU2VydmljZSBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlIHtcbiAgY3JlYXRlRGIoKSB7XG4gICAgY29uc3QgdXNlcnMgPSBbXG4gICAgICB7IGlkOiAxLCB1c2VybmFtZTogJ3N0dWRlbnQxJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcsIHVzZXJ0eXBlOiAwIH0sXG4gICAgICB7IGlkOiAyLCB1c2VybmFtZTogJ3N0dWRlbnQyJywgcGFzc3dvcmQ6ICdwYXNzd29yZCcsIHVzZXJ0eXBlOiAwIH0sXG4gICAgICB7IGlkOiAzLCB1c2VybmFtZTogJ3BhcmVudDEnLCBwYXNzd29yZDogJ3Bhc3N3b3JkJywgdXNlcnR5cGU6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHVzZXJuYW1lOiAncGFyZW50MicsIHBhc3N3b3JkOiAncGFzc3dvcmQnLCB1c2VydHlwZTogMSB9LFxuICAgIF07XG4gICAgcmV0dXJuIHt1c2Vyc307XG4gIH1cbn1cbiJdfQ==