import {Component, OnInit, ElementRef,AfterViewInit} from "angular2/core";
import {GridDataService} from '../../common/services/grid_data';
import {NgClass, FORM_DIRECTIVES, Validators} from 'angular2/common';
 declare var jQuery:any;
@Component({
    selector: "proj-members",
    templateUrl: "/partials/project/member",
    directives: [NgClass, FORM_DIRECTIVES],
    inputs: ['members']
})

export class MemberComponent implements OnInit,AfterViewInit {
    isOpen = false;
    public members = [];
    public nonMembers;
    private memToAdd={memIds:[],role:1};
    public roles=[
      {_id:1, name:"Developer"},
      {_id:2, name:"Team Lead"},
      {_id:3, name:"Project Head"},
      {_id:4, name:"Project Manager"},
      {_id:5, name:"QA"}
    ];    
    private _listUrl = '/api/user';
    public elementRef: ElementRef;
   
    constructor(private dataService: GridDataService,elementRef: ElementRef) {         
         this.elementRef = elementRef;
    }
    ngOnInit() {
        console.log("Members:" + JSON.stringify(this.members));
        this.loadMembers();
    }
    ngAfterViewInit(){
    //    var boxHtml=jQuery(this.elementRef.nativeElement).find(".js-name-multiple").select2();
    //    jQuery(this.elementRef.nativeElement).find(".js-role-single").select2();
    //    console.log(boxHtml); 
    }
    loadMembers() {
        var self = this;
        if (this.members.length > 0) {
            var memIds = { key: "memIds", data: [] };
            for (var i = 0; i < this.members.length; i++) {
                memIds.data.push(this.members[i].user_id);
            }
            this.dataService.getData(this._listUrl).subscribe(memData=> {
                console.log("Loaded Members:" + JSON.stringify(memData));
                for (var i = 0; i < self.members.length; i++) {
                    for (var j = memData.length-1; j >=0; j--) {
                        if (self.members[i].user_id === memData[j]._id) {
                            self.members[i].user = memData[j];
                        }
                    }
                }
                this.nonMembers=memData;
                //console.log("Merged Loaded Members:" + JSON.stringify(self.members));
            });
        }
    }
    // addMemberForm(newState) {
    //     // jQuery(this.elementRef.nativeElement).select2({containment:'.js-name-multiple'});
    // //   $('.js-name-multiple').select2();
    // }    
    addMemberForm(newState) {
        this.isOpen = newState;
    }
    get diagnostic() { return JSON.stringify(this.memToAdd); }
}