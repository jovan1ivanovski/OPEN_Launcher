import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Router} from 'angular2/router';

import {Users, User} from '../models/User';
import {Images, Image} from '../models/Image';
import {avatarService} from '../services/avatarService';
import {UserService} from '../services/UserService';
import {AuthService} from '../services/AuthService';

@Component({
    templateUrl: './app/views/register.html'
})
export class RegisterComponent {
    public newUser : User = new User();
    public allImages: Image[] = new Array<Image>();
    public newUserImage: Image = new Image();
    public allUsers: User[] = new Array<User>();
    public errorMesage: string;
    public selectedPath: User = new User();
    constructor(private avatService: avatarService, private userService: UserService, private router: Router){
        this.selectedPath.profileImg = "./app/assets/default.jpg";
    }
  getAvailableImages() {
        this.avatService.getUnusedImages()
                         .subscribe(data => this.allImages = data, err => console.log(err));
    }
    
    data = this.getAvailableImages();
    
    

    onSelect(src: Image) { this.selectedPath.profileImg = src.path;
    console.log(this.selectedPath.profileImg)    
     }


    addUser(user: User) {
        user.profileImg = this.selectedPath.profileImg;
        if (user.profileImg == "./app/assets/default.jpg"){
        this.errorMesage =  "За да креирате профил, ве молам изберете слика"
        return console.log(this.errorMesage);
    }
        else {
        console.log(user.name, user.profileImg);
        this.userService.addUser(user)
            .subscribe(data => this.allUsers = data, err => console.log(err));
        this.router.navigate(["/Login"]);
        }
    }
}