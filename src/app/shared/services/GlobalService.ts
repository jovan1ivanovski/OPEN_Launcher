import {Injectable, bind} from 'angular2/core';

const URL: string = 'http://localhost:3010';

@Injectable()
export class GlobalService {
    URL_UPLOAD_PICTURE: string = URL + "/api/upload";
    URL_GETALLUSERS: string = URL + "/api/getAllUsers";
    URL_GETUSER(username: string): string { return URL + "/api/getAllUsers/" + username; }
    URL_ADDUSER: string = URL + "/api/addUser";
    URL_DELETEUSER(username: string): string { return URL + "/api/deleteUser/" + username; }
    URL_GETPROFILE_IMAGES: string = URL + "/api/GetProfileImages/";
    constructor() { }
}

export var globalServiceInjectables: Array<any> = [
    bind(GlobalService).toClass(GlobalService)
];
