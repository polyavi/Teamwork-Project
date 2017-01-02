import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectRemoveComponent } from './project-remove/project-remove.component';

import { ProjectsService } from './../../core/services/projects.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { FilterProjectsPipe } from './../../core/pipes/filter-projects.pipe';
import { SortProjectsPipe } from './../../core/pipes/sort-projects.pipe';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule
    ],
    declarations: [
        ViewProjectsComponent,
        ProjectCreateComponent,
        ProjectUpdateComponent,
        ProjectDetailsComponent,
        ProjectRemoveComponent,
        FilterProjectsPipe,
        SortProjectsPipe
    ],
    providers: [
        ProjectsService
    ]
})
export class ProjectsModule {

}
