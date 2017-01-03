import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ChangeImageWithDefaultDirective } from './../../core/directives/change-image-with-default.directive';
import { ChangeFontColorDirective } from './../../core/directives/change-font-color.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    ChangeImageWithDefaultDirective,
    ChangeFontColorDirective
  ]
})
export class HomeModule { }
