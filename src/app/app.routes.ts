import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import {
    TeamCreateComponent,
    TeamUpdateComponent,
    ViewTeamsComponent,
    TeamDetailsComponent,
    TeamRemoveComponent
} from './teams';
import {
    RegisterComponent,
    LoginComponent
} from './users';
import {
    ProjectCreateComponent,
    ProjectUpdateComponent,
    ViewProjectsComponent,
    ProjectDetailsComponent,
    ProjectRemoveComponent
} from './projects';
import {
    EventShortInfoComponent
} from './events';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },

    { path: 'login', component: LoginComponent },
    { path: 'signin', component: RegisterComponent },

    { path: 'teams', component: ViewTeamsComponent },
    { path: 'teams/create', component: TeamCreateComponent },
    { path: 'teams/update/:id', component: TeamUpdateComponent },
    { path: 'teams/remove/:id', component: TeamRemoveComponent },
    { path: 'teams/:id', component: TeamDetailsComponent },

    { path: 'projects', component: ViewProjectsComponent },
    { path: 'projects/create', component: ProjectCreateComponent },
    { path: 'projects/update/:id', component: ProjectUpdateComponent },
    { path: 'projects/remove/:id', component: ProjectRemoveComponent },
    { path: 'projects/:id', component: ProjectDetailsComponent },

    { path: 'events', component: EventShortInfoComponent },
];
