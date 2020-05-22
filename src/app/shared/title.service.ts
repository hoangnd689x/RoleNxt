import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TitleService {
    private title = new Subject<string>();
    constructor() { 
        this.title.next("Role Nxt");
    }

    getTitle(): Observable<string> {
        return this.title.asObservable();
    }

    updateTitle(title: string) {
        this.title.next(title);
    }
}
