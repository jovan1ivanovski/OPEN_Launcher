import {globalServiceInjectables} from './GlobalService';
import {userServiceInjectables} from './UserService';
import {avatarServiceInjectables} from './AvatarService';
import {uploadPictureServiceInjectables} from '../../components/upload/UploadPictureService';
import {alertingServiceInjectables} from '../../components/alerting/AlertingService';

export * from './GlobalService';
export * from './UserService';
export * from './AvatarService';
export * from '../../components/upload/UploadPictureService';
export * from '../../components/alerting/AlertingService';

export var servicesInjectables: Array<any> = [
    globalServiceInjectables,
    uploadPictureServiceInjectables,
    userServiceInjectables,
    avatarServiceInjectables,
    alertingServiceInjectables
];