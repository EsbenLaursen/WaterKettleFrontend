import {Component, OnInit, ViewChild} from '@angular/core';
import {Temperature} from '../Entities/Temperature';
import {TemperatureService} from '../Services/temperature.service';
import * as moment from 'moment';
import {BaseChartDirective} from 'ng2-charts';



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
          min: new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate(),new Date().getHours() ,new Date().getMinutes()-1,0,0 )
      }}],
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 10,
          max : 100,
        }
      }]
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

  loaded = false;


  temperatures: Temperature[];
  constructor(private tempService: TemperatureService) {
    this.setupGraph();
  }

  setupGraph():void{
    //setInterval(()=>{this.updateGraph()},5000);

    this.lineChartData = [ {data: [], label: 'Kaffen skal være varm for helvede' }];

    this.updateGraph();
  }

  ngOnInit() {
  }

  updateGraph():void{

     this.tempService.getAllTemperatures().subscribe(data=> {
       let temp:Array<any> = [];
      this.temperatures = data["rows"];
      this.temperatures.forEach((t)=> {
        const formattedDate = convertDate(t);
        temp.push ({
          x: formattedDate,
          y: t.temperature
        });
      });
       this.loaded = false;
       this.lineChartData[0].data = temp;
       this.loaded = true;
      console.log(this.lineChartData[0].data);
    },error1 => console.log(error1));

  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
function convertDate(t) {
  const formattedDate = new Date(parseInt(moment(t.createdAt.toString()).format('YYYY'), 0),
    0,
    parseInt(moment(t.createdAt.toString()).format('DD'), 0),
    parseInt(moment(t.createdAt.toString()).format('HH'), 0),
    parseInt(moment(t.createdAt.toString()).format('mm'), 0),
    parseInt(moment(t.createdAt.toString()).format('ss'), 0), 0);
  return formattedDate;
}
