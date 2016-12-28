import { Team } from './../models/team';
import { Injectable } from '@angular/core';

@Injectable()
export class TeamsService {
  teams: Team[] = [];

  getAll(): Team[] {
    return this.teams;
  }

  getById(id: number): Team {
    return this.teams[id];
  }

  add(team: Team) {
    this.teams.push(team);
  }
}
