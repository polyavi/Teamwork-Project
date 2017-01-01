import { Component, OnInit } from '@angular/core';

import { Event } from './../../../core/models/events';
import { EventsService } from './../../../core/services/events.service';


@Component({
  selector: 'app-short-info',
  templateUrl: './event-short-info.component.html',
  styleUrls: ['./event-short-info.component.css'],
  providers: [ EventsService ]
})
export class EventShortInfoComponent implements OnInit {
    public selectedItemName: String;
    public events: Event[];

    constructor(private eventsService: EventsService) {

    }

    ngOnInit() {
        this.eventsService.getAll()
            .subscribe(events => {
                this.events = events;
                console.log(events);
            });
    }

    markSelectedItem(itemName: string) {
        itemName = itemName || '';
        this.selectedItemName = itemName;
    }
}
