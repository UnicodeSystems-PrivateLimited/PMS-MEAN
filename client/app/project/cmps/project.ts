import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {GridDataService} from '../../common/services/grid_data';
import {Router, RouteConfig, RouteParams, RouterOutlet, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router'
import {Project} from '../models/project';
import {TodoComponent} from './todo';
import {MemberComponent} from './member';
import {TaskComponent} from './task';
import {FileComponent} from './file';
import {TimelineComponent} from './timeline';

@Component({
    selector: 'data-list',
    templateUrl: 'partials/project/list',
    directives: [RouterOutlet, RouterLink, ROUTER_DIRECTIVES]
})

export class ProjectListComponent implements OnInit {
    public projects;
    public errorMessage: string;
    private _dataUrl = '/api/project';
    constructor(private dataService: GridDataService) { }

    ngOnInit() {
        this.getProjects();
        
    }

    getProjects() {
        this.dataService.getData(this._dataUrl).subscribe(projects=> this.projects = projects);
    }
}

@Component({
    selector: 'data-detail',
    templateUrl: 'partials/project/detail',
    // template:'<p *ngIf="project">Project:{{project.name}}</p>',
    //providers: [TodoComponent],
    directives: [TodoComponent,MemberComponent,TaskComponent,FileComponent,TimelineComponent]
})

export class ProjectDetailComponent {
    public project;
    public todos
    public errorMessage: string;
    private _dataUrl = '/api/project';
    constructor(private dataService: GridDataService, private routeParam: RouteParams) { 
        // console.log("ID"+JSON.stringify(routeParam.params));
    }

    ngOnInit() {
        var params = this.routeParam.params;
        if (params['id']) {
            var pId = params['id'];
            this.getProjectDetail(pId);
        }
    }

    getProjectDetail(id) {
        this.dataService.getData(this._dataUrl + "/" + id).subscribe(project=> this.project = project);
    }
}

@Component({
    selector: 'data-form',
    templateUrl: 'partials/project/add'
})

export class ProjectAddComponent {
    private addUrl = '/api/project/add';
    // private project=new Project(10,'MySpaceNYC','A Zoho project');
    private project = new Project();
    private _router;
    submitted = false;
    constructor(private dataService: GridDataService, router: Router) {
        this._router = router;
    }
    onSubmit() {
        this.submitted = true;
        this.addProject();
    }
    addProject() {
        this.dataService.postData(this.addUrl, this.project)
            .subscribe(project=> { console.log("Saved:" + JSON.stringify(project)); this._router.parent.navigate(['./Project.list']) });
    }
    get diagnostic() { return JSON.stringify(this.project) }
}