import { Pipe, PipeTransform } from '@angular/core';
import { Event } from './../models/events';

@Pipe({ name: 'filterEvents', pure: true })
export class FilterEventsPipe implements PipeTransform {
    transform(items: Event[], filterValue = 'All'): Event[] {
        if (!items) {
            return;
        }

        if (filterValue === 'All') {
            return items;
        }

        return items.filter(item =>
            item.type.toLocaleLowerCase()
                .indexOf(filterValue.toLocaleLowerCase()) > -1);
    }
}
