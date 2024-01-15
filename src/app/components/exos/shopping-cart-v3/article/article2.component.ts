// Importe les composants nécessaires
import {Component, OnInit} from '@angular/core';
import {IArticle} from "../../shopping-cart-v2/article/article.component";
import {ShoppingCartService} from "../services/shopping-cart.service";

// Définit le sélecteur, le template HTML et les styles CSS pour le composant Article
@Component({
  selector: 'app-article',
  templateUrl: './article2.component.html',
  styleUrls: ['./article2.component.css']
})
export class Article2Component implements OnInit {

  // Déclare les variables que nous utiliserons dans notre composant
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
  ];
  cart: IArticle[] = [];  // Crée un tableau vide pour le panier
  quantity: number = 0;   // Initialise la quantité à 0

  // Construit une instance du service de panier dans le constructeur
  constructor(private shoppingCartService: ShoppingCartService) {}

  // Métode pour charger le panier
  loadCart(): void {
    this.cart = this.shoppingCartService.getCart();  // Utilise la méthode getCart() du service ShoppingCart pour remplir le panier
  }
  // Cycle de vie ngOnInit al appelé juste après que les données liées à la propriété aient été vérifiées
  ngOnInit(): void {
    this.loadCart();  // Charge le panier lorsque le composant est initialisé
  }

  // Crée les méthodes pour ajouter et supprimer des articles du panier
  addToCart(article: IArticle, quantity: number): void {
    this.shoppingCartService.addToCart(article, quantity);  // Utilise la méthode addToCart() du service ShoppingCart pour ajouter un article
    this.updateCart();  // met à jour le panier après l'ajout d'un article
  }

  removeFromCart(articleId: number): void {
    this.shoppingCartService.removeFromCart(articleId);  // Utilise la méthode removeFromCart() du service ShoppingCart pour supprimer un article
    this.updateCart();  // met à jour le panier après la suppression d'un article
  }

  // Crée une méthode privée pour mettre à jour le panier
  private updateCart(): void {
    this.cart = this.shoppingCartService.getCart();  // Assigner à nouveau le panier à l'aide de getCart() du service ShoppingCart
  }

  // Affiche le prix en euros avec un format spécifique
  priceInEuro(price: number): string {
    return `${price.toFixed(2)}€`;
  }

  // Récupère la quantité d'article
  getQuantity(item: any): number {
    return item.quantity ? item.quantity : 1;  // Si l'article a une quantité, renvoie cette quantité, sinon renvoie 1
  }
}
