import {Component} from 'angular2/core';
import {UserService} from '../../shared/services/UserService';
import {AuthService} from '../../shared/services/AuthService';
import {AlertingService} from '../alerting/AlertingService';
import {Users, User} from '../../shared/models/User';

@Component({
    selector: 'home',
    templateUrl: `./app/components/home/home.html`
})
export class HomeComponent {
    public allUsers: User[] = new Array<User>();
    public newUser: User = new User();

    constructor(private alertingService: AlertingService, private userService: UserService, private authService: AuthService) {
    }

    getAllUsers() {
        this.userService.getAllUsers()
            .subscribe(data => this.allUsers = data, err => this.alertingService.addDanger(err.toString()));
    }

    //addUser(user: User) {
      //  this.userService.addUser(user)
        //    .subscribe(data => this.allUsers = data.users, err => this.alertingService.addDanger(err.toString()));
    //}

    deleteUser(name) {
        this.userService.deleteUser(name)
            .subscribe(data => this.allUsers = data, err => this.alertingService.addDanger(err.toString()));
    }

    login(username: string): boolean {
        if (!this.authService.login(username)) {
            this.alertingService.addDanger("Корисникот не е валиден.");
        }
        return false;
    }
    logout(){
        this.authService.logout();
    }

    data = this.getAllUsers();
}