import { Component, OnInit } from '@angular/core';

import { ProjectsService } from './../../core/services/projects.service';
import { Project } from './../../core/models/project';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ProjectsService ]
})
export class HomeComponent implements OnInit {
  public projects: Project[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
      this.projectsService.getAll()
              .subscribe(projects => {
                  this.projects = projects;
                  console.log(projects);
              });
  }

}
