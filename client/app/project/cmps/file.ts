import {Component, OnInit, ElementRef} from "angular2/core";
import {GridDataService} from '../../common/services/grid_data';
import {NgClass, FORM_DIRECTIVES, Validators} from 'angular2/common';

@Component({
    selector: "proj-files",
    templateUrl: "/partials/project/file",
    directives: [NgClass, FORM_DIRECTIVES]
   
})

export class FileComponent implements OnInit {
   
   
  
   
    constructor() { 
        
    }
    
    ngOnInit() {
        
    }
  
 

}