import {Component} from 'angular2/core';
import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';
import {NgForm} from 'angular2/common';
import {NgFor} from 'angular2/common';
 
 interface Path {
     path: string;
 }
 
@Component ({
    providers: [JSONP_PROVIDERS],
    templateUrl: './app/views/register.html',
    styles:[`ul#pics li {
    display: inline;
}`]
    
})

export class RegisterComponent {
  //  photos: Array<Object>;
   
    paths = SOURCES;
    selectedPath: Path;
    //paths: string[] = ["./app/assets/images/fish.png","./app/assets/images/owl.png", "./app/assets/images/lion.png", "./app/assets/images/penguin.png"];
    //constructor(jsonp:Jsonp){
    //    jsonp.request('./app/assets/photos.json').subscribe(pic => {this.photos = pic.json()})
    //} 
    onSelect(src: Path){this.selectedPath = src; }   
    
    }
    
 }
 
var SOURCES: Path[] = [
     {"path":"./app/assets/images/fish.png"},
    {"path":"./app/assets/images/owl.png"},
    {"path":"./app/assets/images/lion.png"},
    {"path":"./app/assets/images/penguin.png"} 
]
