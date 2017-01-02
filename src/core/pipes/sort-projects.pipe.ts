import { Pipe, PipeTransform } from '@angular/core';

import { Project } from './../models/project';

function sortAsc(a: string, b: string) {
    if (isNaN(+a) && isNaN(+b)) {
        return a.localeCompare(b);
    }

    return +a - +b;
}

@Pipe({ name: 'sortProjects', pure: true })
export class SortProjectsPipe implements PipeTransform {
    TextStreamBase: Project;

    transform(items: any[], sortBy: string = 'Title', isDesc: boolean = true): Project[] {
        if (!items) { return; }

        let sortFunc = sortAsc;
        let sortingProperties = ['Title', 'Date'];

        switch(sortBy){
            case sortingProperties[0]: sortBy = 'title'; break;
            case sortingProperties[1]: sortBy = 'createdAt'; break;
        }
            return items.sort((a, b) => {
                return sortFunc(a[sortBy].toString(), b[sortBy].toString());
            });
    }
}
