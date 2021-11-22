import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { CovidDataService } from '../covid-data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  covidData$: Observable<Data[]>;

  constructor(
    private _covidDataService: CovidDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.covidData$ = this._covidDataService.getData();
  }

  onClick(id: number) {
    this.router.navigate(['/table', id]);
  }
}
