import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, place: any) {
    if (value.length === 0 || place === '') {
      return value;
    }
    let data = value.filter((l) => {
      return l.place.toLowerCase().match(place.toLowerCase());
    });
    return data;
  }
}
