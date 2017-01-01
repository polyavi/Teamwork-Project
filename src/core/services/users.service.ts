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

    constructor(private http: Http) {
        this.getAll().subscribe(users => this.lastId = users.length);
    }

    getAll(): Observable<any> {
        return this.http.get(this.usersUrl)
                    .map((res: Response) => res.json().data as User[]);
    }

    // let body = JSON.stringify({ username, password });
    // this.http.post('http://localhost:3001/users', body, { /*headers: contentHeaders*/ })
    //   .subscribe(
    //     response => {
    //       localStorage.setItem('id_token', response.json().id_token);
    //       this.router.navigate(['home']);
    //     },
    //     error => {
    //       alert(error.text());
    //       console.log(error.text());
    //     }
    //   );
}
