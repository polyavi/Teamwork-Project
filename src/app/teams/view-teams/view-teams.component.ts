import { Component, OnInit } from '@angular/core';

import { TeamsService } from './../../../core/services/teams.service';
import { Team } from './../../../core/models/team';

@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css'],
  providers: [ TeamsService ]
})
export class ViewTeamsComponent implements OnInit {
    public model: Team;
    public teams: Team[];

    constructor(
      private teamService: TeamsService
    ) { }

    ngOnInit() {
      this.teams = this.teamService.getAll();
    }
}
