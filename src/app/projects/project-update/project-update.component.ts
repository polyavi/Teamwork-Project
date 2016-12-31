import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from './../../../core/models/project';
import { ProjectsService } from './../../../core/services/projects.service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {
    model: Project;
    id: number;
    @Output('updated') emitter: EventEmitter<Project> = new EventEmitter<Project>();

    constructor(
      private projectsService: ProjectsService,
      private route: ActivatedRoute
    ) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
        // this.model = this.projectsService.getById(this.id);
     });
    }

    update() {
        this.projectsService.update(this.id, this.model);
        this.emitter.emit(this.model);
    }
}
