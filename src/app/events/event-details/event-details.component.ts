import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Event } from './../../../core/models/events';
import { User } from './../../../core/models/users';
import { Team } from './../../../core/models/team';
import { EventsService } from './../../../core/services/events.service';
import { UsersService } from './../../../core/services/users.service';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    model: Event;
    public event: Event;
    public id: number;
    public title: string;
    public owner_id: number;
    public when: string;
    public where: string;
    public type: string;
    public image_url: string;
    public purpose: string;

    constructor(
      private eventsService: EventsService,
      private route: ActivatedRoute,
      public usersService: UsersService
    ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = +params['id'];
      });

      this.eventsService.getById(this.id)
                        .subscribe(event => {
                            this.title = event.title;
                            this.when = event.when;
                            this.where = event.where;
                            // this.owner_id = event.owner_id;
                            this.type = event.type;
                            this.purpose = event.purpose;
                            this.image_url = event.image_url;
                        });
    }
}
