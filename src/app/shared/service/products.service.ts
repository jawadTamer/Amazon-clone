import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts().subscribe(
      (data) => {
        this.products = data;
      }
    );
  }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}

