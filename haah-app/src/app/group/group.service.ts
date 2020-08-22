
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Group } from './group.model';

@Injectable()
export class GroupService {

    constructor(private httpClient: HttpClient) { }

    findAll(): Observable<Group[]> {
        return this.httpClient.get("http://localhost:3000/api/groups").pipe(map(r => r)) as Observable<Group[]>;
    }
}