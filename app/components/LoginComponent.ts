import {Component} from 'angular2/core';
import {RouterLink, Router} from 'angular2/router';

import {UserService} from '../services/UserService';
import {AuthService} from '../services/AuthService';
import {AlertingService} from '../services/AlertingService';
import {Users, User} from '../models/User';
import {UsersFilter} from '../filters/usersFilter';

@Component({
    selector: 'login',
    directives: [RouterLink],
    pipes: [UsersFilter],
    templateUrl: `./app/views/login.html`
})
export class LoginComponent {
    public allUsers: User[] = new Array<User>();
    public selectedUser: User = new User();
    public usernameFilter = "";

    constructor(private alertingService: AlertingService, private userService: UserService, private authService: AuthService, private router: Router) {
        this.getAllUsers();
    }

    getAllUsers(): void {
        this.userService.getAllUsers()
            .subscribe(data => this.allUsers = data, err => this.alertingService.addDanger(err.toString()));
    }

    deleteUser() {
        this.userService.deleteUser(this.selectedUser.name)
            .subscribe(data => {
                this.allUsers = data;
                this.selectedUser = new User();
            }, err => this.alertingService.addDanger(err.toString()));
    }

    login(): void {
        if (!this.authService.login(this.selectedUser.name)) {
            this.alertingService.addDanger("User is not valid.");
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
