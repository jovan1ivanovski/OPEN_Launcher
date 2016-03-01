import {globalServiceInjectables} from './GlobalService';
import {uploadPictureServiceInjectables} from './UploadPictureService';
import {userServiceInjectables} from './UserService';
import {avatarServiceInjectables} from './avatarService';
import {alertingServiceInjectables} from './AlertingService';

export * from './GlobalService';
export * from './UploadPictureService';
export * from './UserService';
export * from './avatarService';
export * from './AlertingService';

export var servicesInjectables: Array<any> = [
    globalServiceInjectables,
    uploadPictureServiceInjectables,
    userServiceInjectables,
    avatarServiceInjectables,
    alertingServiceInjectables
];