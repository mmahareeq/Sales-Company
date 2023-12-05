import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as ProductAction from './product.action';
import { ProductService } from '../../components/product/product.service';
import { Router } from '@angular/router';

@Injectable()

// Effect => manage all side effects from action dispatching, and call product service to handle the data 
export class ProductEffect {
   
    
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductAction.loadProducts),
    switchMap(() => this.productService.getProduct()
      .pipe(
        map(products =>{
            
            // this.productService.ProductsList = [...this.productService.ProductsList, products]
            // console.log(this.productService.ProductsList[0])
            return ProductAction.getAllProduct({products})
        } ),
        catchError(error => of(ProductAction.loadProductsFailer({ error })))
      )
    )
  ));
  

  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductAction.addProduct),
    switchMap((product) => this.productService.addProduct(product)
      .pipe(
        map(product => {
          // console.log(product)
          // this.productService.ProductsList = [...this.productService.ProductsList, product];
          return ProductAction.addProductSuccess({product})
        }),
        tap(() => this.router.navigate(['/product']))

      )
    )
  ));
  constructor( private actions$: Actions,
    private productService: ProductService,
    private router: Router){}
}