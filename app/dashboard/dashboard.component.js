"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dashboard_model_1 = require("~/model/dashboard.model");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.subscriptions = [];
        this.menuName = dashboard_model_1.MenuList;
        this.icon = "";
        this.menuList = [];
        this.isLoading = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getMenuList();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions) {
            for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
                var subscription = _a[_i];
                subscription.unsubscribe();
            }
        }
    };
    DashboardComponent.prototype.getMenuList = function () {
        this.menuList = [
            {
                "name": this.menuName.homework,
                "icon": this.icon = String.fromCharCode(0xe91f),
            }, {
                "name": this.menuName.timetable,
                "icon": this.icon = String.fromCharCode(0xea71),
            }, {
                "name": this.menuName.attendance,
                "icon": this.icon = String.fromCharCode(0xe923),
            }, {
                "name": this.menuName.achievement,
                "icon": this.icon = String.fromCharCode(0xe99e),
            }, {
                "name": this.menuName.behaviour,
                "icon": this.icon = String.fromCharCode(0xe9df),
            }, {
                "name": this.menuName.contact,
                "icon": this.icon = String.fromCharCode(0xea84),
            },
        ];
    };
    DashboardComponent.prototype.onTapList = function (name) {
        switch (name) {
            case this.menuName.homework: {
                this.router.navigate(["homework"]);
                break;
            }
            case this.menuName.timetable: {
                this.router.navigate(["timetable"]);
                break;
            }
            case this.menuName.attendance: {
                this.router.navigate(["attendance"]);
                break;
            }
            case this.menuName.achievement: {
                this.router.navigate(["achievement"]);
                break;
            }
            case this.menuName.behaviour: {
                //this.router.navigate([`behaviour`]);
                break;
            }
            case this.menuName.contact: {
                //this.router.navigate([`contact`]);
                break;
            }
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.less']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUY7QUFDbkYsc0RBQThEO0FBRzlELDJEQUFtRDtBQVFuRDtJQVNJLDRCQUNZLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBVDVCLGtCQUFhLEdBQW9CLEVBQUUsQ0FBQztRQUNwQyxhQUFRLEdBQUcsMEJBQVEsQ0FBQztRQUU1QixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFHdUIsQ0FBQztJQUV6QyxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDckIsR0FBRyxDQUFDLENBQXFCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLGFBQWEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0I7Z0JBQXRDLElBQUksWUFBWSxTQUFBO2dCQUVqQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDOUI7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ1o7Z0JBQ0ksTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtnQkFDOUIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7YUFDbEQsRUFBRTtnQkFDQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTO2dCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQzthQUNsRCxFQUFFO2dCQUNDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVU7Z0JBQ2hDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO2FBQ2xELEVBQUU7Z0JBQ0MsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVztnQkFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7YUFDbEQsRUFBRTtnQkFDQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTO2dCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQzthQUNsRCxFQUFFO2dCQUNDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Z0JBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO2FBQ2xEO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsSUFBWTtRQUNsQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1gsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLEtBQUssQ0FBQztZQUNWLENBQUM7WUFDRCxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDO1lBQ1YsQ0FBQztZQUNELEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxLQUFLLENBQUM7WUFDVixDQUFDO1lBQ0QsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQztZQUNWLENBQUM7WUFDRCxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNCLHNDQUFzQztnQkFDdEMsS0FBSyxDQUFDO1lBQ1YsQ0FBQztZQUNELEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekIsb0NBQW9DO2dCQUNwQyxLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUE1RVEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQVdzQix5QkFBZ0I7T0FWM0Isa0JBQWtCLENBNkU5QjtJQUFELHlCQUFDO0NBQUEsQUE3RUQsSUE2RUM7QUE3RVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBNZW51TGlzdCB9IGZyb20gJ34vbW9kZWwvZGFzaGJvYXJkLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbnMtZGFzaGJvYXJkJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgICBwcml2YXRlIG1lbnVOYW1lID0gTWVudUxpc3Q7XHJcbiAgICBcclxuICAgIGljb24gPSBcIlwiO1xyXG4gICAgbWVudUxpc3QgPSBbXTtcclxuICAgIFxyXG4gICAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0TWVudUxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1lbnVMaXN0KCkge1xyXG4gICAgICAgIHRoaXMubWVudUxpc3QgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLm1lbnVOYW1lLmhvbWV3b3JrLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOTFmKSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVudU5hbWUudGltZXRhYmxlLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlYTcxKSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVudU5hbWUuYXR0ZW5kYW5jZSxcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiB0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTkyMyksXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLm1lbnVOYW1lLmFjaGlldmVtZW50LFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOTllKSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVudU5hbWUuYmVoYXZpb3VyLFxyXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOWRmKSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMubWVudU5hbWUuY29udGFjdCxcclxuICAgICAgICAgICAgICAgIFwiaWNvblwiOiB0aGlzLmljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZWE4NCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBvblRhcExpc3QobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS5ob21ld29yazoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Bob21ld29ya2BdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS50aW1ldGFibGU6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgdGltZXRhYmxlYF0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0aGlzLm1lbnVOYW1lLmF0dGVuZGFuY2U6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgYXR0ZW5kYW5jZWBdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS5hY2hpZXZlbWVudDoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2BhY2hpZXZlbWVudGBdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5tZW51TmFtZS5iZWhhdmlvdXI6IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2BiZWhhdmlvdXJgXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMubWVudU5hbWUuY29udGFjdDoge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbYGNvbnRhY3RgXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=