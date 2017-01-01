import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { IService } from './iservice';
import { Team } from './../models/team';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamsService implements IService {
    lastId: number;
    private headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });

    private teamsUrl = 'api/teams';

    constructor(private http: Http) {
        this.getAll().subscribe(teams => this.lastId = teams.length);
    }

    getAll(): Observable<any> {
      return this.http.get(this.teamsUrl)
                      .map((res: Response) => res.json().data as Team[]);
    }

    getById(id: number): Observable<Team> {
        const url = this.teamsUrl + '/' +  id;
        return this.http.get(url)
            .map((res: Response) => res.json().data as Team);
    }

    add(body: any): Promise<Team> {
        return this.http
            .post(this.teamsUrl, JSON.stringify(body), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(team: any): Promise<Team> {
        const url = this.teamsUrl + '/' +  team.id;
        return this.http
            .put(url, JSON.stringify(team), {headers: this.headers})
            .toPromise()
            .then(() => team)
            .catch(this.handleError);
    }

    remove(id: number): Promise<void> {
        const url = this.teamsUrl + '/' +  id;
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
