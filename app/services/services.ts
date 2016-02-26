import {globalServiceInjectables} from './GlobalService';
import {uploadPictureServiceInjectables} from './UploadPictureService';
import {userServiceInjectables} from './UserService';
import {avatarServiceInjectables} from './avatarService';

export * from './GlobalService';
export * from './UploadPictureService';
export * from './UserService';
export * from './avatarService';

export var servicesInjectables: Array<any> = [
    globalServiceInjectables,
    uploadPictureServiceInjectables,
    userServiceInjectables,
    avatarServiceInjectables
];