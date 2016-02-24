import {provide, Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http'

/*
 * Components
 */
import {HomeComponent} from './components/HomeComponent';
import {UploadPictureComponent} from './components/UploadPictureComponent';
import {RegisterComponent} from './components/RegisterComponent';
import {LoginComponent} from './components/LoginComponent';

/*
 * Injectables
 */
import { userServiceInjectables } from './services/UserService';

/*
 * Services
 */
import {UserService} from './services/UserService';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: `./app/views/app.html`,
})

@RouteConfig([
    { path: '/', redirectTo: ['/Home'] },
    { path: '/home', component: HomeComponent, name: 'Home' },
    { path: '/uploadpicture', component: UploadPictureComponent, name: 'UploadPicture' },
    { path: '/register', component: RegisterComponent, name: 'Register' },
    { path: '/login', component: LoginComponent, name: 'Login' },
])

export class App {
    constructor(public userService: UserService) {}
 }

bootstrap(App, [userServiceInjectables, ROUTER_PROVIDERS, HTTP_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: "/" }),
    provide(LocationStrategy, { useClass: HashLocationStrategy })]);