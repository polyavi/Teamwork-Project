import { Team } from './../models/team';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamsService {
  teams: Team[] = [];
  lastId: number = 0;

  constructor() {
    // generate some dummy data
    this.teams.push(new Team(1, 'Angular 1', 'onsite', new Date(), 'https://github.com/angular', 3));
    this.teams.push(new Team(2, 'Angular 2', 'onsite', new Date(), 'https://github.com/angular2', 3));
    this.teams.push(new Team(3, 'Directive 3', 'online', new Date(), 'https://github.com/Team-Directive3', 3));
  }

  getAll(): Team[] {
    return this.teams;
  }

  getById(id: number): Team {
    return this.teams.filter(team => team.id === id).pop();
  }

  update(id: number,team: Team): Team {
    console.log('update team',team);
    this.teams.filter(team => team.id === id);
    return team;
  }

  add(team: Team): TeamsService {
    if (!team.id) {
      team.id = ++this.lastId;
    }

    this.teams.push(team);
    return this;
  }
}
