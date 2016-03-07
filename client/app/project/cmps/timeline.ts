import {Component, OnInit, ElementRef} from "angular2/core";
import {GridDataService} from '../../common/services/grid_data';
import {NgClass, FORM_DIRECTIVES, Validators} from 'angular2/common';

@Component({
    selector: "proj-timeline",
    templateUrl: "/partials/project/timeline",
    directives: [NgClass, FORM_DIRECTIVES]
   
})

export class TimelineComponent implements OnInit {
   
  
   
    constructor() { 
        
    }
    
    ngOnInit() {
        
    }
  
 

}