import {Component} from 'angular2/core';
import {RouterLink, Router} from 'angular2/router';

import {UserService} from '../services/UserService';
import {AuthService} from '../services/AuthService';
import {Users, User} from '../models/User';

@Component({
    selector: 'login',
    directives: [RouterLink],
    templateUrl: `./app/views/login.html`
})

export class LoginComponent {
    public allUsers: User[] = new Array<User>();
    public selectedUser: User;
    public filterargs = {name: 'Igor'};

    constructor(private userService: UserService, private authService: AuthService, private router: Router) {
        this.getAllUsers();
    }

    getAllUsers(): void {
        this.userService.getAllUsers()
            .subscribe(data => this.allUsers = data, err => console.log(err));
    }

    deleteUser() {
        this.userService.deleteUser(this.selectedUser.name)
            .subscribe(data => {
                this.allUsers = data;
                this.selectedUser = null;
            }, err => console.log(err));
    }

    login(): void {
        if (!this.authService.login(this.selectedUser.name)) {
            alert("User is not valid.");
        }
        else {
            this.router.navigate(["/Home"])
        }
    }

    selectUser(user: User): void {
        this.selectedUser = user;
    }

    ShouldApplySelectedUserCss(user: User): boolean {
        return this.selectedUser === user;
    }
}
