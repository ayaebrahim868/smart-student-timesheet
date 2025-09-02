import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeRange', standalone: true })
export class TimeRangePipe implements PipeTransform {
  transform(start: string, end: string) {
    return `${start} – ${end}`;
  }
}