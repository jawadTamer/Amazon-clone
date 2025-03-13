import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/service/products.service';
import { CartService } from '../../shared/service/cart.service';
import { Product } from '../../shared/service/products.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId!: any;
  productDetails!: Product;
  
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
        this.getProductDetails(); // Move this inside to ensure we have the ID
      }
    });
  }

  getProductDetails() {
    this._ProductsService.getProductById(Number(this.productId)).subscribe({
      next: (response) => {
        this.productDetails = response;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.addToCart(this.productId);

    Swal.fire({
      title: 'Success!',
      text: 'Item added to cart successfully',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      position: 'top-end',
      toast: true
    });
  }
}