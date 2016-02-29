import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Users, User} from '../models/User';
import {Images, Image} from '../models/Image';
import {avatarService} from '../services/avatarService';
import {UserService} from '../services/UserService';
import {AuthService} from '../services/AuthService';


interface Path {
    path: string;
}
var SOURCES: Path[] = [
    { "path": "./app/assets/images/fish.png" },
    { "path": "./app/assets/images/owl.png" },
    { "path": "./app/assets/images/lion.png" },
    { "path": "./app/assets/images/penguin.png" }
]

@Component({
    templateUrl: './app/views/register.html'
})
export class RegisterComponent {
    public newUser : User = new User();
    public allImages: Image[] = new Array<Image>();
    public newUserImage: Image = new Image();
    public allUsers: User[] = new Array<User>();
    
    constructor(private avatService: avatarService, private userService: UserService){
        
    }
  getAvailableImages() {
        this.avatService.getUnusedImages()
                         .subscribe(data => this.allImages = data, err => console.log(err));
    }
    
    data = this.getAvailableImages();
    

    paths = SOURCES;
    public selectedPath: User = new User();

    onSelect(src: Image) { this.selectedPath.profileImg = src.path;
    console.log(this.selectedPath.profileImg)    
     }


    addUser(user: User) {
        user.profileImg = this.selectedPath.profileImg;
        console.log(user.name, user.profileImg);
        this.userService.addUser(user)
            .subscribe(data => this.allUsers = data, err => console.log(err));
    }
   
    
    
}