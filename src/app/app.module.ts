import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TeamsService } from './../core/services/teams.service';

import { AppComponent } from './app.component';
import { ViewTeamsComponent } from './view-teams/view-teams.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTeamsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
