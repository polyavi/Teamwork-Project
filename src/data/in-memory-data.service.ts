import { InMemoryDbService } from '../../node_modules/angular-in-memory-web-api';
import { TEAMS } from './teams';
import { PROJECTS } from './projects';
import { USERS } from './users';
import { EVENTS } from './events';
import { TODOS } from './todos';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
        let teams = TEAMS;
        let projects = PROJECTS;
        let users = USERS;
        let events = EVENTS;
        let todos = TODOS;

        return {
            teams,
            projects,
            users,
            events,
            todos
        };
    }
}
