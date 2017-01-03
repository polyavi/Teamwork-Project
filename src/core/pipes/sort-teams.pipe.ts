import { Pipe, PipeTransform } from '@angular/core';

import { Team } from './../models/team';

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
@Pipe({ name: 'sortTeams', pure: true })
export class SortTeamsPipe implements PipeTransform {
    TextStreamBase: Team;

    transform(items: any[], sortBy = 'Name', isDesc = true): Team[] {
        if (!items) { return; }

        let sortFunc = sortAsc;
        let sortingProperties = ['Name', 'Date'];

        switch (sortBy) {
            case sortingProperties[0]: sortBy = 'name'; sortFunc = sortAsc; break;
            case sortingProperties[1]: sortBy = 'createdAt'; sortFunc = sortDesc; break;
        }
            return items.sort((a, b) => {
                return sortFunc(a[sortBy].toString(), b[sortBy].toString());
            });
    }
}
