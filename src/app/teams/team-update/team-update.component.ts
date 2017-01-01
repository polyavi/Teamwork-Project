import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Team } from './../../../core/models/team';
import { User } from './../../../core/models/users';
import { TeamsService } from './../../../core/services/teams.service';

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.css']
})
export class TeamUpdateComponent implements OnInit {
    model: Team;
    public id: number;
    public name: string;
    public form: string;
    public createdAt: Date;
    public github: string;
    public owner_id: number;
    public users: User[];
    public maxUsers: number;
    public image_url: string;

    @Output('updated') emitter: EventEmitter<Team> = new EventEmitter<Team>();

    constructor(
      private teamsService: TeamsService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = +params['id'];
          this.teamsService.getById(this.id)
                      .subscribe(team => {
                          this.id = team.id;
                          this.name = team.name;
                          this.form = team.form;
                          this.createdAt = team.createdAt;
                          this.github = team.github;
                          this.owner_id = team.owner_id;
                          this.users = team.users;
                          this.maxUsers = team.maxUsers;
                          this.image_url = team.image_url;
                      });
        });
    }

    update() {
        this.model = new Team(this.id, this.name, this.form, this.createdAt, this.github, this.image_url, this.maxUsers);
        this.teamsService.update(this.model)
          .then(() => {
                this.router.navigate(['./teams']);
            });
        this.emitter.emit(this.model);
    }
}
