import { createReducer, on } from '@ngrx/store';
import { addProduct, getAllProduct, loadProducts, loadProductsFailer } from './product.action';
import { ProductState } from './product.state';

export const initialState: ProductState = {
    products:[],
    loading: false,
    error: null
  };

  export const ProductReducer = createReducer(
    initialState,
    on(addProduct, (state, {product}) => (
      {
        ...state,
        products: [...state.products, product]
      }
    )),
    on(loadProducts, (state) => (
        {
          ...state,
          loading: true,
          error: null
        }
      )),
    on(getAllProduct, (state,{products}) => ({
      ...state,
       products,
       loading: false
    })),
    on(loadProductsFailer, (state, {error}) => (
        {
          ...state,
          loading: false,
          error,
        }
      ))
  );    



//   on(objectActions.loadObjects, state => ({ ...state, loading: true, error: null })),
//   on(objectActions.loadObjectsSuccess, (state, { objects }) => ({ ...state, objects, loading: false })),
//   on(objectActions.loadObjectsFailure, (state, { error }) => ({ ...state, error, loading: false }))