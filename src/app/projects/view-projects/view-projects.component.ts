import { Component, OnInit } from '@angular/core';

import { ProjectsService } from './../../../core/services/projects.service';
import { Project } from './../../../core/models/project';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css'],
  providers: [ ProjectsService ]
})
export class ViewProjectsComponent implements OnInit {
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
