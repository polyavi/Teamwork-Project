import { Injectable } from '@angular/core';

@Injectable()
export class TeamsService {
  teams: any[] = [];

  getAll(): any[] {
    return this.teams;
  }

  getById(id: number): any {
    return this.teams[id];
  }

  add(team: any) {
    this.teams.push(team);
  }
}
