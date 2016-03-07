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
    var MemberComponent;
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
            MemberComponent = (function () {
                function MemberComponent(dataService, elementRef) {
                    this.dataService = dataService;
                    this.isOpen = false;
                    this.members = [];
                    this.memToAdd = { memIds: [], role: 1 };
                    this.roles = [
                        { _id: 1, name: "Developer" },
                        { _id: 2, name: "Team Lead" },
                        { _id: 3, name: "Project Head" },
                        { _id: 4, name: "Project Manager" },
                        { _id: 5, name: "QA" }
                    ];
                    this._listUrl = '/api/user';
                    this.elementRef = elementRef;
                }
                MemberComponent.prototype.ngOnInit = function () {
                    console.log("Members:" + JSON.stringify(this.members));
                    this.loadMembers();
                };
                MemberComponent.prototype.ngAfterViewInit = function () {
                    //    var boxHtml=jQuery(this.elementRef.nativeElement).find(".js-name-multiple").select2();
                    //    jQuery(this.elementRef.nativeElement).find(".js-role-single").select2();
                    //    console.log(boxHtml); 
                };
                MemberComponent.prototype.loadMembers = function () {
                    var _this = this;
                    var self = this;
                    if (this.members.length > 0) {
                        var memIds = { key: "memIds", data: [] };
                        for (var i = 0; i < this.members.length; i++) {
                            memIds.data.push(this.members[i].user_id);
                        }
                        this.dataService.getData(this._listUrl).subscribe(function (memData) {
                            console.log("Loaded Members:" + JSON.stringify(memData));
                            for (var i = 0; i < self.members.length; i++) {
                                for (var j = memData.length - 1; j >= 0; j--) {
                                    if (self.members[i].user_id === memData[j]._id) {
                                        self.members[i].user = memData[j];
                                    }
                                }
                            }
                            _this.nonMembers = memData;
                            //console.log("Merged Loaded Members:" + JSON.stringify(self.members));
                        });
                    }
                };
                // addMemberForm(newState) {
                //     // jQuery(this.elementRef.nativeElement).select2({containment:'.js-name-multiple'});
                // //   $('.js-name-multiple').select2();
                // }    
                MemberComponent.prototype.addMemberForm = function (newState) {
                    this.isOpen = newState;
                };
                Object.defineProperty(MemberComponent.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.memToAdd); },
                    enumerable: true,
                    configurable: true
                });
                MemberComponent = __decorate([
                    core_1.Component({
                        selector: "proj-members",
                        templateUrl: "/partials/project/member",
                        directives: [common_1.NgClass, common_1.FORM_DIRECTIVES],
                        inputs: ['members']
                    }), 
                    __metadata('design:paramtypes', [grid_data_1.GridDataService, core_1.ElementRef])
                ], MemberComponent);
                return MemberComponent;
            })();
            exports_1("MemberComponent", MemberComponent);
        }
    }
});
