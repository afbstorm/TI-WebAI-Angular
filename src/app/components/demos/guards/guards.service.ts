import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuardsService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  userLogin(user: {username: string, password: string}): Observable<boolean> {

    if (user.username === 'admin' && user.password === 'password') {
      this.loggedIn.next(true);
      return this.isLoggedIn;
    }
    return this.isLoggedIn;
  }
}
