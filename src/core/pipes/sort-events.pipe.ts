import { Pipe, PipeTransform } from '@angular/core';

import { Event } from './../models/events';

function sortAsc(a: string, b: string) {
    if (isNaN(+a) && isNaN(+b)) {
        return a.localeCompare(b);
    }

    return +a - +b;
}
function sortDesc(a: string, b: string) {
    if (isNaN(+a) && isNaN(+b)) {
        return b.localeCompare(a);
    }

    return +b - +a;
}
@Pipe({ name: 'sortEvents', pure: true })
export class SortEventsPipe implements PipeTransform {
    TextStreamBase: Event;

    transform(items: any[], sortBy = 'Title'): Event[] {
        if (!items) { return; }

        let sortFunc;
        let sortingProperties = ['Title', 'Date'];

        switch (sortBy) {
            case sortingProperties[0]: sortBy = 'title'; sortFunc = sortAsc; break;
            case sortingProperties[1]: sortBy = 'when'; sortFunc = sortDesc; break;
        }
            return items.sort((a, b) => {
                return sortFunc(a[sortBy].toString(), b[sortBy].toString());
            });
    }
}
