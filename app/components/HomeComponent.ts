import {Component} from 'angular2/core';
import {UserService} from '../services/UserService';
import {Users, User} from '../models/User';

@Component({
    selector: 'home',
    templateUrl: `./app/views/home.html`
})
export class HomeComponent {
    public allUsers: User[] = new Array<User>();
    public newUser: User = new User();
    
    constructor(private userService: UserService) {
        this.newUser.name = 'Igor';
        this.newUser.profileImg = 'Picajzla';
     }

    getAllUsers() {
        this.userService.getAllUsers()
                        .subscribe(data => this.allUsers = data , err => console.log(err));
    }

    addUser(user: User) {
        this.userService.addUser(user)
                        .subscribe(data => this.allUsers = data , err => console.log(err));
    }

    deleteUser(name) {
        this.userService.deleteUser(name)
                        .subscribe(data => this.allUsers = data, err => console.log(err));
    }

    data = this.getAllUsers();
}