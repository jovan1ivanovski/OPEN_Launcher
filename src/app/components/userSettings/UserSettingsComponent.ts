import {Component, Input} from 'angular2/core';

import {PointerType, PointerSize, PointerColor, BackgroundColor} from '../../shared/enums/UserSettingsEnums';

import {UserSettingsColorsService} from './UserSettingsColorsService';

import {UserSettings} from '../../shared/models/UserSettings';

import {EnumEx} from '../../shared/enums/EnumEx';

import {ImagesService} from '../../shared/services/ImagesService';

import {AlertingService} from '../alerting/AlertingService';

@Component({
  selector: 'settings',
  inputs: ['userSettings'],
  templateUrl: './app/components/userSettings/userSettings.html'
})
export class UserSettingsComponent {
  @Input() userSettings: UserSettings;

  ngOnInit() {
    this.userSettings.backgroundColor = BackgroundColor.InColor;
    this.selectBackgroundColor(this.userSettings.backgroundColor);
  }

  public availablePointerColors: PointerColor[] = new Array<PointerColor>();
  public allImages: string[] = new Array<string>();

  constructor(
    private alertingService: AlertingService,
    private pointerColorService: UserSettingsColorsService,
    private imagesService: ImagesService) {
    this.getAvailableImages();
  }

  selectBackgroundColor(backgroundColor: BackgroundColor) {
    this.userSettings.backgroundColor = backgroundColor;
    this.userSettings.pointerColor = null;
    this.availablePointerColors = this.pointerColorService.getPointerColors(backgroundColor);
  }

  selectPointerColor(pointerColor: PointerColor) {
    this.userSettings.pointerColor = pointerColor;
  }

  shouldApplySelectedColorCss(pointerColor: PointerColor): boolean {
    return this.userSettings.pointerColor === pointerColor;
  }

  shouldApplySelectedPointerSizeCss(foo: string): boolean {
    return false;
  }
  selectPointerSize(foo: string) {

  }

  getAvailableImages() {
    this.imagesService.getPointerImages()
      .subscribe(
      data => this.allImages = data,
      err => this.alertingService.addDanger(err.toString()));
  }
}
