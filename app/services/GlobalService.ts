import {Injectable, bind} from 'angular2/core';

const URL: string = 'http://localhost:3000';

@Injectable()
export class GlobalService {
    URL_UPLOAD_PICTURE: string = URL + "/api/upload";

    constructor() { }
}

export var globalServiceInjectables: Array<any> = [
    bind(GlobalService).toClass(GlobalService)
];