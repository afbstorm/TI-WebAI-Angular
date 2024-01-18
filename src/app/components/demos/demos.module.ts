import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings/bindings.component';
import { DemosComponent } from './demos.component';
import {RouterOutlet} from "@angular/router";
import {DemosRoutingModule} from "./demos-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PipesComponent } from './pipes/pipes.component';
import { TempConvertPipe } from './pipes/temp-convert.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './input-ouput/parent/parent.component';
import { EnfantComponent } from './input-ouput/enfant/enfant.component';
import { FakeAuthComponent } from './fake-auth/fake-auth.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { GuardsComponent } from './guards/guards.component';
import { SecretComponent } from './guards/secret/secret.component';
import {InputTextModule} from "primeng/inputtext";
import {MessageModule} from "primeng/message";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    BindingsComponent,
    DemosComponent,
    PipesComponent,
    TempConvertPipe,
    DirectivesComponent,
    ParentComponent,
    EnfantComponent,
    FakeAuthComponent,
    ReactiveFormsComponent,
    GuardsComponent,
    SecretComponent,
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MessageModule,
    ButtonModule
  ]
})
export class DemosModule { }
