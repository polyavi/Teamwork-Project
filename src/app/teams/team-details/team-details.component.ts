import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from './../../../core/models/team';
import { User } from './../../../core/models/user';
import { TeamsService } from './../../../core/services/teams.service';

@Component({
    selector: 'app-team-details',
    templateUrl: './team-details.component.html',
    styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
    model: Team;
    team: Team;
    public id: number;
    public name: string;
    public form: string;
    public createdAt: Date;
    public github: string;
    public owner: User;
    public users: User[];
    public maxUsers: number;
    public image_url: string;

    constructor(private teamsService: TeamsService, private route: ActivatedRoute) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = +params['id'];
      });

      this.teamsService.getById(this.id)
                        .subscribe(team => {
                            this.name = team.name;
                            this.form = team.form;
                            this.createdAt = team.createdAt;
                            this.github = team.github;
                            this.owner = team.owner;
                            this.users = team.users;
                            this.maxUsers = team.maxUsers;
                            this.image_url = team.image_url;
                        });
    }
}
