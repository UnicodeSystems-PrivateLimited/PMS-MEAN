System.register(['angular2/core', 'angular2/router', '../../common/services/grid_data', 'angular2/http', './layout', '../../user/cmps/user'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, grid_data_1, http_1, layout_1, user_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (grid_data_1_1) {
                grid_data_1 = grid_data_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (layout_1_1) {
                layout_1 = layout_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(dataService, router) {
                    this.dataService = dataService;
                    this._dataUrl = '/api/ping';
                    this._router = router;
                    console.log("We are up and running!");
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.ping();
                };
                AppComponent.prototype.ping = function () {
                    var _this = this;
                    this.dataService.getData(this._dataUrl).subscribe(function (res) { if (res.status === 0) {
                        _this._router.navigate(['/User.login']);
                    } });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pms-app',
                        template: '<router-outlet></router-outlet>',
                        providers: [http_1.HTTP_PROVIDERS, grid_data_1.GridDataService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/app/...', component: layout_1.LayoutComponent, name: 'Layout', useAsDefault: true },
                        { path: '/login', component: user_1.UserLoginComponent, name: 'User.login' },
                        { path: '/register', component: user_1.UserRegisterComponent, name: 'User.register' },
                        { path: '/logout', component: user_1.UserLogoutComponent, name: 'User.logout' },
                    ]), 
                    __metadata('design:paramtypes', [grid_data_1.GridDataService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
