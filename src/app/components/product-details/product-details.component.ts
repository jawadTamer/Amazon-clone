import { Component } from '@angular/core';
import { Product, ProductsService } from '../../shared/service/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productId!:any;
  productDetails!:Product;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductsService:ProductsService
  ){}

  ngOnInit():void{
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.productId = params.get('id')
      }
    })

    this.getProductDetails();
  }
  getProductDetails(){
    this._ProductsService.getProductById(11).subscribe({
      next:(response)=>{
        console.log(response);
        this.productDetails = response;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
