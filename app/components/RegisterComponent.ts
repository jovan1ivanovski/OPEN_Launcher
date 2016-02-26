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
    paths = SOURCES;
    selectedPath: Path;
    public user: User = new User();

    onSelect(src: Path) { this.selectedPath = src; }
    
    createUser(user: User){
        console.log(user);
    }
}