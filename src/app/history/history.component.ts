import { Component, OnInit } from '@angular/core';
import {Temperature} from '../Entities/Temperature';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  temperatures: Temperature[];

  constructor() {
    this.temperatures = [
      new Temperature(1, 70,new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(), 0,0,0,0 )),
      new Temperature(2, 76, new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(), 4,0,0,0 )),
      new Temperature(3, 85, new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(), 7,0,0,0 )),
      new Temperature(4, 80, new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(), 24,0,0,0 )),
    ];

  }


  ngOnInit() {
  }

}
