import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Http, Response, Headers} from "angular2/http";

import {MultipartItem} from "../../plugins/multipart-upload/multipart-item";
import {MultipartUploader} from "../../plugins/multipart-upload/multipart-uploader";

const URL = 'http://localhost:3000/api/upload';

@Component({
    selector: 'uploadPicture',
    templateUrl: `./app/views/uploadPicture.html`
})

export class UploadPictureComponent {
    public spanText: string = "Loading...";
    public selectedFiles;

    private uploader: MultipartUploader = new MultipartUploader({ url: URL });
    private multipartItem: MultipartItem = new MultipartItem(this.uploader);
    
    upload : () => void;
    uploadCallback: (data) => void;

    constructor(public http: Http) {
        this.upload = () => {
			console.debug("home.ts & upload() ==>");
			if (this.multipartItem == null){
				this.multipartItem = new MultipartItem(this.uploader);
			}
			if (this.multipartItem.formData == null)
				this.multipartItem.formData = new FormData();

			this.multipartItem.formData.append("userPhoto",  this.selectedFiles[0]);
            this.multipartItem.withCredentials = false;
			this.multipartItem.callback = this.uploadCallback;
			this.multipartItem.upload();
		}
        
        this.uploadCallback = (data) => {
			console.debug("home.ts & uploadCallback() ==>");
			if (data){
				console.debug("home.ts & uploadCallback() upload file success.");
			}else{
				console.error("home.ts & uploadCallback() upload file false.");
			}
		}
    }

    onChange(event) {
        this.selectedFiles = event.srcElement.files;
        console.log(this.selectedFiles);

//         if (this.multipartItem == null) {
//             this.multipartItem = new MultipartItem(this.uploader);
//         }
//         if (this.multipartItem.formData == null) {
//             this.multipartItem.formData = new FormData();
//         }
// 
//         this.multipartItem.formData.append("userPhoto", this.selectedFiles[0]);
// 
//         this.multipartItem.callback = this.uploadCallback;
//         this.multipartItem.withCredentials = false;
//         this.multipartItem.upload();
                
        // this.http.post("http://localhost:3000/api/upload", this.selectedFiles)
        //     .subscribe((res: Response) => {
        //         this.spanText = res.json();
        //     });
    }
}
