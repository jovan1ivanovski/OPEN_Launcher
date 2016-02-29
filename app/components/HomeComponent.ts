import {Component} from 'angular2/core';
import {UserService} from '../services/UserService';
import {AuthService} from '../services/AuthService';
import {Users, User} from '../models/User';

@Component({
    selector: 'home',
    templateUrl: `./app/views/home.html`
})
export class HomeComponent {
    public allUsers: User[] = new Array<User>();
    public newUser: User = new User();

    constructor(private userService: UserService, private authService: AuthService) {
        this.newUser.name = 'Igor';
        this.newUser.profileImg = 'Picajzla';
    }

    getAllUsers() {
        this.userService.getAllUsers()
            .subscribe(data => this.allUsers = data, err => console.log(err));
    }

    addUser(user: User) {
        this.userService.addUser(user)
            .subscribe(data => this.allUsers = data, err => console.log(err));
    }

    deleteUser(name) {
        this.userService.deleteUser(name)
            .subscribe(data => this.allUsers = data, err => console.log(err));
    }

    login(username: string): boolean {
        if (!this.authService.login(username)) {
            alert("User is not valid.");
        }
        return false;
    }
    logout(){
        this.authService.logout();
    }

    data = this.getAllUsers();
}