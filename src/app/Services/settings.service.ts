import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SettingsModel} from "../Entities/SettingsModel";


@Injectable()
export class SettingsService {
    private apiUrl = 'https://waterkettleapi.herokuapp.com/settingsmodels/';
//'http://localhost:9000/settingsmodels';
//'https://hidden-earth-64412.herokuapp.com/settingsmodels/';
  private headers: Headers;

  constructor(private http: Http) {
    console.log("heeey");
  }

  putSettings(settings: SettingsModel): Observable<SettingsModel> {

    this.headers = new Headers();
    console.log("PUT");
    console.log(settings);
    settings.weightNotify = true;
    settings.temperatureNotify = true;
    this.headers.append("Content-Type", "application/json");
    return this.http
      .put(this.apiUrl +settings.id, settings,
        {headers: this.headers }).map(response => response.json() as SettingsModel)

  }

  getSettings(): Observable<SettingsModel> {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    /**this.headers.append("Authorization", "Bearer ");**/
    return this.http
      .get(this.apiUrl+'?limit=2', {headers: this.headers })
      .map(response => response.json() as SettingsModel);

  }

}
