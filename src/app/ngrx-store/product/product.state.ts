import { Product } from "../../models/product.interface";

export interface ProductState {
    products: Product[];
    loading: boolean;
    error: any;
}