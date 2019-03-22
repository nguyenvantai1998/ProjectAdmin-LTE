import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customProduct'
})
export class CustomProductPipe implements PipeTransform {

  transform(value: string, start: number, end: number): any {
    return value.substr(start, end) + '...';
  }

}
