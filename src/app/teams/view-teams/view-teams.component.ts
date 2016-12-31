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
    // public model: Team;
    public teams: Team[];

    constructor(private teamsService: TeamsService) { }

    ngOnInit() {
        // this.model = new Team(0, '', '', new Date(), '', 0);
        this.teamsService.getAll()
                .subscribe(teams => this.teams = teams);
    }
}
