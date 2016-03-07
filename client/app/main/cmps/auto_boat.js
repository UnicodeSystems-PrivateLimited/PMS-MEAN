System.register(["angular2/core", 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var AutoBoatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AutoBoatComponent = (function () {
                function AutoBoatComponent() {
                    this.conUrl = "http://localhost:3000/";
                    this.ison = true;
                }
                AutoBoatComponent.prototype.ngOnInit = function () {
                    var self = this;
                    this.client = new Primus(this.conUrl);
                    this.client.on('data', function (data) {
                        if (data.type == 'channels') {
                            self.channels = data.body;
                        }
                        console.log("Channels:" + JSON.stringify(data));
                        //primus.write({my: 'Client data'});
                    });
                };
                AutoBoatComponent.prototype.onSelect = function (channel) {
                    this.selChannel = channel;
                };
                AutoBoatComponent.prototype.optionToggle = function (newSet) {
                    this.ison = newSet;
                };
                AutoBoatComponent = __decorate([
                    core_1.Component({
                        selector: "auto-boat",
                        templateUrl: "/partials/page/auto-boat",
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AutoBoatComponent);
                return AutoBoatComponent;
            })();
            exports_1("AutoBoatComponent", AutoBoatComponent);
        }
    }
});
