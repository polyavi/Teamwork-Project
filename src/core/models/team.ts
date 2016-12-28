import { User } from './user';

export class Team {
    id: number;
    name: string;
    form: string;
    createdAt: Date;
    github: string;
    owner: User;
    users: User[];
    maxUsers: number;

    constructor(id: number, name: string, form: string, createdAt: Date, github: string, maxUsers: number) {
        this.id = id;
        this.name = name;
        this.form = form;
        this.createdAt = createdAt;
        this.github = github;
        this.maxUsers = maxUsers;
    }
};
