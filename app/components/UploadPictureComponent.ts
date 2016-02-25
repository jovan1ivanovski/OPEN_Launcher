import {Component} from 'angular2/core';

import {UploadPictureService} from '../services/UploadPictureService';

@Component({
    selector: 'uploadPicture',
    templateUrl: `./app/views/uploadPicture.html`
})
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
