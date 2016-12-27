export class Team {
    id: number;
    name: string;
    form: string;
    createdAt: Date;
    github: string;

    constructor(id: number, name: string, form: string, createdAt: Date, github: string) {
        this.id = id;
        this.name = name;
        this.form = form;
        this.createdAt = createdAt;
        this.github = github;
    }
};
