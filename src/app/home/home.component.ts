import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { CovidDataService } from '../covid-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public covidData: Data[] = [];

  constructor(
    private _covidDataService: CovidDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this._covidDataService
      .getData()
      .subscribe((data) => (this.covidData = data));
  }

  onClick(id: number) {
    this.router.navigate(['/table', id]);
  }
}
