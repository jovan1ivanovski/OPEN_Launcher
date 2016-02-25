import {Injectable, bind} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Users} from '../models/User';
import {User} from '../models/User';

const URL = 'http://localhost:3000';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getAllUsers() {
        return this.http.get(URL + '/getAllUsers')
                   .map(res => {
                        var usersData = new Users(res.json()); 
                        return usersData.users;
                    });
    }

    getUserByName(name) {
        return this.http.get(URL + '/getAllUsers/' + name).map(res => res.json());
    }

    addUser(name, profileImg) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var data = JSON.stringify({ name: name, profileImg: profileImg });

        return this.http.post(URL + '/addUser', data, { headers: headers }).map(res => res.json());
    }
    
    deleteUser(name) {
        return this.http.get(URL + '/deleteUser/' + name).map(res => res.json());
    }
}

export var userServiceInjectables: Array<any> = [
    bind(UserService).toClass(UserService)
];