import { Component, Input, Output, EventEmitter } from '@angular/core';
import {IArticle} from "../article/article.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  @Input() article!: IArticle;
  @Output() add = new EventEmitter<IArticle>();
  @Output() remove = new EventEmitter<number>();

  addArticle() {
    this.add.emit(this.article);
  }

  removeArticle() {
    this.remove.emit(this.article.id);
  }
}
