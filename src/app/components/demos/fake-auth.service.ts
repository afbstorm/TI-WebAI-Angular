import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  isAuthenticated: boolean = false;

  login(username: string, password: string): boolean {
    this.isAuthenticated = username === 'user' && password === 'password';
    return this.isAuthenticated;
  }
}
