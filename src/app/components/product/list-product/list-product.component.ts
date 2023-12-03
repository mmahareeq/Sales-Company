import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {ProductService } from '../product.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit{

  isLoading !: boolean;
  products !: any;
  isError !: boolean;
  lengthOfProducts!: number;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute){
  }
  ngOnInit(): void {
   
    this.isLoading = true;
    this.lengthOfProducts = 0;
    this.products = [];
    this.fetchProduct();
  }

  fetchProduct(){
   this.productService.getProduct().subscribe(data=>{

    this.products = data;
    this.lengthOfProducts = this.products.length;
    this.isLoading = false;
   })
  }
  
  goToAddProduct(){
    this.router.navigate(['add'], { relativeTo: this.route })
  }
}