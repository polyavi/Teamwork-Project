import { Observable } from 'rxjs/Observable';

export interface IService {
    getById(id: number): any;

    getAll(): Observable<any>;

    add(body: any);
}
