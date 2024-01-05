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
  }


  
  goToAddProduct(){
    this.router.navigate(['add'], { relativeTo: this.route })
  }

  
    
  private initSubscriptions(): void {
    this.products$ = this.store.pipe(select(selectProductsList));
    this.loading$ = this.store.pipe(select(selectProductsIsLoading));
}
}
