import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from './../../../core/models/team';
import { TeamsService } from './../../../core/services/teams.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  model: Team;
  team: Team;
  id: number;
  public name: string;

  constructor(private teamsService: TeamsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = +params['id'];
      });
      // console.log('id = ' + this.id);
      this.team = this.teamsService.getById(this.id);
      // this.name = this.team.name;
  }

}