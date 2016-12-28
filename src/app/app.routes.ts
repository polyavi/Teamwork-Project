import { Routes } from '@angular/router';

import { HomeComponent} from './home';
import {
    TeamCreateComponent,
    ViewTeamsComponent
} from './teams';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'teams', component: ViewTeamsComponent },
    { path: 'team/create', component: TeamCreateComponent }
];

