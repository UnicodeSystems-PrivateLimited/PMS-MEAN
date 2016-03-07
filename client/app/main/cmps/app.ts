import {Component,OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {GridDataService} from '../../common/services/grid_data';
import {HTTP_PROVIDERS} from 'angular2/http';
import {LayoutComponent} from './layout';
import {UserLoginComponent, UserLogoutComponent,UserRegisterComponent} from '../../user/cmps/user';

@Component({
    selector: 'pms-app',
    template: '<router-outlet></router-outlet>',
    providers: [HTTP_PROVIDERS, GridDataService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/app/...', component: LayoutComponent, name: 'Layout', useAsDefault: true}, 
    {path: '/login', component: UserLoginComponent, name: 'User.login'}, 
    {path: '/register', component: UserRegisterComponent, name: 'User.register'}, 
    {path: '/logout', component: UserLogoutComponent, name: 'User.logout'},     
])

export class AppComponent implements OnInit{ 
    public projects;
    public errorMessage: string;
    private _dataUrl = '/api/ping';
    private _router;
            
    constructor(private dataService: GridDataService, router: Router){
        this._router=router;
        console.log("We are up and running!");
    }
    
    ngOnInit(){
        this.ping();
    }
    ping() {
        this.dataService.getData(this._dataUrl).subscribe(res=> {if(res.status===0){this._router.navigate(['/User.login'])}});
    }
}