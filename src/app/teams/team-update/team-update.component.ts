import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from './../../../core/models/team';
import { TeamsService } from './../../../core/services/teams.service';

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.css']
})
export class TeamUpdateComponent implements OnInit {
    model: Team;
    id: number;
    @Output('updated') emitter: EventEmitter<Team> = new EventEmitter<Team>();

    constructor(
      private teamsService: TeamsService,
      private route: ActivatedRoute
    ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
       this.model = this.teamsService.getById(this.id);
     });
    }

    update() {
        this.teamsService.update(this.id,this.model);
        this.emitter.emit(this.model);
    }
}
