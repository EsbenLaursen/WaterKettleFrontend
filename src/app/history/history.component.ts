import { Component, OnInit } from '@angular/core';
import {Temperature} from '../Entities/Temperature';
import {TemperatureService} from '../Services/temperature.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  temperatures: Temperature[];

  constructor(private tempService: TemperatureService) {

    console.log(this.temperatures);

    this.tempService.getAllTemperatures().subscribe(data=> {
      this.temperatures = data["rows"];
    },error1 => console.log(error1));
  }


  ngOnInit() {
  }

}
