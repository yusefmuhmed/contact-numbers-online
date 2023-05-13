import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiSearch'
})
export class MultiSearchPipe implements PipeTransform {

    transform(items: any[], searchCriteria: string): any[] {
      if (!items) {
        return [];
      }
      if (!searchCriteria) {
        return items;
      }
      const searchTerms = searchCriteria.split(' ');
      return items.filter(item => {
        return searchTerms.every(term => {
          return JSON.stringify(item).toLowerCase().includes(term.toLowerCase());
        });
      });
    }
}
