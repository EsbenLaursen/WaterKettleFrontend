import { Component, OnInit } from '@angular/core';
import {SettingsModel} from '../Entities/SettingsModel';
import {SettingsService} from '../Services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsModel: SettingsModel;
  constructor(private SettingsService: SettingsService) { }

  ngOnInit() {
    this.settingsModel = new SettingsModel();
    this.getSettings(this.settingsModel);
  }



  getSettings(model) {
    model.TemperatureNotify = true;
    model.TemperatureValue = 80;
  }
}
