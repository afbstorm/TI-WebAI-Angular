import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface IRegister {
  lastname: string,
  firstname: string,
  username: string,
  password: string,
  birthdate: Date | null
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  user: any;
  isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  authState$ = this.isAuth.asObservable();

  constructor() {
    localStorage.getItem('isAuth') ? this.isAuth.next(true) : null
  }


  login (user: {username: string, password: string}) {
    this.user = this.getUserInfos();
    if (user.username === this.user.username && user.password === this.user.password) {
      this.isAuth.next(true)
    } else {
      throw new Error(user.password);
    }
  }

  register(userData: IRegister) {
    let user = JSON.stringify(userData);
    localStorage.setItem('user', user);
  }

  getUserInfos() {
    let user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  isLoggedIn() {
    return this.isAuth.value;
  }

  logout() {
    this.isAuth.next(false);
  }
}
