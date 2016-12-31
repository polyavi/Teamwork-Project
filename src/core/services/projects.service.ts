import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Project } from './../models/project';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectsService {
    projects: Project[] = [];
    lastId: number = 0;
    private headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    private projectsUrl = './data/projects.json';

  // constructor() {
  //   // generate some dummy data
  //   this.projects.push(new Project(1, 'Angular 1', 'onsite', new Date(), 'https://github.com/angular', 3));
  //   this.projects.push(new Project(2, 'Angular 2', 'onsite', new Date(), 'https://github.com/angular2', 3));
  //   this.projects.push(new Project(3, 'Directive 3', 'online', new Date(), 'https://github.com/Project-Directive3', 3));
  // }

    constructor(private http: Http) { }

    getById(id: number): Observable<Project> {
        return this.getAll()
                    .map((projects: Project[]) => projects.find(project => project.id === id));
    }


    getAll(): Observable<any> {
      return this.http.get(this.projectsUrl)
                      .map((res: Response) => res.json());
    }

    update(id: number, project: Project): Project {
      console.log('update project', project);
      this.projects.filter(project => project.id === id);
      return project;
    }

    add(body: any) {
        let bodyString = JSON.stringify(body);
        let options = new RequestOptions({ headers: this.headers });

        console.log(bodyString);

        return this.http.post(this.projectsUrl, bodyString, options)
            .map(res => this.extractData(res))
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error');
    }
}
