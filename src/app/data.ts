export class Data {
  constructor(
    public id: number,
    public place: string,
    public totalCases: number,
    public totalRecovered: number,
    public totalDeaths: number,
    public activeCases: number
  ) {}
}
