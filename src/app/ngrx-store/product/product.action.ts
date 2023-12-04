import { createAction, props } from '@ngrx/store';
import { Product } from "../../models/product.interface";

export enum ProductActionType {
    ADD_PRODUCT = '[PRODUCT] Add',
    GET_PRODUCTS = '[PRODUCT] get',
    LOAD_PRODUCTS= '[Product] load',
    LOAD_PRODUCTS_FAILER= '[Product] failer'

  }

  export const addProduct = createAction(ProductActionType.ADD_PRODUCT, props<{product: Product}>());

  export const getAllProduct = createAction(ProductActionType.GET_PRODUCTS, props<{products: any}>());

  export const loadProductsFailer = createAction(ProductActionType.LOAD_PRODUCTS_FAILER,props<{error: any}>());
  export const loadProducts = createAction(ProductActionType.LOAD_PRODUCTS);

