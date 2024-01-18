import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {birthdateValidator} from "../../../../shared/validators/birthdate.validator";
import {CrudService} from "../crud.service";
import {Router} from "@angular/router";
import {specialCharacterValidator} from "../../../../shared/validators/specialCharacter.validator";

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
    isLoggedIn!: boolean;

    private readonly commonValidators = [Validators.required];
    private readonly passwordValidators = [Validators.required, specialCharacterValidator];
    private readonly birthdateValidators = [birthdateValidator()];

    constructor(
        private _fb: FormBuilder,
        private _authService: CrudService,
        private _router: Router
    ) {
        _authService.authState$.subscribe(
            (authState: boolean) => this.isLoggedIn = authState
        );

      this.accountCreation = this._fb.group({
        firstname: ['', this.commonValidators],
        lastname: ['', this.commonValidators],
        username: ['', this.commonValidators],
        password: ['', this.passwordValidators],
        birthdate: [null, this.birthdateValidators]
      })

      this.userLogin = this._fb.group({
        username: ['', this.commonValidators],
        password: ['', this.commonValidators]
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
            try {
                this._authService.login(this.userLogin.value)
                if (this._authService.isLoggedIn()) {
                  this._router.navigate(['exos/crud/details'])
                }
            } catch (error) {
                console.error(error);
                throw new Error('Invalid credentials');
            }
        }
    }
}
