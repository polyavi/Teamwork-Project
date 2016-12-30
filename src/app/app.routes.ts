import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import {
    TeamCreateComponent,
    ViewTeamsComponent,
    TeamDetailsComponent
} from './teams';
import { ProjectsComponent} from './projects';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'teams', component: ViewTeamsComponent },
    { path: 'team/create', component: TeamCreateComponent },
    { path: 'teams/:id', component: TeamDetailsComponent }
];
