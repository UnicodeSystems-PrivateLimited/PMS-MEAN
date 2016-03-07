System.register(["angular2/core", '../../common/services/grid_data', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, grid_data_1, common_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grid_data_1_1) {
                grid_data_1 = grid_data_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent(dataService) {
                    this.dataService = dataService;
                    this._listUrl = "/api/todo/pid/";
                    this._addUrl = "/api/todo/add";
                    this.newTodo = { title: "" };
                    this.submitted = false;
                    this.isOpen = false;
                }
                TodoComponent.prototype.ngOnInit = function () {
                    this.newTodo["project_id"] = this.pId;
                    this.getTodos();
                };
                TodoComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    this.addTodo();
                };
                TodoComponent.prototype.getTodos = function () {
                    var _this = this;
                    this.dataService.getData(this._listUrl + this.pId).subscribe(function (todos) { _this.todos = todos; console.log("Todos:" + JSON.stringify(todos)); });
                };
                TodoComponent.prototype.addTodo = function () {
                    var _this = this;
                    console.log("Adding Todo:" + JSON.stringify(this.newTodo));
                    this.dataService.postData(this._addUrl, this.newTodo)
                        .subscribe(function (res) {
                        if (res.status === 1) {
                            _this.newTodo.title = "";
                            _this.todos.unshift(res.data);
                        }
                        else {
                            console.log("Something wrong:" + res.msg);
                        }
                    });
                };
                TodoComponent.prototype.addtodoForm = function (newState) {
                    this.isOpen = newState;
                };
                // jQuery-utility
                TodoComponent.prototype.myaccord = function (e) {
                    $(e.target).parent().siblings('.box-body').slideToggle();
                    console.log("You have clicked");
                };
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: "proj-todo",
                        templateUrl: "/partials/project/todo/list",
                        inputs: ['pId'],
                        directives: [common_1.NgClass, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [grid_data_1.GridDataService])
                ], TodoComponent);
                return TodoComponent;
            })();
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
