import {Component, ViewEncapsulation, OnInit} from 'angular2/core';
import {ProjectListComponent, ProjectDetailComponent, ProjectAddComponent} from '../../project/cmps/project';
import {UserLoginComponent, UserDetailComponent, UserLogoutComponent, UserListComponent,UserProfileComponent,UserRegisterComponent} from '../../user/cmps/user';
import {CalendarMainComponent} from '../../user/cmps/calendar';
import {EmailListComponent} from '../../user/cmps/email';
import {GridDataService} from '../../common/services/grid_data';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteConfig,Location, RouterOutlet, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router'
import {DashboardComponent} from '../../dashboard/cmps/dashboard';
import {AutoBoatComponent} from './auto_boat';
import {NgClass} from 'angular2/common';
@Component({
    selector: "layout",
    templateUrl: 'partials/page/layout',
    providers: [HTTP_PROVIDERS, GridDataService],
    directives: [RouterOutlet, RouterLink,AutoBoatComponent, ROUTER_DIRECTIVES,NgClass]
})

@RouteConfig([
    { path: '/dashboard', component: DashboardComponent, name: 'Dashboard', useAsDefault:true },
    { path: '/projects', component: ProjectListComponent, name: 'Project.list' },
    { path: '/project/:id', component: ProjectDetailComponent, name: 'Project.detail' },
    { path: '/project/add', component: ProjectAddComponent, name: 'Project.add' },
    // { path: '/login', component: UserLoginComponent, name: 'User.login' },
    { path: '/logout', component: UserLogoutComponent, name: 'User.logout' },
    { path: '/users', component: UserListComponent, name: 'User.list' },
    { path: '/user/profile', component: UserProfileComponent, name: 'User.profile' },
    { path: '/user/:id', component: UserDetailComponent, name: 'User.detail' },
    { path: '/calendar', component: CalendarMainComponent, name: 'Calendar.main' },
    { path: '/emails', component: EmailListComponent, name: 'Email.list' },
    // { path: '/user/register', component: UserRegisterComponent, name: 'User.register' },
])

export class LayoutComponent implements OnInit {
    router: Router;
    location: Location;
    private dataService;
    private user;
    chatOpen = false;
    private _profileUrl='/api/user/profile/minimal';
    constructor(router: Router, location: Location,dataService:GridDataService) {
        this.router = router;
        this.location = location;
        this.dataService=dataService;
    }
    getLinkStyle(path) {
        // console.log("Path:"+this.location.path());
        return this.location.path() === path;
    }    
    ngOnInit() {
        this.getProfile();
    }
    getProfile(){
        this.dataService.getData(this._profileUrl).subscribe(user=> {this.user = user; console.log("Current User:"+JSON.stringify(user))});
    }
    mytoggle(newstate){
       this.chatOpen = newstate;
    }
}