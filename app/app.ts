import {provide, Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http'

/*
 * Components
 */
import {HomeComponent} from './components/home/HomeComponent';
import {UploadPictureComponent} from './components/upload/UploadPictureComponent';
import {RegisterComponent} from './components/registration/RegisterComponent';
import {LoginComponent} from './components/login/LoginComponent';
import {AlertingComponent} from './components/alerting/AlertingComponent';

/*
 * Injectables
 */
import { servicesInjectables } from './shared/services/services';

/*
 * Services
 */
import { AUTH_PROVIDERS } from './shared/services/AuthService';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, AlertingComponent],
    templateUrl: `./app/app.html`
})

@RouteConfig([
    { path: '/', redirectTo: ['/Login'] },
    { path: '/home', component: HomeComponent, name: 'Home' },
    { path: '/uploadpicture', component: UploadPictureComponent, name: 'UploadPicture' },
    { path: '/register', component: RegisterComponent, name: 'Register' },
    { path: '/login', component: LoginComponent, name: 'Login' },
])
export class App { }

bootstrap(App, [servicesInjectables,
    AUTH_PROVIDERS, ROUTER_PROVIDERS, HTTP_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: "/" }),
    provide(LocationStrategy, { useClass: HashLocationStrategy })]);