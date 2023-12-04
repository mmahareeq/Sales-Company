import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Store, select } from '@ngrx/store';
import { ProductState } from './product.state';

export const selectproductState = createFeatureSelector<ProductState>('product');

console.log(selectproductState)
export const selectProductsList = createSelector(selectproductState, (state) => state.products);
console.log(selectProductsList)
export const selectProductsIsLoading = createSelector(selectproductState, (state) => {
    console.log(state);
    return state.loading;
});