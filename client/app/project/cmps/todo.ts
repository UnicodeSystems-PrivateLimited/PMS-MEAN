import {Component, OnInit} from "angular2/core";
import {GridDataService} from '../../common/services/grid_data';
import {NgClass,FORM_DIRECTIVES, Validators} from 'angular2/common';

@Component({
    selector: "proj-todo",
    templateUrl: "/partials/project/todo/list",
    inputs:['pId'],
     directives: [NgClass, FORM_DIRECTIVES]
})

export class TodoComponent implements OnInit {
    public todos;
    private pId;
    public errorMessage: string;
    private _listUrl = "/api/todo/pid/";
    private _addUrl = "/api/todo/add";
    private newTodo = { title: "" };
    private submitted = false;
     isOpen = false;
    
    constructor(private dataService: GridDataService) { }
    ngOnInit() {
        this.newTodo["project_id"]=this.pId;
        this.getTodos();
    }
    onSubmit() {
        this.submitted = true;
        this.addTodo();
    }
    getTodos() {
        this.dataService.getData(this._listUrl+this.pId).subscribe(todos=> { this.todos = todos; console.log("Todos:" + JSON.stringify(todos)) });
    }
    addTodo() {
        console.log("Adding Todo:"+JSON.stringify(this.newTodo));
        this.dataService.postData(this._addUrl, this.newTodo)
            .subscribe(
            res=> {
                if (res.status === 1) {
                    this.newTodo.title="";
                    this.todos.unshift(res.data);
                } else {
                    console.log("Something wrong:" + res.msg);
                }
            }
            );
    }
    
    
    addtodoForm(newState) {
        this.isOpen = newState;
    }
    // jQuery-utility
  myaccord(e){
       
         $(e.target).parent().siblings('.box-body').slideToggle();
        
        console.log("You have clicked");
    }
}