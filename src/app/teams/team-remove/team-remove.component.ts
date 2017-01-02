import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { Team } from './../../../core/models/team';
import { TeamsService } from './../../../core/services/teams.service';

@Component({
  selector: 'app-team-remove',
  templateUrl: './team-remove.component.html',
  styleUrls: ['./team-remove.component.css']
})
export class TeamRemoveComponent implements OnInit {

    public id: number;
    constructor(
        private teamsService: TeamsService,
        private route: ActivatedRoute,
        private router: Router,
        private notificationsService: NotificationsService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        this.teamsService
            .remove(this.id)
            .then(() => {
                this.notificationsService.success('', 'Has been successfully removed!');
                this.router.navigate(['./teams']);
            });
    }
}
