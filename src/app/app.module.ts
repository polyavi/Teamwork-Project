import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { SimpleNotificationsModule, PushNotificationsModule } from 'angular2-notifications';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { UsersModule } from './users';
import { TeamsModule } from './teams';
import { TodosModule } from './todos';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects';
import { EventsModule } from './events';

import { TeamsService } from './../core/services/teams.service';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService, InMemoryDataOverrideService }  from '../data/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    TeamsModule,
    TodosModule,
    RouterModule.forRoot(APP_ROUTES),
    HomeModule,
    ProjectsModule,
    EventsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataOverrideService, {
      passThruUnknownUrl: true
    }),
    SimpleNotificationsModule,
    PushNotificationsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
      TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
