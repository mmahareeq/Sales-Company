import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Store, select } from '@ngrx/store';
import { ProductState } from './product.state';

// fetch data from the store
export const selectproductState = createFeatureSelector<ProductState>('product');

export const selectProductsList = createSelector(selectproductState, (state) => state.products);

export const selectProductsIsLoading = createSelector(selectproductState, (state) => {
    console.log(state);
    return state.loading;
});