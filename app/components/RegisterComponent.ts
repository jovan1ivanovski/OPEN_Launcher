import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {User} from '../models/User';
import {avatarService} from '../services/avatarService';
import {UserService} from '../services/UserService';
import {AlertingService} from '../services/AlertingService';

@Component({
    templateUrl: './app/views/register.html'
})
export class RegisterComponent {
    public newUser: User = new User();
    public allImages: string[] = new Array<string>();
    public newUserImage: string;
    public allUsers: User[] = new Array<User>();
    public selectedImage: string;

    constructor(private alertingService: AlertingService, private avatarService: avatarService, private userService: UserService, private router: Router) {
        this.selectedImage = "./app/assets/default.jpg";
        this.getAvailableImages();
    }

    getAvailableImages() {
        this.avatarService.getUnusedImages()
            .subscribe(data => this.allImages = data, err => this.alertingService.addDanger(err.toString()));
    }

    onSelect(img: string) {
        this.selectedImage = img;
    }

    addUser(user: User) {
        user.profileImg = this.selectedImage;
        if (user.profileImg == "./app/assets/default.jpg") {
            this.alertingService.addDanger("За да креирате профил, ве молам изберете слика");
        }
        else {
            this.userService.addUser(user)
                .subscribe(data => this.allUsers = data, err => this.alertingService.addDanger(err.toString()));
            this.router.navigate(["/Login"]);
        }
    }
}