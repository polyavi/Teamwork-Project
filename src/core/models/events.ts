export class Event {
    id: number;
    title: string;
    type: string;
    when: string;
    where: string;
    purpose: string;
    owner_id: number;
    image_url: string;

    constructor(id: number, title: string, when: string, type: string, where: string, purpose: string, image_url: string) {
        this.id = id;
        this.title = title;
        this.when = when;
        this.where = where;
        this.type = type;
        this.purpose = purpose;
        this.image_url = image_url;
    }
};
