import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { CovidDataService } from '../covid-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public covidData: Data[] = [];

  constructor(private _covidDataService: CovidDataService) {}

  ngOnInit() {
    this.covidData = this._covidDataService.getData();
  }
}
