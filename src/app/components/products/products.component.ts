import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor( private productService: ProductService) { }

  grtProducts(): void{
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.grtProducts();
  }

}
