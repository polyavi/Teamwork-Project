import { Pipe, PipeTransform } from '@angular/core';

import { Event } from './../models/events';

function sortAsc(a: string, b: string) {
    if (isNaN(+a) && isNaN(+b)) {
        return a.localeCompare(b);
    }

    return +a - +b;
}

@Pipe({ name: 'sortEvents', pure: true })
export class SortEventsPipe implements PipeTransform {
    TextStreamBase: Event;

    transform(items: any[], sortBy = 'Title', isDesc = true): Event[] {
        if (!items) { return; }

        let sortFunc = sortAsc;
        let sortingProperties = ['Title', 'Date'];

        switch (sortBy) {
            case sortingProperties[0]: sortBy = 'title'; break;
            case sortingProperties[1]: sortBy = 'when'; break;
        }
            return items.sort((a, b) => {
                return sortFunc(a[sortBy].toString(), b[sortBy].toString());
            });
    }
}
