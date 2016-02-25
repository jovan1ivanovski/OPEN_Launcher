import {Injectable, bind} from 'angular2/core';

const URL: string = 'http://localhost:3000';

@Injectable()
export class GlobalService {
    URL_UPLOAD_PICTURE: string = URL + "/api/upload";
    URL_GETALLUSERS: string = URL + "/getAllUsers";
    URL_GETUSER(username: string): string { return URL + "/getAllUsers/" + username; }
    URL_ADDUSER: string = URL + "/addUser";
    URL_DELETEUSER(username: string): string { return URL + "/deleteUser/" + username; }
    
    constructor() { }
}

export var globalServiceInjectables: Array<any> = [
    bind(GlobalService).toClass(GlobalService)
];