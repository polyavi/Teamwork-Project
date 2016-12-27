import { TeamsService } from './../../core/services/teams.service';
import { Team } from './../../core/models/team';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css']
})
export class ViewTeamsComponent implements OnInit {
    model: Team;
    teams: Team[];

    constructor(private teamService: TeamsService) { }

    ngOnInit() {
        this.model = new Team(0, '', '', new Date(), '');
        this.teams = this.teamService.getAll();
    }
}
