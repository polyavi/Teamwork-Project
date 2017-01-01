export class User {
    id: number;
    name: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor(id: number, username: string, password: string, name: string, firstName: string, lastName: string) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
