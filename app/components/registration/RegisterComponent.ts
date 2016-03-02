import {Component} from 'angular2/core';
import {RouterLink, Router} from 'angular2/router';

import {User} from '../../shared/models/User';
import {AvatarService} from '../../shared/services/AvatarService';
import {UserService} from '../../shared/services/UserService';
import {AlertingService} from '../alerting/AlertingService';

@Component({
    directives: [RouterLink],
    templateUrl: './app/components/registration/register.html'
})
export class RegisterComponent {
    public newUser: User = new User();
    public allImages: string[] = new Array<string>();
    public newUserImage: string;
    public allUsers: User[] = new Array<User>();
    public selectedImage: string;

    constructor(private alertingService: AlertingService, private avatarService: AvatarService, private userService: UserService, private router: Router) {
        this.selectedImage = "./app/assets/images/default.jpg";
        this.getAvailableImages();
    }

    getAvailableImages() {
        this.avatarService.getProfileImages()
            .subscribe(data => this.allImages = data, err => this.alertingService.addDanger(err.toString()));
    }

    onSelect(img: string) {
        this.selectedImage = img;
    }

    addUser(user: User) {
        user.profileImg = this.selectedImage;
        if (user.profileImg == "./app/assets/images/default.jpg") {
            this.alertingService.addDanger("За да креирате профил, ве молам изберете слика");
        }
        else {
            this.userService.addUser(user)
                .subscribe(data => this.allUsers = data, err => this.alertingService.addDanger(err.toString()));
            this.router.navigate(["/Login"]);
        }
    }
}