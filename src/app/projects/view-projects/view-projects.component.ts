import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../core/services/users.service';

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
    private filterProperties: string[];
    private filterBy: string;
    private sortBy: string;
    private sortingProperties: string[];

    constructor(private projectsService: ProjectsService, public usersService: UsersService) { }

    ngOnInit() {
        this.projectsService.getAll()
                .subscribe(projects => {
                    this.projects = projects;
                    console.log(projects);
                });
                this.filterProperties = ['Finished', 'In progress'];
                this.filterBy = this.filterProperties[1];
                this.sortingProperties = ['Title', 'Date'];
                this.sortBy = this.sortingProperties[1];
              }
              onFilterChange(e: any) {
                  this.filterBy = e.target.value;
              }
              onSortChange(e: any) {
                  this.sortBy = e.target.value;
              }
            }
