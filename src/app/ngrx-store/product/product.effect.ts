import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as ProductAction from './product.action';
import { ProductService } from '../../components/product/product.service';


@Injectable()
export class ProductEffect {
   
    
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductAction.loadProducts),
    switchMap(() => this.productService.getProduct()
      .pipe(
        map(products => ProductAction.getAllProduct({products})),
        catchError(error => of(ProductAction.loadProductsFailer({ error })))
      )
    )
  ));

  constructor( private actions$: Actions,
    private productService: ProductService){}
}