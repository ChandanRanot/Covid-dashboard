import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Data } from '../data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  public index: number = 0;
  covidData$: Observable<Data[]>;
  public place: any = '';
  public doSort: boolean = false;

  constructor(
    private _covidDataService: CovidDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.index = id !== null ? parseInt(id) - 1 : 0;
      this.covidData$ = this._covidDataService.getData();
    });
  }

  sortAlphabetically() {
    this.doSort = true;
  }
}
