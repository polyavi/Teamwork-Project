import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ViewTeamsComponent } from './view-teams/view-teams.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamUpdateComponent } from './team-update/team-update.component';
import { TeamRemoveComponent } from './team-remove/team-remove.component';

import { TeamsService } from './../../core/services/teams.service';
import { TeamDetailsComponent } from './team-details/team-details.component';

import { FilterTeamsPipe } from './../../core/pipes/filter-teams.pipe';
import { SortTeamsPipe } from './../../core/pipes/sort-teams.pipe';
@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ViewTeamsComponent,
        TeamCreateComponent,
        TeamUpdateComponent,
        TeamDetailsComponent,
        TeamRemoveComponent,
        FilterTeamsPipe,
        SortTeamsPipe
    ],
    providers: [
        TeamsService
    ]
})
export class TeamsModule {

}
