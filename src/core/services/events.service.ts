import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Event } from './../models/events';
import { Observable } from 'rxjs/Observable';
import { IService } from './iservice';

@Injectable()
export class EventsService implements IService {
    events: Event[] = [];
    public lastId: number;
    private headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    private eventsUrl = 'api/events';

    constructor(private http: Http) {
        this.getAll().subscribe(events => this.lastId = events.length);
    }

    getAll(): Observable<any> {
      return this.http.get(this.eventsUrl)
                      .map((res: Response) => res.json().data as Event[]);
    }

    getById(id: number): Observable<Event> {
        const url = this.eventsUrl + '/' +  id;
        return this.http.get(url)
            .map((res: Response) => res.json().data as Event);
    }

    add(body: any): Promise<Event> {
        return this.http
            .post(this.eventsUrl, JSON.stringify(body), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(event: any): Promise<Event> {
        const url = this.eventsUrl + '/' +  event.id;
        return this.http
            .put(url, JSON.stringify(event), {headers: this.headers})
            .toPromise()
            .then(() => event)
            .catch(this.handleError);
    }

    remove(id: number): Promise<void> {
        const url = this.eventsUrl + '/' +  id;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error');
    }
}
