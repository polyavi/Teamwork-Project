import { Team } from './../models/team';
import { Injectable } from '@angular/core';

@Injectable()
export class TeamsService {
  teams: Team[] = [];
  lastId: number = 0;

  constructor() { }

  getAll(): Team[] {
    return this.teams;
  }

  getById(id: number): Team {
    return this.teams.filter(team => team.id === id).pop();
  }

  add(team: Team): TeamsService {
    if (!team.id) {
      team.id = ++this.lastId;
    }

    this.teams.push(team);
    return this;
  }
}
