import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './../models/project';

@Pipe({ name: 'filterProjects', pure: true })
export class FilterProjectsPipe implements PipeTransform {
    transform(items: Project[], filterValue = 'All'): Project[] {
        if (!items) {
            return;
        }

        if (filterValue === 'All') {
            return items;
        }

        return items.filter(item =>
            item.isFinished.toLocaleLowerCase()
                .indexOf(filterValue.toLocaleLowerCase()) > -1);
    }
}
