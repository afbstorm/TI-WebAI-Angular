// Importer le décorateur Injectable d'Angular Core
import { Injectable } from '@angular/core';
// Importer l'interface IArticle
import {IArticle} from "../../shopping-cart-v2/article/article.component";

// Annoter la classe avec @Injectable pour déclarer que cette classe est un service injectable
@Injectable({
  // Utilisez la propriété providedIn pour déclarer que ce service doit être créé lorsque l'application démarre.
  providedIn: 'root'
})
export class ShoppingCartService {
  // Déclare une clé pour utiliser comme clé de storage locale
  private storageKey = 'shoppingCart';

  // Définit une méthode pour ajouter un élément au panier
  addToCart(article: IArticle, quantity: number): void {
    let cart: IArticle[] = this.getCart();
    const existingArticle = cart.find(item => item.id === article.id);

    if (existingArticle) {
      // Si l'article existe déjà dans le panier, augmentez simplement la quantité de cet article
      existingArticle.quantity = (existingArticle.quantity || 0) + quantity;
    } else {
      // Sinon, ajoutez un nouvel élément à la liste du panier
      cart.push({ ...article, quantity: quantity });
    }

    // Enregistrer le panier dans le stockage local
    this.saveCart(cart);
  }

  // Définit une méthode pour supprimer un élément du panier
  removeFromCart(articleId: number): void {
    let cart: IArticle[] = this.getCart();
    // Trouvez l'index de l'article qui doit être supprimé
    const articleIndex = cart.findIndex(item => item.id === articleId);

    if (articleIndex !== -1) {
      if (cart[articleIndex].quantity && cart[articleIndex].quantity! > 1) {
        // Diminuez la quantité de l'article si elle est supérieure à 1
        cart[articleIndex].quantity! -= 1;
      } else {
        // Sinon, supprimez l'article du panier
        cart.splice(articleIndex, 1);
      }
    }

    // Enregistrer le nouveau panier dans le stockage local
    this.saveCart(cart);
  }

  // Définit une méthode pour sauvegarder le panier dans le stockage local
  private saveCart(cart: IArticle[]): void {
    // Utilisez localStorage API pour stocker le panier
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  // Définit une méthode pour récupérer le panier du stockage local
  getCart(): IArticle[] {
    // Récupérez le panier du stockage local et convertissez-le en tableau d'objets.
    const cartJson = localStorage.getItem(this.storageKey);
    return cartJson ? JSON.parse(cartJson) : [];
  }
}
