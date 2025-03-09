import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Cart, CartService } from '../../shared/service/cart.service';
import { Product, ProductsService } from '../../shared/service/products.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatDividerModule, MatCardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: Cart[] = [];
  products: Product[] = [];
  totalPrice = 0;
  cartItemsCount = 0;

  constructor(private _cartService: CartService, private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._cartService.cart.subscribe((cart) => {
      this.cart = cart;
      this.loadCartProducts();
    });
    this._cartService.cartItemsCount.subscribe((count) => (this.cartItemsCount = count));

  }

  loadCartProducts(): void {
    this.totalPrice = 0;
    this.cart.forEach((item, index) => {
      this._productsService.getProductById(item.id).subscribe((product) => {
        const existingProductIndex = this.products.findIndex((p) => p.id === item.id);
        if (existingProductIndex !== -1) {
          this.products[existingProductIndex] = product;
        } else {
          this.products.splice(index, 0, product);
        }
        this.calculateTotalPrice();
      });
    });
  }
  
  getProductCount(productId: number): number {
    return this.cart.find((item) => item.id === productId)?.count || 0;
  }

  calculateTotalPrice(): void {
    this.totalPrice =
    Number(
      this._cartService.cart.value
        .reduce((total, cartItem) => total + (this.products.find((product) => product.id === cartItem.id)?.price ?? 0) * cartItem.count, 0)
        .toFixed(2)
    );
  }

  updateQuantity(productId: number, newQuantity: number): void {
    this._cartService.updateQuantity(productId, newQuantity);
  }

  removeProduct(productId: number): void {
    this._cartService.removeProduct(productId);
    this.cart = this.cart.filter(item => item.id !== productId);
    this.products = this.products.filter(product => product.id !== productId);
    this.calculateTotalPrice();
  }  

  clearCart(): void {
    this._cartService.clearCart();
  }
}
