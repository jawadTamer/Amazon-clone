import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ProductsService } from '../../shared/service/products.service';
import { Product } from '../../shared/service/products.service';
import { RouterLink, RouterModule } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterLinkActive,
    RouterLink,
    RouterModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatRadioModule,
    FormsModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  filteredProducts: Product[] = [];
  isSidebarOpen: boolean = true;
  selectedPriceRange: string = 'all';
  constructor(private productsService: ProductsService) {}
 
  isLoading: boolean = true;
  ngOnInit() {
    this.productsService.fetchProducts().subscribe(
      (data) => {
        this.products = data;
        this.filteredProducts = data;
        this.categories = [...new Set(data.map(product => product.category))];
        this.isLoading = false;
      }
    );
  }
  hasProducts(): boolean {
    return this.filteredProducts.length > 0;
  }
 
 
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }
  filterByPrice(range: string) {
    this.selectedPriceRange = range;
    this.applyFilters();
  }
  private applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      const matchesCategory = this.selectedCategory === 'all' || 
                            product.category === this.selectedCategory;
      
      const matchesPrice = this.selectedPriceRange === 'all' || 
                          this.checkPriceRange(product.price);
      
      return matchesCategory && matchesPrice;
    });
  }
  private checkPriceRange(price: number): boolean {
    switch(this.selectedPriceRange) {
      case 'under-100': return price < 100;
      case '100-300': return price >= 100 && price <= 300;
      case '300-500': return price >= 300 && price <= 500;
      case '500-700': return price >= 500 && price <= 700;
      case 'over-700': return price > 700;
      default: return true;
    }
  }

}