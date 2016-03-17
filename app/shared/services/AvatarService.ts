import {Injectable, bind} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Users, User} from '../models/User';
import {GlobalService} from './GlobalService';


@Injectable()
export class AvatarService {

    constructor(private http: Http, private globalService: GlobalService) { }
    
    getProfileImages() {
        return this.http.get(this.globalService.URL_GETPROFILE_IMAGES)
                        .map(res => {
                            return res.json();
                        });
    }
}

export var avatarServiceInjectables: Array<any> = [bind(AvatarService).toClass(AvatarService)]
