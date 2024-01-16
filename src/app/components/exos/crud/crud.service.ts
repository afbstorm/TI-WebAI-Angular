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

  constructor() {
    localStorage.getItem('isAuth') ? this.isAuth.next(true) : null
  }

  login (datas: {username: string, password: string}) {
    this.user = this.getUserInfos();
    if (datas.username === this.user.username && datas.password === this.user.password) {
      this.isAuth.next(true)
    } else {
      this.isAuth.next(false)
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
}
