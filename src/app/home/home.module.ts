import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ProjectShortInfoComponent } from '../projects/project-short-info/project-short-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    ProjectShortInfoComponent
  ]
})
export class HomeModule { }
