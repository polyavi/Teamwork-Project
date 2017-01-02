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
    private usersLoginUrl = 'api/auth';
    public loggedIn = false;

    constructor(private http: Http) {
      // check if we have a token
      if(localStorage.getItem('id_token')){
        this.loggedIn = true;
      }
      // set last id
      this.getAll().subscribe((users)=>console.log(users));
      // this.lastId = this.getAll().length;
    }

    getAll(): Observable<any> {
        return this.http.get(this.usersUrl)
                    .map((res: Response) => res.json().data as User[]);
    }

    login(userToLogin: User): Observable<any> {
      return this.http.post(this.usersLoginUrl,userToLogin)
        .map((res: Response) => {
          if(res.json().data){
            // found the user
            localStorage.setItem('id_token', res.json().data.token);
            let userData = res.json().data;
            delete userData.password;
            delete userData.token;
            localStorage.setItem('user', JSON.stringify(userData));
            this.loggedIn = true;
          }
          return res.json();
        });
    }

    public me(){
      return JSON.parse(localStorage.getItem('user'));
    }

    register(body: any): Promise<any> {
        return this.http.post(this.usersUrl, JSON.stringify( body ), {headers: this.headers} )
            .toPromise()
            .then((res: Response) => res.json())
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
