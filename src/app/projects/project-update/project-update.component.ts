import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

import { Project } from './../../../core/models/project';
import { ProjectsService } from './../../../core/services/projects.service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
    public model: Project;
    public id: number;
    public title: string;
    public createdAt: Date;
    public demo: string;
    public github: string;
    public isFinished: string;
    public owner_id: number;
    public image_url: string;

    @Output('updated') emitter: EventEmitter<Project> = new EventEmitter<Project>();

    constructor(
      private projectsService: ProjectsService,
      private route: ActivatedRoute,
      private router: Router,
      private notificationsService: NotificationsService
    ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
          this.id = +params['id'];
          this.projectsService.getById(this.id)
                      .subscribe(team => {
                          this.id = team.id;
                          this.createdAt = team.createdAt;
                          this.github = team.github;
                          this.title = team.title;
                          this.demo = team.demo;
                          this.isFinished = team.isFinished;
                          this.owner_id = team.owner_id;
                          this.image_url = team.image_url;
                      });
        });
    }

    update() {
        this.model = new Project(this.id, this.title, this.demo, this.github, this.createdAt, this.isFinished, this.owner_id, this.image_url);
        this.projectsService.update(this.model)
                    .then(() => {
                        this.notificationsService.success('Success', 'Project ' + this.model.title + ' has been successfully updated!');
                        this.router.navigate(['./projects']);
                    });
        this.emitter.emit(this.model);
    }
}
