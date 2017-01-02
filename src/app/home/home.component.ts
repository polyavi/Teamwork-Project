import { Component, OnInit } from '@angular/core';

import { ProjectsService } from './../../core/services/projects.service';
import { Project } from './../../core/models/project';
import { TeamsService } from './../../core/services/teams.service';
import { Team } from './../../core/models/team';
import { EventsService } from './../../core/services/events.service';
import { Event } from './../../core/models/events';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectsService, TeamsService, EventsService]
})
export class HomeComponent implements OnInit {
  public projects: Project[];
  public teams: Team[];
  public events: Event[];

  constructor(private projectsService: ProjectsService, private teamsService: TeamsService, private eventsService: EventsService) { }

  ngOnInit() {
    this.projectsService.getAll()
      .subscribe(projects => {
        this.projects = projects;
        // console.log(projects);
      });
    this.teamsService.getAll()
      .subscribe(teams => {
        this.teams = teams;
        // console.log(teams);
      });
    this.eventsService.getAll()
      .subscribe(events => {
        this.events = events;
        // console.log(events);
      });

  }
}
