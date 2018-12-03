import { Component, OnInit } from '@angular/core';
import {SettingsModel} from '../Entities/SettingsModel';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsModel: SettingsModel;
  constructor() { }

  ngOnInit() {
    this.settingsModel = new SettingsModel();
    this.getSettings(this.settingsModel);
  }



  getSettings(model) {
    model.TemperatureNotify = true;
    model.TemperatureValue = 80;
  }
}
