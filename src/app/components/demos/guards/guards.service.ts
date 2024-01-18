import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GuardsService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _router: Router) {
  }
  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable()
  }

  userLogin(user : { username: string, password: string }): Observable<boolean> {
    if (user.username === 'admin' && user.password === 'password') {
      this.loggedIn.next(true)
      this._router.navigate(['/demos/login/secret-page'])
      return this.isLoggedIn;
    }
    return this.isLoggedIn;
  }
}
