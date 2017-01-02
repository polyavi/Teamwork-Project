import { Component, OnInit , EventEmitter, Output} from '@angular/core';

import { Team } from './../../../core/models/team';
import { User } from './../../../core/models/users';
import { TeamsService } from './../../../core/services/teams.service';
import{FormGroup,FormBuilder,Validators}from '@angular/forms';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
    teamCreateForm: FormGroup;
    authenticated: boolean;
    profile: Object;
    model: Team;
    teams: Team[];
    name: string;
    @Output('create') emitter: EventEmitter<Team> = new EventEmitter<Team>();

    constructor(private teamsService: TeamsService, private fb: FormBuilder) {
        this.teamCreateForm=fb.group({
            'username':[null , Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
            'password':[null , Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])]
        })
     }

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
