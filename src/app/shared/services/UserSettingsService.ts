import {Injectable, bind} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {GlobalService} from './GlobalService';
import {UserSettings} from '../models/UserSettings';

export interface IUserSettingsService {
  getUserSettingsFor(username: string): Observable<UserSettings>;
}

@Injectable()
export class UserSettingsService implements IUserSettingsService {
  constructor(private http: Http, private globalService: GlobalService) { }

  getUserSettingsFor(username: string): Observable<UserSettings> {
    return this.http.get(this.globalService.URL_GET_USERSETTINGS(username))
      .map(res => {
        var userSettings: UserSettings = res.json();
        return userSettings;
      });
  }
}

export var userSettingsServiceInjectables: Array<any> = [
  bind(UserSettingsService).toClass(UserSettingsService)
];
