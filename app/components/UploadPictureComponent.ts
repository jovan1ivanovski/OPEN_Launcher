import {Component, Injector} from 'angular2/core';
import {CanActivate} from 'angular2/router';

import {AuthService} from '../services/AuthService';
import {UploadPictureService} from '../services/UploadPictureService';

@Component({
    selector: 'uploadPicture',
    templateUrl: `./app/views/uploadPicture.html`
})
@CanActivate(
    (nextInstr: any, currInstr: any) => {
        let injector: any = Injector.resolveAndCreate([AuthService]);
        let authService: AuthService = injector.get(AuthService);
        return authService.isLogged();
    }
)
export class UploadPictureComponent {
    public selectedFiles;
        
    constructor(private uploadPictureService: UploadPictureService) {
    }

    uploadFile(): void {
        this.uploadPictureService.upload(this.selectedFiles[0]);
    }
    
    onChange(event) {
        this.selectedFiles = event.srcElement.files;
    }
}
