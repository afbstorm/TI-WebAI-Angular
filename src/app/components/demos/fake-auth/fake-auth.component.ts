import { Component } from '@angular/core';
import {FakeAuthService} from "../fake-auth.service";

@Component({
  selector: 'app-fake-auth',
  templateUrl: './fake-auth.component.html',
  styleUrls: ['./fake-auth.component.scss']
})
export class FakeAuthComponent {

  username: string = '';
  password: string = '';

  constructor(private _auth: FakeAuthService) {}

  login() {
    if (this._auth.login(this.username, this.password)) {
      console.log('Login réussi');
    } else {
      console.log('Mauvais identifiant');
    }
  }
}
