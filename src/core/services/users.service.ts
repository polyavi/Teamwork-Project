import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { User } from './../models/users';

@Injectable()
export class UsersService {
    public lastId: number;
    private headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });

    private usersUrl = 'api/users';
    private usersLoginUrl = 'api/users/authenticate';
    public loggedIn = false;

    constructor(private http: Http) {
        this.getAll().subscribe(users => this.lastId = users.length);
    }

    getAll(): Observable<any> {
        return this.http.get(this.usersUrl)
                    .map((res: Response) => res.json().data as User[]);
    }

    login(userToLogin: User): Observable<any> {
        // console.log(userToLogin);

        let bodyObject = JSON.stringify({ username: userToLogin.username, password: userToLogin.password });
        return this.http.post(this.usersLoginUrl, bodyObject)
            .map((res: Response) => {
                let body = res.json();
                let token = body.token;
                // let token: string = JSON.parse(userToLogin).result.token;
                console.log(body);
                localStorage.setItem('id_token', token);
                this.loggedIn = true;
                console.log(localStorage);
                return { status: res.status, body: body };
            });
    }

    register(body: any): Promise<any> {
        return this.http.post(this.usersUrl, JSON.stringify( body ), {headers: this.headers} )
            .toPromise()
            .then((res: Response) => {
                this.loggedIn = true;
                localStorage.setItem('id_token', res.json().token);
            })
            .catch(this.handleError);
    }

    // getByUsername(username: string): Promise<any> {

    // }

    public logoutUser(): void {
        this.loggedIn = false;
        localStorage.clear();
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error');
    }
}
