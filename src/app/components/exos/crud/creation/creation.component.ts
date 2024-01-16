import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {birthdateValidator} from "../../../../shared/validators/birthdate.validator";
import {CrudService} from "../crud.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent {

  accountCreation: FormGroup = new FormGroup({});
  userLogin: FormGroup = new FormGroup({});
  loginDisplay: boolean = false;
  registerDisplay: boolean = true;
  isAuthSubscription: Subscription;
  isAuthenticated: boolean = false;

  constructor(private _fb: FormBuilder, private _authService: CrudService, private _router: Router) {
    this.accountCreation = this._fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      birthdate: [null, [birthdateValidator()]]
    })

    this.userLogin = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    this.isAuthSubscription = this._authService.isAuth.subscribe({
      next: value => {
        this.isAuthenticated = value;
        if (this.isAuthenticated) {
          localStorage.setItem('isAuth', 'auth');
          this._router.navigate(['exos/crud/details'])
        }
      },
      error: err => {
        console.error(err)
      }
    })
  }

  changeDisplay() {
    this.loginDisplay = !this.loginDisplay;
    this.registerDisplay = !this.registerDisplay;
  }

  register() {
    if (this.accountCreation.valid) {
      this._authService.register(this.accountCreation.value)
      this.changeDisplay()
    }
  }

  login() {
    if (this.userLogin.valid) {
      this._authService.login(this.userLogin.value)
    }
  }

}
