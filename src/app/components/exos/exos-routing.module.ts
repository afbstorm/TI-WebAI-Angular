import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExosComponent} from "./exos.component";
import {ChronoComponent} from "./chrono/chrono.component";
import {ShoppingCartV1Component} from "./shopping-cart-v1/shopping-cart-v1.component";
import {ArticleComponent} from "./shopping-cart-v2/article/article.component";
import {Article2Component} from "./shopping-cart-v3/article/article2.component";
import {CrudComponent} from "./crud/crud.component";
import {CreationComponent} from "./crud/creation/creation.component";
import {crudGuardGuard} from "../../shared/guards/crud-guard.guard";
import {DetailsComponent} from "./crud/details/details.component";

const routes: Routes = [
  {path: '', component: ExosComponent, children: [
      {path: 'chrono', component: ChronoComponent},
      {path: 'shopping-cartV1', component: ShoppingCartV1Component},
      {path: 'shopping-cartV2', component: ArticleComponent},
      {path: 'shopping-cartV3', component: Article2Component},
      {path: 'crud', component: CrudComponent, children: [
          {path: 'creation', component: CreationComponent},
          {path: 'details', component: DetailsComponent, canActivate: [crudGuardGuard]},
        ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
