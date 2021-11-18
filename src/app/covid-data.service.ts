import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  constructor() {}

  getData() {
    return [
      {
        id: 1,
        place: 'World',
        totalCases: 255099514,
        totalRecovered: 230635391,
        totalDeaths: 5129836,
        activeCases: 19334287,
      },
      {
        id: 2,
        place: 'India',
        totalCases: 34466598,
        totalRecovered: 33873890,
        totalDeaths: 464153,
        activeCases: 128555,
      },
    ];
  }
}
