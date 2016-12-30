import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Team } from './../models/team';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamsService {
    teams: Team[] = [];
    lastId: number = 0;
    private headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    private teamsUrl = './data/teams.json';

  // constructor() {
  //   // generate some dummy data
  //   this.teams.push(new Team(1, 'Angular 1', 'onsite', new Date(), 'https://github.com/angular', 3));
  //   this.teams.push(new Team(2, 'Angular 2', 'onsite', new Date(), 'https://github.com/angular2', 3));
  //   this.teams.push(new Team(3, 'Directive 3', 'online', new Date(), 'https://github.com/Team-Directive3', 3));
  // }

    constructor(private http: Http) { }

    getById(id: number): Observable<Team> {
        return this.getAll()
                    .map((teams: Team[]) => teams.find(team => team.id === id));
    }


    getAll(): Observable<any> {
      return this.http.get(this.teamsUrl)
                      .map((res: Response) => res.json());
    }

    update(id: number, team: Team): Team {
      console.log('update team', team);
      this.teams.filter(team => team.id === id);
      return team;
    }

    add(body: any) {
        let bodyString = JSON.stringify(body);
        let options = new RequestOptions({ headers: this.headers });

        console.log(bodyString);

        return this.http.post(this.teamsUrl, bodyString, options)
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
