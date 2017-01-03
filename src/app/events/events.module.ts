import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ViewEventsComponent } from './view-events/view-events.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { EventRemoveComponent } from './event-remove/event-remove.component';

import { EventsService } from './../../core/services/events.service';
import { EventDetailsComponent } from './event-details/event-details.component';

import { FilterEventsPipe } from './../../core/pipes/filter-events.pipe';
import { SortEventsPipe } from './../../core/pipes/sort-events.pipe';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule
    ],
    declarations: [
        ViewEventsComponent,
        EventCreateComponent,
        EventUpdateComponent,
        EventDetailsComponent,
        EventRemoveComponent,
        FilterEventsPipe,
        SortEventsPipe
    ],
    providers: [
        EventsService
    ]
})
export class EventsModule {

}
