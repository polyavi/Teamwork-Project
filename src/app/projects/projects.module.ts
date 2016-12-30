import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects-list/projects.component';
import { ProjectShortInfoComponent } from '../project-short-info/project-short-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectShortInfoComponent
  ]
})
export class ProjectsModule { }
