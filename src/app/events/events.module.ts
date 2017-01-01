import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventShortInfoComponent } from './event-short-info/event-short-info.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
      EventShortInfoComponent
  ]
})
export class EventsModule {

}
