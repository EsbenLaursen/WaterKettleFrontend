import { Component, OnInit } from '@angular/core';
import {Temperature} from '../Entities/Temperature';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public lineChartData:Array<any> = [];

//  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'hour',
          displayFormats: {
            hour: 'HH:mm'
          },
          max: new Date(),
          min: new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(),new Date().getHours()-24,0,0,0 )
      }}]
    }
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';




  temperatures: Temperature[];
  constructor() {
    this.temperatures = [
       new Temperature(1, 70,new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(), 0,0,0,0 )),
      new Temperature(2, 76, new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(), 4,0,0,0 )),
      new Temperature(3, 85, new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(), 7,0,0,0 )),
      new Temperature(4, 80, new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(), 24,0,0,0 )),
    ];



    this.lineChartData = [ {data: [], label: 'Kaffen skal være varm for helvede' }];

    this.temperatures.forEach((t)=> {
      this.lineChartData[0].data.push({
        x: t.Created,
        y: t.Value
      });
    }
    );




  }

  ngOnInit() {
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
/*
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }*/

}
