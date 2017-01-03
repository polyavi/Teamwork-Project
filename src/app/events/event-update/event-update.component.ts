import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { Event } from './../../../core/models/events';
import { EventsService } from './../../../core/services/events.service';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {
    public model: Event;
    public id: number;
    public title: string;
    public when: string;
    public where: string;
    public type: string;
    public purpose: string;
    public image_url: string;

    @Output('updated') emitter: EventEmitter<Event> = new EventEmitter<Event>();

    constructor(
      private eventsService: EventsService,
      private route: ActivatedRoute,
      private router: Router,
      private notificationsService: NotificationsService
    ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = +params['id'];
          this.eventsService.getById(this.id)
                      .subscribe(team => {
                          this.id = team.id;
                          this.when = team.when;
                          this.where = team.where;
                          this.title = team.title;
                          this.type = team.type;
                          this.purpose = team.purpose;
                          this.image_url = team.image_url;
                      });
        });
    }

    update() {
        this.model = new Event(this.id, this.model.title, this.model.when, 'upcoming', this.model.where,
                          this.model.purpose, this.model.image_url);
        this.eventsService.update(this.model)
                    .then(() => {
                        this.notificationsService.success('Success', 'Event ' + this.model.title + ' has been successfully updated!');
                        this.router.navigate(['./events']);
                    });
        this.emitter.emit(this.model);
    }
}
