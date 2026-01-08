import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRange',
  standalone: true
})
export class DateRangePipe implements PipeTransform {
  transform(startDate: Date, endDate: Date | null): string {
    // TODO: Format date range (e.g., "Jan 2020 - Present" or "Jan 2020 - Dec 2022")
    return '';
  }
}
