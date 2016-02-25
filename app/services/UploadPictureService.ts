import {Injectable, bind} from 'angular2/core';
import {Http} from 'angular2/http';

import {GlobalService} from '../services/GlobalService';

import {MultipartItem} from "../../plugins/multipart-upload/multipart-item";
import {MultipartUploader} from "../../plugins/multipart-upload/multipart-uploader";

@Injectable()
export class UploadPictureService {
    private uploader: MultipartUploader = new MultipartUploader({ url: this.globalService.URL_UPLOAD_PICTURE });
    private multipartItem: MultipartItem = new MultipartItem(this.uploader);

    constructor(private http: Http, private globalService: GlobalService) { }

    upload(file: File): void {
        if (this.multipartItem == null) {
            this.multipartItem = new MultipartItem(this.uploader);
        }
        if (this.multipartItem.formData == null)
            this.multipartItem.formData = new FormData();

        this.multipartItem.formData.append("userPhoto", file);
        this.multipartItem.withCredentials = false;
        this.multipartItem.callback = this.uploadCallback;
        this.multipartItem.upload();
    }
    
    uploadCallback(data): void {
        if (data) {
            console.debug("uploadCallback() upload file success.");
        } else {
            console.error("uploadCallback() upload file false.");
        }
    }
}

export var uploadPictureServiceInjectables: Array<any> = [
    bind(UploadPictureService).toClass(UploadPictureService)
];