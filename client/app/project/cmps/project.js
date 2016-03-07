System.register(['angular2/core', '../../common/services/grid_data', 'angular2/router', '../models/project', './todo', './member', './task', './file', './timeline'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, grid_data_1, router_1, project_1, todo_1, member_1, task_1, file_1, timeline_1;
    var ProjectListComponent, ProjectDetailComponent, ProjectAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grid_data_1_1) {
                grid_data_1 = grid_data_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (project_1_1) {
                project_1 = project_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (member_1_1) {
                member_1 = member_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            },
            function (file_1_1) {
                file_1 = file_1_1;
            },
            function (timeline_1_1) {
                timeline_1 = timeline_1_1;
            }],
        execute: function() {
            ProjectListComponent = (function () {
                function ProjectListComponent(dataService) {
                    this.dataService = dataService;
                    this._dataUrl = '/api/project';
                }
                ProjectListComponent.prototype.ngOnInit = function () {
                    this.getProjects();
                };
                ProjectListComponent.prototype.getProjects = function () {
                    var _this = this;
                    this.dataService.getData(this._dataUrl).subscribe(function (projects) { return _this.projects = projects; });
                };
                ProjectListComponent = __decorate([
                    core_1.Component({
                        selector: 'data-list',
                        templateUrl: 'partials/project/list',
                        directives: [router_1.RouterOutlet, router_1.RouterLink, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [grid_data_1.GridDataService])
                ], ProjectListComponent);
                return ProjectListComponent;
            })();
            exports_1("ProjectListComponent", ProjectListComponent);
            ProjectDetailComponent = (function () {
                function ProjectDetailComponent(dataService, routeParam) {
                    this.dataService = dataService;
                    this.routeParam = routeParam;
                    this._dataUrl = '/api/project';
                    // console.log("ID"+JSON.stringify(routeParam.params));
                }
                ProjectDetailComponent.prototype.ngOnInit = function () {
                    var params = this.routeParam.params;
                    if (params['id']) {
                        var pId = params['id'];
                        this.getProjectDetail(pId);
                    }
                };
                ProjectDetailComponent.prototype.getProjectDetail = function (id) {
                    var _this = this;
                    this.dataService.getData(this._dataUrl + "/" + id).subscribe(function (project) { return _this.project = project; });
                };
                ProjectDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'data-detail',
                        templateUrl: 'partials/project/detail',
                        // template:'<p *ngIf="project">Project:{{project.name}}</p>',
                        //providers: [TodoComponent],
                        directives: [todo_1.TodoComponent, member_1.MemberComponent, task_1.TaskComponent, file_1.FileComponent, timeline_1.TimelineComponent]
                    }), 
                    __metadata('design:paramtypes', [grid_data_1.GridDataService, router_1.RouteParams])
                ], ProjectDetailComponent);
                return ProjectDetailComponent;
            })();
            exports_1("ProjectDetailComponent", ProjectDetailComponent);
            ProjectAddComponent = (function () {
                function ProjectAddComponent(dataService, router) {
                    this.dataService = dataService;
                    this.addUrl = '/api/project/add';
                    // private project=new Project(10,'MySpaceNYC','A Zoho project');
                    this.project = new project_1.Project();
                    this.submitted = false;
                    this._router = router;
                }
                ProjectAddComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    this.addProject();
                };
                ProjectAddComponent.prototype.addProject = function () {
                    var _this = this;
                    this.dataService.postData(this.addUrl, this.project)
                        .subscribe(function (project) { console.log("Saved:" + JSON.stringify(project)); _this._router.parent.navigate(['./Project.list']); });
                };
                Object.defineProperty(ProjectAddComponent.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.project); },
                    enumerable: true,
                    configurable: true
                });
                ProjectAddComponent = __decorate([
                    core_1.Component({
                        selector: 'data-form',
                        templateUrl: 'partials/project/add'
                    }), 
                    __metadata('design:paramtypes', [grid_data_1.GridDataService, router_1.Router])
                ], ProjectAddComponent);
                return ProjectAddComponent;
            })();
            exports_1("ProjectAddComponent", ProjectAddComponent);
        }
    }
});
