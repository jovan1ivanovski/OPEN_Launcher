import {Component} from 'angular2/core';
import {UserService} from '../services/UserService';
import {AuthService} from '../services/AuthService';
import {AlertingService} from '../services/AlertingService';
import {Users, User} from '../models/User';

@Component({
    selector: 'home',
    templateUrl: `./app/views/home.html`
})
export class HomeComponent {
    public allUsers: User[] = new Array<User>();
    public newUser: User = new User();

    constructor(private alertingService: AlertingService, private userService: UserService, private authService: AuthService) {
        this.newUser.name = 'Igor';
        this.newUser.profileImg = 'Picajzla';
    }

    getAllUsers() {
        this.userService.getAllUsers()
            .subscribe(data => this.allUsers = data, err => this.alertingService.addDanger(err.toString()));
    }

    addUser(user: User) {
        this.userService.addUser(user)
            .subscribe(data => this.allUsers = data, err => this.alertingService.addDanger(err.toString()));
    }

    deleteUser(name) {
        this.userService.deleteUser(name)
            .subscribe(data => this.allUsers = data, err => this.alertingService.addDanger(err.toString()));
    }

    login(username: string): boolean {
        if (!this.authService.login(username)) {
            this.alertingService.addDanger("User is not valid.");
        }
        return false;
    }
    logout(){
        this.authService.logout();
    }

    data = this.getAllUsers();
}