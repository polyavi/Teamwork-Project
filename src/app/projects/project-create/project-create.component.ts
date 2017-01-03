import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { Project } from './../../../core/models/project';
import { User } from './../../../core/models/users';
import { ProjectsService } from './../../../core/services/projects.service';
import { UsersService } from './../../../core/services/users.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
    model: Project;
    projects: Project[];
    title: string;
    @Output('create') emitter: EventEmitter<Project> = new EventEmitter<Project>();

    constructor(
        private projectsService: ProjectsService,
        private router: Router,
        private notificationsService: NotificationsService,
        public usersService: UsersService
    ) { }

    ngOnInit() {
        this.model = new Project(0, '', '', '', new Date(),'', 0, '');
    }

    create() {
        const project = new Project(++this.projectsService.lastId, this.model.title, this.model.demo, this.model.github,
            new Date(), 'in progress', this.usersService.getLoggedUser().id, this.model.image_url);

        if (!project) { return; }
        this.projectsService.add(project)
            .then(() => {
                this.notificationsService.success('Success', 'Project ' + project.title + ' has been successfully created!');
                this.router.navigate(['./projects']);
            });

        this.emitter.emit(project);
    }
}
