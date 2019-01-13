import { Component, OnInit } from '@angular/core';
import {SettingsModel} from '../Entities/SettingsModel';
import {SettingsService} from '../Services/settings.service';
import {Http} from "@angular/http";
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  private apiUrl = 'https://waterkettleapi.herokuapp.com/settingsmodels';
 public settingsModel: SettingsModel;
  constructor(private SettingsService: SettingsService, private http: Http) {
  this.settingsModel = new SettingsModel();
  this.SettingsService.getSettings().subscribe(settings => {this.settingsModel = settings[0]});

  }

  ngOnInit() {




}
onSubmit(){
    this.SettingsService.putSettings(this.settingsModel);
  console.log(this.settingsModel);
}



postSettings(){
    console.log("clicking");
}
}
