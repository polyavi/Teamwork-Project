import { Router } from '@angular/router';
import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Team } from './../../../core/models/team';
import { User } from './../../../core/models/users';
import { TeamsService } from './../../../core/services/teams.service';
import { NotificationsService } from './../../../../node_modules/angular2-notifications';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
    public teamCreateForm: FormGroup;
    public authenticated: boolean;
    public profile: Object;
    public model: Team;
    public teams: Team[];
    public name: string;
    public options: Object;
    @Output('create') emitter: EventEmitter<Team> = new EventEmitter<Team>();

    constructor(
        private teamsService: TeamsService,
        private formBuilder: FormBuilder,
        private notificationsService: NotificationsService,
        private router: Router
    ) {
        this.teamCreateForm = formBuilder.group({
            'username': [null , Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
            'password': [null , Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])]
        });
     }

    ngOnInit() {
        this.model = new Team(0, '', '', new Date(), '', '', '', 3);
        this.options = { timeOut: 1500, pauseOnHover: true, showProgressBar: false, animate: 'scale', position: ['left', 'top'] };
    }

    create(): void {
        const team = new Team(++this.teamsService.lastId, this.model.name, this.model.form, this.model.createdAt, this.model.github,
            'enrolling', this.model.image_url, this.model.maxUsers);

        if (!team) { return; }
        this.teamsService.add(team)
            .then(returnTeam => {
                this.notificationsService.success(this.name, 'Has been successfully created!');
                this.router.navigate(['/teams']);
            });

        this.emitter.emit(team);
    }
}
