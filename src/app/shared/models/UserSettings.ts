import {
  PointerColor,
  PointerSize,
  PointerType,
  BackgroundColor} from '../enums/UserSettingsEnums';

export interface IUserSettings {
  pointerType: PointerType;
  pointerSize: PointerSize;
  pointerColor: PointerColor;
  backgroundColor: BackgroundColor;
}

export class UserSettings implements IUserSettings {
  pointerType: PointerType;
  pointerSize: PointerSize;
  pointerColor: PointerColor;
  backgroundColor: BackgroundColor;
}
