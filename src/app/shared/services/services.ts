import {globalServiceInjectables} from './GlobalService';
import {userServiceInjectables} from './UserService';
import {userSettingsServiceInjectables} from './UserSettingsService';
import {imagesServiceInjectables} from './ImagesService';
import {userValidationServiceInjectables} from './UserValidationService';
import {uploadPictureServiceInjectables} from '../../components/upload/UploadPictureService';
import {alertingServiceInjectables} from '../../components/alerting/AlertingService';
import {userSettingsColorsServiceInjectables} from '../../components/userSettings/UserSettingsColorsService';

export * from './GlobalService';
export * from './UserService';
export * from './UserSettingsService';
export * from './ImagesService';
export * from './UserValidationService';
export * from '../../components/upload/UploadPictureService';
export * from '../../components/alerting/AlertingService';
export * from '../../components/userSettings/UserSettingsColorsService';

export var servicesInjectables: Array<any> = [
  globalServiceInjectables,
  uploadPictureServiceInjectables,
  userServiceInjectables,
  userSettingsServiceInjectables,
  imagesServiceInjectables,
  alertingServiceInjectables,
  userSettingsColorsServiceInjectables,
  userValidationServiceInjectables
];
