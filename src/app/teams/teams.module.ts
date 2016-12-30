import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ViewTeamsComponent } from './view-teams/view-teams.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamUpdateComponent } from './team-update/team-update.component';

import { TeamsService } from './../../core/services/teams.service';
import { TeamDetailsComponent } from './team-details/team-details.component';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule
    ],
    declarations: [
        ViewTeamsComponent,
        TeamCreateComponent,
        TeamUpdateComponent,
        TeamDetailsComponent
    ],
    providers: [
        TeamsService
    ]
})
export class TeamsModule {

}
