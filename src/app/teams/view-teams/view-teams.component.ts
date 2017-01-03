import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../core/services/users.service';

import { TeamsService } from './../../../core/services/teams.service';
import { Team } from './../../../core/models/team';
import { User } from './../../../core/models/users';

@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css'],
  providers: [ TeamsService ]
})
export class ViewTeamsComponent implements OnInit {
    private filterProperties: string[];
    private filterBy: string;

    public sortBy: string;
    public sortingProperties: string[];
    public teams: Team[];
    // public isOwner: boolean = true;

    constructor(private teamsService: TeamsService, public usersService: UsersService) { }
    ngOnInit() {
        this.teamsService.getAll()
                .subscribe(teams => {
                    this.teams = teams;
                    console.log(teams);

                    let user: User = this.usersService.getLoggedUser();
                    for (let i = 0; i < teams.length; i++) {
                        teams[i].isOwner = teams[i].owner_id == user.id;
                    }
                });
        this.filterProperties = ['All', 'Filled', 'Enrolling'];
        this.filterBy = this.filterProperties[0];
        this.sortingProperties = ['Name', 'Date'];
        this.sortBy = this.sortingProperties[1];
    }

    onFilterChange(e: any) {
        this.filterBy = e.target.value;
    }

    onSortChange(e: any) {
        this.sortBy = e.target.value;
    }
}
