import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { Event } from './../../../core/models/events';
import { EventsService } from './../../../core/services/events.service';

@Component({
  selector: 'app-event-remove',
  templateUrl: './event-remove.component.html',
  styleUrls: ['./event-remove.component.css']
})
export class EventRemoveComponent implements OnInit {
    id: number;

    constructor(
        private eventsService: EventsService,
        private route: ActivatedRoute,
        private router: Router,
        private notificationsService: NotificationsService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        this.eventsService
            .remove(this.id)
            .then(() => {
                this.notificationsService.success('Success', 'Event has been successfully removed!');
                this.router.navigate(['./events']);
        });
    }
}
