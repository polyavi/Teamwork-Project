import { Team } from './team';

export class Project {
    id: number;
    title: string;
    createdAt: string;
    demo: string;
    github: string;
    isFinished: string;
    image_url: string;
    owner_id: number;
    team: Team;

    constructor(id: number, title: string, demo: string, github: string, createdAt: string, isFinished: string,
                    owner_id: number, image_url: string) {
        this.id = id;
        this.title = title;
        this.demo = demo;
        this.github = github;
        this.createdAt = createdAt;
        this.isFinished = isFinished;
        this.owner_id = owner_id;
        this.image_url = image_url;
    }
};
