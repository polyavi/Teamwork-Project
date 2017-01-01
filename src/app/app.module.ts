import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TeamsModule } from './teams';
import { TodosModule } from './todos';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects';
import { EventsModule } from './events';

import { TeamsService } from './../core/services/teams.service';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../data/in-memory-data.service';
import { InMemoryWebApiModule } from '../../node_modules/angular-in-memory-web-api';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TeamsModule,
    TodosModule,
    RouterModule.forRoot(APP_ROUTES),
    HomeModule,
    ProjectsModule,
    EventsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
      TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
