import { createAction, props } from '@ngrx/store';
import { Product } from "../../models/product.interface";

export enum ProductActionType {
    ADD_PRODUCT = '[Product] Add',
    ADD_PRODUCT_SUCCESS = '[Product] Success',
    GET_PRODUCTS = '[Product] get',
    LOAD_PRODUCTS= '[Product] load',
    LOAD_PRODUCTS_FAILER= '[Product] failer'

  }
  // actions => hold all actions that need to implement adding and getting product
  export const addProduct = createAction(ProductActionType.ADD_PRODUCT, props<{product: Product}>());
  export const addProductSuccess = createAction(ProductActionType.ADD_PRODUCT_SUCCESS, props<{product: Product}>());

  export const getAllProduct = createAction(ProductActionType.GET_PRODUCTS, props<{products: any}>());

  export const loadProductsFailer = createAction(ProductActionType.LOAD_PRODUCTS_FAILER,props<{error: any}>());
  export const loadProducts = createAction(ProductActionType.LOAD_PRODUCTS);

