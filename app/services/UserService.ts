import {Injectable, bind} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()

export class UserService {
  
  constructor(private http:Http) {}
  
    getAllUsers() {
        return this.http.get('/getAllUsers').map(res => res.json());    
    }
    
    addUser(name, profileImg) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var data = JSON.stringify({ name: name, profileImg: profileImg });

        return this.http.post('/addUser', data, { headers: headers }).map(res => res.json());  
    }
}

export var userServiceInjectables: Array<any> = [
  bind(UserService).toClass(UserService)
];