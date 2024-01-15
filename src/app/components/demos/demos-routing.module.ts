import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {DemosComponent} from "./demos.component";
import {BindingsComponent} from "./bindings/bindings.component";
import {PipesComponent} from "./pipes/pipes.component";
import {DirectivesComponent} from "./directives/directives.component";
import {ParentComponent} from "./input-ouput/parent/parent.component";
import {FakeAuthComponent} from "./fake-auth/fake-auth.component";
import {ReactiveFormsComponent} from "./reactive-forms/reactive-forms.component";

const routes: Routes = [
  {path: '', component: DemosComponent, children: [
      {path: 'bindings', component: BindingsComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'directives', component: DirectivesComponent},
      {path: 'parent', component: ParentComponent},
      {path: 'services', component: FakeAuthComponent},
      {path: 'forms', component: ReactiveFormsComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
