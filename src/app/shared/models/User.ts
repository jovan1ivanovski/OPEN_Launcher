import {UserSettings} from './UserSettings';

//Class that represents the user entity from db
export class User {
  public name: string;
  public profileImg: string;
  public pointerSize: string;
  public pointerColor: string;
  public pointerSpeed: string;
  public backgroundColor: string;
  public userSettings: UserSettings;

  constructor() {
    this.userSettings = new UserSettings();
  }
}

export class Users {
  public users: User[] = new Array<User>();

  constructor(objets) {
    for (var key in objets) {
      var obj = objets[key];
      var user = new User();

      for (var prop in obj) {
        user[prop] = obj[prop];
      }

      this.users.push(user);
    }
  }
}
