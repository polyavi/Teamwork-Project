import { Component, OnInit , EventEmitter, Output} from '@angular/core';

import { Team } from './../../../core/models/team';
import { TeamsService } from './../../../core/services/teams.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
    model: Team;

    @Output('created') emitter: EventEmitter<Team> = new EventEmitter<Team>();

    constructor(private teamsService: TeamsService) { }

    ngOnInit() {
        this.model = new Team(0, '', '', new Date(), '', 3);
    }

    create() {
        const team = new Team(this.model.id, this.model.name, this.model.form, this.model.createdAt, this.model.github, 
            this.model.maxUsers);
        // console.log(team);
        this.teamsService.add(team);
        this.emitter.emit(team);
    }
}
