import { Component, OnInit } from '@angular/core';

import {ProductService } from './components/product/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'sales-company';
  products:any;
  isLoading!: boolean;
  constructor(private productService: ProductService){

  }

  ngOnInit(){
    this.isLoading = true;
    this.products = []; 
    this.fetchProducts();
  }


  fetchProducts (){
    this.productService.getProduct().subscribe(data=>{

      this.products = data;
      this.isLoading = false;
    })
  }
}
