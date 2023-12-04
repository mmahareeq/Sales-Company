import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {ProductService } from '../product.service';
import * as ProductAction  from '../../../ngrx-store/product/product.action';
import { selectProductsList, selectProductsIsLoading } from '../../../ngrx-store/product/product.selector';
import { Observable } from 'rxjs';

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

  loading$ :Observable<boolean> | undefined;
  products$: Observable<any> | undefined;
  



  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store){
  }
  ngOnInit(): void {
    this.store.dispatch(ProductAction.loadProducts());
    this.initSubscriptions();
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

  
    
  private initSubscriptions(): void {
    this.products$ = this.store.pipe(select(selectProductsList));
    this.loading$ = this.store.pipe(select(selectProductsIsLoading));
}
}
