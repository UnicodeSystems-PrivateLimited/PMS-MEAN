System.register(['angular2/core', '../../project/cmps/project', '../../user/cmps/user', '../../user/cmps/calendar', '../../user/cmps/email', '../../common/services/grid_data', 'angular2/http', 'angular2/router', '../../dashboard/cmps/dashboard', './auto_boat', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, project_1, user_1, calendar_1, email_1, grid_data_1, http_1, router_1, dashboard_1, auto_boat_1, common_1;
    var LayoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (project_1_1) {
                project_1 = project_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (calendar_1_1) {
                calendar_1 = calendar_1_1;
            },
            function (email_1_1) {
                email_1 = email_1_1;
            },
            function (grid_data_1_1) {
                grid_data_1 = grid_data_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (auto_boat_1_1) {
                auto_boat_1 = auto_boat_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            LayoutComponent = (function () {
                function LayoutComponent(router, location, dataService) {
                    this.chatOpen = false;
                    this._profileUrl = '/api/user/profile/minimal';
                    this.router = router;
                    this.location = location;
                    this.dataService = dataService;
                }
                LayoutComponent.prototype.getLinkStyle = function (path) {
                    // console.log("Path:"+this.location.path());
                    return this.location.path() === path;
                };
                LayoutComponent.prototype.ngOnInit = function () {
                    this.getProfile();
                };
                LayoutComponent.prototype.getProfile = function () {
                    var _this = this;
                    this.dataService.getData(this._profileUrl).subscribe(function (user) { _this.user = user; console.log("Current User:" + JSON.stringify(user)); });
                };
                LayoutComponent.prototype.mytoggle = function (newstate) {
                    this.chatOpen = newstate;
                };
                LayoutComponent = __decorate([
                    core_1.Component({
                        selector: "layout",
                        templateUrl: 'partials/page/layout',
                        providers: [http_1.HTTP_PROVIDERS, grid_data_1.GridDataService],
                        directives: [router_1.RouterOutlet, router_1.RouterLink, auto_boat_1.AutoBoatComponent, router_1.ROUTER_DIRECTIVES, common_1.NgClass]
                    }),
                    router_1.RouteConfig([
                        { path: '/dashboard', component: dashboard_1.DashboardComponent, name: 'Dashboard', useAsDefault: true },
                        { path: '/projects', component: project_1.ProjectListComponent, name: 'Project.list' },
                        { path: '/project/:id', component: project_1.ProjectDetailComponent, name: 'Project.detail' },
                        { path: '/project/add', component: project_1.ProjectAddComponent, name: 'Project.add' },
                        // { path: '/login', component: UserLoginComponent, name: 'User.login' },
                        { path: '/logout', component: user_1.UserLogoutComponent, name: 'User.logout' },
                        { path: '/users', component: user_1.UserListComponent, name: 'User.list' },
                        { path: '/user/profile', component: user_1.UserProfileComponent, name: 'User.profile' },
                        { path: '/user/:id', component: user_1.UserDetailComponent, name: 'User.detail' },
                        { path: '/calendar', component: calendar_1.CalendarMainComponent, name: 'Calendar.main' },
                        { path: '/emails', component: email_1.EmailListComponent, name: 'Email.list' },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.Location, grid_data_1.GridDataService])
                ], LayoutComponent);
                return LayoutComponent;
            })();
            exports_1("LayoutComponent", LayoutComponent);
        }
    }
});
