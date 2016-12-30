import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import {
    TeamCreateComponent,
    TeamUpdateComponent,
    ViewTeamsComponent,
    TeamDetailsComponent
} from './teams';

// login page component
import { LoginComponent } from './login/login.component';
// register page component
import { RegisterComponent } from './register/register.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: RegisterComponent },
    { path: 'teams', component: ViewTeamsComponent },
    { path: 'teams/create', component: TeamCreateComponent },
    { path: 'teams/update/:id', component: TeamUpdateComponent },
    // { path: 'teams/remove/:id', component: TeamRemoveComponent },
    { path: 'teams/:id', component: TeamDetailsComponent }
];
