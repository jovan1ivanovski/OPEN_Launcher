import {provide, Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from 'angular2/router';

import {HomeComponent} from './components/HomeComponent';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: `./app/views/main.html`,
})

@RouteConfig([
    { path: '/', redirectTo: ['/Home'] },
    { path: '/home', component: HomeComponent, name: 'Home' }
])

export class App { }

bootstrap(App, [ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: "/" }),
    provide(LocationStrategy, { useClass: HashLocationStrategy })]);