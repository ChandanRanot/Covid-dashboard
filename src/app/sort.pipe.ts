import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, doSort: boolean) {
    if (!doSort) {
      return value;
    }
    value.sort((a, b) => {
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

    return value;
  }
}
