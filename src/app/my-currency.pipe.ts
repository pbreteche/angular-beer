import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe extends CurrencyPipe implements PipeTransform {

  transform(value: number): string {
    return super.transform(value, 'EUR', 'symbol', '0.2-2', 'fr');
  }

}
