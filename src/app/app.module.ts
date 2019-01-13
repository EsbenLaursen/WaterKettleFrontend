import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import { SettingsComponent } from './settings/settings.component';
import { HistoryComponent } from './history/history.component';
import {FormsModule} from '@angular/forms';
import {MdCardModule} from '@angular/material';
import {TemperatureService} from './Services/temperature.service';
import { HttpModule } from '@angular/http';
import {SettingsService} from './Services/settings.service';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: HomeComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToptoolbarComponent,
    SettingsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    MdCardModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule, MdCardModule ],
  providers: [TemperatureService,SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
