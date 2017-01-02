import { User } from './users';

export class Team {
    id: number;
    name: string;
    form: string;
    createdAt: Date;
    github: string;
    owner_id: number;
    isFilled: string;
    users: User[];
    maxUsers: number;
    image_url: string;

    constructor(id: number, name: string, form: string, createdAt: Date, github: string, image_url: string, isFilled: string, maxUsers: number) {
        this.id = id;
        this.name = name;
        this.form = form;
        this.createdAt = createdAt;
        this.github = github;
        this.isFilled = isFilled;
        this.image_url = image_url;
        this.maxUsers = maxUsers;
    }
}
