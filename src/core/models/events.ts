export class Event {
    id: number;
    title: string;
    type: string;
    when: Date;
    where: string;
    purpose: string;
    image_url: string;

    constructor(id: number, title: string, type: string, when: Date, where: string, purpose: string, image_url: string) {
        this.id = id;
        this.title = title;
        this.when = when;
        this.where = where;
        this.purpose = purpose;
        this.image_url = image_url;
    }
};
