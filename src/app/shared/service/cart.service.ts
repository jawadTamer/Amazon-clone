import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Cart {
  id: number;
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: BehaviorSubject<Cart[]> = new BehaviorSubject(this.getUserCart());
  cartItemsCount: BehaviorSubject<number> = new BehaviorSubject(
    this.getCartItemsCount()
  );

  constructor() {}

  getUserCart(): Cart[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  getCartItemsCount(): number {
    return this.cart.value.reduce((total, item) => total + item.count, 0);
  }

  updateCart(cart: Cart[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart.next(cart);
    this.cartItemsCount.next(this.getCartItemsCount());
  }

  addToCart(productId: number): void {
    let cart = this.cart.value;
    let product = cart.find((item) => item.id === productId);
    if (product) {
      product.count += 1;
    } else {
      cart.push({ id: productId, count: 1 });
    }
    this.updateCart(cart);
  }

  updateQuantity(productId: number, newQuantity: number): void {
    let cart = this.cart.value;
    let productIndex = cart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      if (newQuantity > 0) {
        cart[productIndex].count = newQuantity;
      } else {
        cart.splice(productIndex, 1);
      }
      this.updateCart(cart);
    }
  }

  removeProduct(productId: number): void {
    let cart = this.cart.value;
    let productIndex = cart.findIndex((item) => item.id === productId);
    cart.splice(productIndex, 1);
    this.updateCart(cart);
  }

  clearCart(): void {
    this.updateCart([]);
  }
}
