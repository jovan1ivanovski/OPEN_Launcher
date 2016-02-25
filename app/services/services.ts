import {globalServiceInjectables} from './GlobalService';
import {uploadPictureServiceInjectables} from './UploadPictureService';
import {userServiceInjectables} from './UserService';

export * from './GlobalService';
export * from './UploadPictureService';
export * from './UserService';

export var servicesInjectables: Array<any> = [
    globalServiceInjectables,
    uploadPictureServiceInjectables,
    userServiceInjectables
];