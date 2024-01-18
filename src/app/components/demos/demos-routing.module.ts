import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {DemosComponent} from "./demos.component";
import {BindingsComponent} from "./bindings/bindings.component";
import {PipesComponent} from "./pipes/pipes.component";
import {DirectivesComponent} from "./directives/directives.component";
import {ParentComponent} from "./input-ouput/parent/parent.component";
import {FakeAuthComponent} from "./fake-auth/fake-auth.component";
import {ReactiveFormsComponent} from "./reactive-forms/reactive-forms.component";
import {GuardsComponent} from "./guards/guards.component";
import {SecretComponent} from "./guards/secret/secret.component";
import {authorizationGuard} from "../../shared/guards/authorization.guard";

const routes: Routes = [
  {path: '', component: DemosComponent, children: [
      {path: 'bindings', component: BindingsComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'directives', component: DirectivesComponent},
      {path: 'parent', component: ParentComponent},
      {path: 'services', component: FakeAuthComponent},
      {path: 'forms', component: ReactiveFormsComponent},
      {path: 'login', component: GuardsComponent, children: [
          {path: 'secret-page', component: SecretComponent, canActivate: [authorizationGuard]}
        ]},
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
