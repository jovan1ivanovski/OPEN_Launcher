import {Component} from 'angular2/core';
import {UserService} from '../services/UserService';

@Component({
    selector: 'home',
    templateUrl: `./app/views/home.html`
})

export class HomeComponent {
    public allUsers: {};

    constructor(private userService: UserService) { }

    getAllUsers() {
        this.userService.getAllUsers().subscribe(
            data => { this.allUsers = data; },
            err => console.log(err)
        );
    }

    addUser(name, profileImg) {
        this.userService.addUser(name, profileImg).subscribe(
            data => { this.allUsers = data; },
            err => console.log(err)
        );
    }

    deleteUser(name) {
        this.userService.deleteUser(name).subscribe(
            data => { this.allUsers = data; },
            err => console.log(err)
        );;
    }

    data = this.getAllUsers();
}