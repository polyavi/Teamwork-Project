import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Project } from './../models/project';
import { IService } from './iservice';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectsService implements IService {
    projects: Project[] = [];
    public lastId: number;
    private headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    private projectsUrl = 'api/projects';

    constructor(private http: Http) {
        this.getAll().subscribe(projects => this.lastId = projects.length);
    }

    getAll(): Observable<any> {
      return this.http.get(this.projectsUrl)
                      .map((res: Response) => res.json().data as Project[]);
    }

    getById(id: number): Observable<Project> {
        const url = this.projectsUrl + '/' +  id;
        return this.http.get(url)
            .map((res: Response) => res.json().data as Project);
    }

    add(body: any): Promise<Project> {
        return this.http
            .post(this.projectsUrl, JSON.stringify(body), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(project: any): Promise<Project> {
        const url = this.projectsUrl + '/' +  project.id;
        return this.http
            .put(url, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(() => project)
            .catch(this.handleError);
    }

    remove(id: number): Promise<void> {
        const url = this.projectsUrl + '/' +  id;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
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
