import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { Data } from '../data';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DifferentLoc } from '../differentloc';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  public index: number = 0;
  public differentLocations: DifferentLoc[] = [];

  public place: any;

  constructor(
    private _covidDataService: CovidDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.index = id !== null ? parseInt(id) - 1 : 0;
      this._covidDataService
        .getData()
        .subscribe(
          (data) =>
            (this.differentLocations = data[this.index].differentlocations)
        );
    });
  }

  search() {
    if (this.place === '') {
      this.ngOnInit();
    } else {
      this.differentLocations = this.differentLocations.filter((l) => {
        return l.place.toLowerCase().match(this.place.toLowerCase());
      });
    }
  }

  sortAlphabetically() {
    this.differentLocations.sort((a, b) => {
      const place1 = a.place.toLowerCase();
      const place2 = b.place.toLowerCase();
      let comparison = 0;

      if (place1 > place2) {
        comparison = 1;
      } else if (place1 < place2) {
        comparison = -1;
      }
      return comparison;
    });
  }
}
