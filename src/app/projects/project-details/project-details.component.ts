import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from './../../../core/models/project';
import { User } from './../../../core/models/users';
import { Team } from './../../../core/models/team';
import { ProjectsService } from './../../../core/services/projects.service';
import { UsersService } from './../../../core/services/users.service';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
    model: Project;
    project: Project;
    public id: number;
    public title: string;
    public createdAt: string;
    public demo: string;
    public github: string;
    public isFinished: string;
    public team: Team;
    public image_url: string;

    constructor(
      private projectsService: ProjectsService,
      private route: ActivatedRoute,
      public usersService: UsersService
    ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = +params['id'];
      });

      this.projectsService.getById(this.id)
                        .subscribe(project => {
                            this.title = project.title;
                            this.createdAt = project.createdAt;
                            this.demo = project.demo;
                            this.github = project.github;
                            this.isFinished = project.isFinished;
                            this.team = project.team;
                            this.image_url = project.image_url;
                        });
    }
}
