import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {User} from '../models/User';
import {avatarService} from '../services/avatarService';
import {UserService} from '../services/UserService';

@Component({
    templateUrl: './app/views/register.html'
})
export class RegisterComponent {
    public newUser: User = new User();
    public allImages: string[] = new Array<string>();
    public newUserImage: string;
    public allUsers: User[] = new Array<User>();
    public errorMesage: string;
    public selectedImage: string;

    constructor(private avatarService: avatarService, private userService: UserService, private router: Router) {
        this.selectedImage = "./app/assets/default.jpg";
        this.getAvailableImages();
    }

    getAvailableImages() {
        this.avatarService.getUnusedImages()
            .subscribe(data => this.allImages = data, err => console.log(err));
    }

    onSelect(img: string) {
        this.selectedImage = img;
    }

    addUser(user: User) {
        user.profileImg = this.selectedImage;
        if (user.profileImg == "./app/assets/default.jpg") {
            this.errorMesage = "За да креирате профил, ве молам изберете слика"
        }
        else {
            this.userService.addUser(user)
                .subscribe(data => this.allUsers = data, err => console.log(err));
            this.router.navigate(["/Login"]);
        }
    }
}