import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Temperature} from '../Entities/Temperature';

@Injectable()
export class TemperatureService {
private apiUrl = 'https://hidden-earth-64412.herokuapp.com/WaterKettleModels';
private headers: Headers;
  constructor(private http: Http) {

  }

  getAllTemperatures(): Observable<Temperature[]> {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    /**this.headers.append("Authorization", "Bearer ");**/
    return this.http
      .get(this.apiUrl, {headers: this.headers })
      .map(response => response.json() as Temperature[]);

  }
}


