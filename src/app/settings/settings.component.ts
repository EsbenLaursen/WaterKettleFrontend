import { Component, OnInit } from '@angular/core';
import {SettingsModel} from '../Entities/SettingsModel';
import {SettingsService} from '../Services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public settingsModel: SettingsModel;

  constructor(private SettingsService: SettingsService) {
     this.settingsModel = new SettingsModel();
     this.SettingsService.getSettings().subscribe(settings => {this.settingsModel = settings[0]});
  }

  ngOnInit() {}

  onSubmit(){
    this.SettingsService.putSettings(this.settingsModel).subscribe(response => console.log(response));
  }
}
