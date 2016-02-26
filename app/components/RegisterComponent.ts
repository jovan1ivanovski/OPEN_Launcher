import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Users, User} from '../models/User';

interface Path {
    path: string;
}
var SOURCES: Path[] = [
    { "path": "./app/assets/images/fish.png" },
    { "path": "./app/assets/images/owl.png" },
    { "path": "./app/assets/images/lion.png" },
    { "path": "./app/assets/images/penguin.png" }
]

@Component({
    templateUrl: './app/views/register.html'
})
export class RegisterComponent {
    public user : User = new User();
    
   /* pervious code */
    paths = SOURCES;
    selectedPath: Path;

    onSelect(src: Path) { this.selectedPath = src; }
    
    /*ends previous code */

    
    createUser(user: User){
        console.log(user.name);
    }
}