import { Component } from '@angular/core';

export interface IArticle {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  articles: IArticle[] = [
    {id: 1, name: 'Pomme', price: 0.89},
    {id: 2, name: 'Poire', price: 0.89},
    {id: 3, name: 'Pack d\'eau plate', price: 8.79},
    {id: 4, name: 'Jus d\'orange', price: 2.69},
    {id: 5, name: 'Sel', price: 3.59},
    {id: 6, name: 'Tarte aux pommes', price: 12.59},
    {id: 7, name: 'Shampooing', price: 7.80},
    {id: 8, name: 'Fromage', price: 3.23},
    {id: 9, name: 'Piments', price: 3.99},
    {id: 10, name: 'La réponse à l\'univers', price: 42}
  ]

  article: IArticle = {
    id: this.articles.length + 1,
    name: '',
    price: 0,
  };

  cart: IArticle[] = [];
  total: number = 0;
  onSubmit() {
    this.articles.push(this.article)
  }

  totalCart(): void {
    this.total = this.cart.reduce((acc, article) => acc + article.price * article.quantity!, 0);
  }
  addToCart(article: IArticle) {
    const existingArticle = this.cart.find(item => item.id === article.id);
    if (existingArticle) {
      existingArticle.quantity = (existingArticle.quantity || 1) + 1;
    } else {
      this.cart.push({ ...article, quantity: 1 });
    }
    this.totalCart();
  }

  removeFromCart(articleId: number) {
    const article = this.cart.find(item => item.id === articleId);
    if (article && article.quantity && article.quantity > 1) {
      article.quantity--;
    } else {
      this.cart = this.cart.filter(item => item.id !== articleId);
    }
    this.totalCart();
  }

}
