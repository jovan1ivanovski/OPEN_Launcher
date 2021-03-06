import {Injectable, bind} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Users, User} from '../models/User';
import {GlobalService} from './GlobalService';

@Injectable()
export class UserService {

  constructor(private http: Http, private globalService: GlobalService) { }

  //Get all users from db
  getAllUsers() {
    return this.http.get(this.globalService.URL_GETALLUSERS)
      .map(res => {
        var response = new Users(res.json());
        return response.users;
      });
  }

  //Get user filtered by name from db
  getUserByName(name: string) {
    return this.http.get(this.globalService.URL_GETUSER(name))
      .map(res => {
        var response = new Users(res.json());
        return response.users;
      });
  }

  //Add new user to db
  addUser(user: User) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.globalService.URL_ADDUSER,
      JSON.stringify(user),
      { headers: headers })
      .map(res => {
        var result = res.json();
        var response = new Users(result.data);
        return { users: response.users, message: result.message };
      });
  }

  //Delete user by name from db
  deleteUser(name) {
    return this.http.get(this.globalService.URL_DELETEUSER(name))
      .map(res => {
        var response = new Users(res.json());
        return response.users;
      });
  }
}

export var userServiceInjectables: Array<any> = [
  bind(UserService).toClass(UserService)
];
