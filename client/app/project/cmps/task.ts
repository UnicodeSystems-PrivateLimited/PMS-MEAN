import {Component, OnInit, ElementRef} from "angular2/core";
import {GridDataService} from '../../common/services/grid_data';
import {NgClass, FORM_DIRECTIVES, Validators} from 'angular2/common';

@Component({
    selector: "proj-task",
    templateUrl: "/partials/project/task",
    directives: [NgClass, FORM_DIRECTIVES]
   
})

export class TaskComponent implements OnInit {
    isOpen = false;
    public members = [];
    private _listUrl = '/api/user';
  
   
    constructor() { 
        
    }
    
    ngOnInit() {
        
    }
  
 

}