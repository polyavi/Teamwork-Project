
export class event {
    id: number;
    title: string;
    type: string;
    when: Date;
    where: string;
    purpose: string;


    constructor(id: number, title: string, type: string, when: Date, where: string, purpose: string) {
        this.id = id;
        this.title = title;
        this.when = when;
        this.where = where;
        this.purpose = purpose;

    }
};
