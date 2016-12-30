import { Component, OnInit , EventEmitter, Output} from '@angular/core';

import { Team } from './../../../core/models/team';
import { TeamsService } from './../../../core/services/teams.service';

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.css']
})
export class TeamUpdateComponent implements OnInit {
    model: Team;

    @Output('updated') emitter: EventEmitter<Team> = new EventEmitter<Team>();

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
