import { Component, OnInit } from '@angular/core';

import { Event } from './../../../core/models/events';
import { EventsService } from './../../../core/services/events.service';
import { UsersService } from './../../../core/services/users.service';


@Component({
  selector: 'app-short-info',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css'],
  providers: [ EventsService ]
})
export class ViewEventsComponent implements OnInit {
    public events: Event[];
    public filterBy: string;
    public filterProperties: string[];
    public sortBy: string;
    public sortingProperties: string[];

    constructor(private eventsService: EventsService, public usersService: UsersService) {

    }

    ngOnInit() {
        this.eventsService.getAll()
                .subscribe(events => {
                    this.events = events;
                    console.log(events);
                });
                this.filterProperties = ['All', 'Upcoming', 'Past'];
                this.filterBy = this.filterProperties[0];
                this.sortingProperties = ['Title', 'Date'];
                this.sortBy = this.sortingProperties[1];
              }
              onFilterChange(e: any) {
                  this.filterBy = e.target.value;
              }
              onSortChange(e: any) {
                  this.sortBy = e.target.value;
              }
            }
