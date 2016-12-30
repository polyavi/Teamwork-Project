
export class Project {
    id: number;
    title: string;
    imgUrl: string;
    demo: string;
    github: string;

    constructor(id: number, title: string,imgUrl: string, demo: string, github: string) {
        this.id = id;
        this.title = title;
        this.imgUrl = imgUrl;
        this.demo = demo;
        this.github = github;
    }
};
