import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { HomeComponent } from './home.component';
//import { ProjectShortInfoComponent } from '../project-short-info/project-short-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    //ProjectShortInfoComponent
  ]
})
export class HomeModule { }
