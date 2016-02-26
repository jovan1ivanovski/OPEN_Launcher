import {Injectable, bind} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Users, User} from '../models/User';
import {GlobalService} from '../services/GlobalService';


@Injectable()

export class avatarService {
    
    constructor(private http: Http, private globalService: GlobalService) { }
    
    //getUnusedImages
     getUnusedImages() {
        return this.http.get(this.globalService.URL_GETAVAILABLE_IMAGES)
            .map(res => {
                return res.json();
            });
    }

}    

export var avatarServiceInjectables: Array<any> = [bind(avatarService).toClass(avatarService)]
