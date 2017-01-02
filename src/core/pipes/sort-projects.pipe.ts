import { Pipe, PipeTransform } from '@angular/core';

import { Project } from './../models/project';

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

@Pipe({ name: 'sortProjects', pure: true })
export class SortProjectsPipe implements PipeTransform {
    project: Project;

    transform(items: any[], sortBy: string = 'Rating', isDesc: boolean = true): Project[] {
        if (!items) { return; }

        let sortFunc = isDesc ? sortDesc : sortAsc;
        let sortingProperties = ['Title', 'Rating', 'Year'];

        switch(sortBy){
            case sortingProperties[0]: sortBy = 'Title'; break;
            case sortingProperties[1]: sortBy = 'imdbRating'; break;
            case sortingProperties[2]: sortBy = 'Year'; break;
        }

        if (isDesc) {
            return items.sort((a, b) => {
                return sortFunc(a[sortBy].toString(), b[sortBy].toString());
            });
        } else {
            return items.sort((a, b) => {
                return sortFunc(a[sortBy].toString(), b[sortBy].toString());
            });
        }
    }
}
