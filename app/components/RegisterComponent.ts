import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Users, User} from '../models/User';
import {Images, Image} from '../models/Image';
import {avatarService} from '../services/avatarService';


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
    
    constructor(private avatService: avatarService){
        
    }
  getAvailableImages() {
        this.avatService.getUnusedImages()
                         .subscribe(data => this.allImages = data, err => console.log(err));
    }
    
    data = this.getAvailableImages();
    
   /* pervious code */
    paths = SOURCES;
    public selectedPath: Image = new Image();

    onSelect(src: Image) { this.selectedPath.path = src.path }
    
    /*ends previous code */

    
    createUser(user: User, image: Image){
        console.log(user.name, image.path, image.availability);
    }
}