import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';
import { ChronoComponent } from './chrono/chrono.component';
import { ShoppingCartV1Component } from './shopping-cart-v1/shopping-cart-v1.component';
import { TransformNumToStringPipe } from './shopping-cart-v1/transform-num-to-string.pipe';
import {ArticleComponent} from "./shopping-cart-v2/article/article.component";
import {CartComponent} from "./shopping-cart-v2/cart/cart.component";
import {SharedModule} from "../../shared/shared.module";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {Article2Component} from "./shopping-cart-v3/article/article2.component";


@NgModule({
  declarations: [
    ExosComponent,
    ChronoComponent,
    ShoppingCartV1Component,
    CartComponent,
    ArticleComponent,
    Article2Component,
    TransformNumToStringPipe
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    SharedModule,
    InputTextModule,
    FormsModule
  ]
})
export class ExosModule { }
