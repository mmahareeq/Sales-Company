import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.interface';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api: string = 'https://api.restful-api.dev/objects';
  
  public ProductsList :any =[];

  constructor(private http:HttpClient) { }

  addProduct (product: any){
   //  this.ProductsList = [...this.ProductsList, product.product];
   //  console.log(product.product)
   //  return of(product)
  // console.log(product)
   return this.http.post(this.api, product.product);
  } 
  getProduct(){
   return  this.http.get(this.api)
  // return of(this.ProductsList)
  }
}
