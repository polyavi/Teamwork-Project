import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ViewTeamsComponent } from './view-teams/view-teams.component';
import { TeamCreateComponent } from './team-create/team-create.component';

import { TeamsService } from './../../core/services/teams.service';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule
    ],
    declarations: [
        ViewTeamsComponent,
        TeamCreateComponent
    ],
    providers: [
        TeamsService
    ]
})
export class TeamsModule {

}
