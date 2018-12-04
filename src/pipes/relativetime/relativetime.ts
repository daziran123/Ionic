import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'relativetime',
})
export class RelativetimePipe implements PipeTransform {

  transform(value: string, ...args) {
    return  moment(value).toNow();
  }
}
