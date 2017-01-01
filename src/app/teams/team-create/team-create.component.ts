import { Component, OnInit , EventEmitter, Output} from '@angular/core';

import { Team } from './../../../core/models/team';
import { User } from './../../../core/models/users';
import { TeamsService } from './../../../core/services/teams.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
    model: Team;
    teams: Team[];
    name: string;
    @Output('create') emitter: EventEmitter<Team> = new EventEmitter<Team>();

    constructor(private teamsService: TeamsService) { }

    ngOnInit() {
        this.model = new Team(0, '', '', new Date(), '', '', 3);
    }

    create(): void {
        const team = new Team(++this.teamsService.lastId, this.model.name, this.model.form, this.model.createdAt, this.model.github,
            this.model.image_url, this.model.maxUsers);

        if (!team) { return; }
        this.teamsService.add(team)
            .then(returnTeam => {

            });

        this.emitter.emit(team);
    }
}
