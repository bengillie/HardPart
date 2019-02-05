"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var account_security_component_1 = require("./account-security/account-security.component");
var achievement_component_1 = require("~/achievement/achievement.component");
var advert_component_1 = require("~/advert/advert.component");
var attendance_component_1 = require("~/attendance/attendance.component");
var behaviour_component_1 = require("~/behaviour/behaviour.component");
var contactus_component_1 = require("./contactus/contactus.component");
var contactus_form_component_1 = require("./contactus-form/contactus-form.component");
var dashboard_component_1 = require("~/dashboard/dashboard.component");
var forgot_password_component_1 = require("~/forgot-password/forgot-password.component");
var homework_component_1 = require("./homework/homework.component");
var homework_detail_component_1 = require("./homework-detail/homework-detail.component");
var login_component_1 = require("./login/login.component");
var message_page_component_1 = require("./message-page/message-page.component");
var navigationbar_component_1 = require("~/navigationbar/navigationbar.component");
var notification_component_1 = require("~/notification/notification.component");
var notification_login_component_1 = require("~/notification-login/notification-login.component");
var student_selection_component_1 = require("./student-selection/student-selection.component");
var timetable_component_1 = require("./timetable/timetable.component");
var update_security_details_component_1 = require("./update-security-details/update-security-details.component");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "accountsecurity", component: account_security_component_1.AccountSecurityComponent },
    { path: "achievement", component: achievement_component_1.AchievementComponent },
    { path: "advert", component: advert_component_1.AdvertComponent },
    { path: "attendance", component: attendance_component_1.AttendanceComponent },
    { path: "behaviour", component: behaviour_component_1.BehaviourComponent },
    { path: "contactus", component: contactus_component_1.ContactUsComponent },
    { path: "contactusform", component: contactus_form_component_1.ContactusFormComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "forgotpassword", component: forgot_password_component_1.ForgotPasswordComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "homework", component: homework_component_1.HomeworkComponent },
    { path: "homeworkdetails/:id", component: homework_detail_component_1.HomeworkDetailComponent },
    { path: "messagepage", component: message_page_component_1.MessagePageComponent },
    { path: "navigationbar", component: navigationbar_component_1.NavigationBarComponent },
    { path: "notification", component: notification_component_1.NotificationComponent },
    { path: "notificationlogin", component: notification_login_component_1.NotificationLoginComponent },
    { path: "studentselection", component: student_selection_component_1.StudentSelectionComponent },
    { path: "timetable", component: timetable_component_1.TimetableComponent },
    { path: "updatesecuritydetails", component: update_security_details_component_1.UpdateSecurityDetailsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            exports: [router_1.NativeScriptRouterModule],
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
