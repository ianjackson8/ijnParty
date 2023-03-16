import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userKeySource = new Subject<string>();

  userKey$ = this.userKeySource.asObservable();

  announceUserKey(userKey: string) {
    this.userKeySource.next(userKey);
  }

  constructor() { }
}
