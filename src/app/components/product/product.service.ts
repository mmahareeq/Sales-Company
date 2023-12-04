import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.interface';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api: string = 'https://api.restful-api.dev/objects';
  
  public ProductsList :any = [
    {
       "id": "1",
       "name": "Google Pixel 6 Pro",
       "data": {
          "color": "Cloudy White",
          "capacity": "128 GB"
       }
    },
    {
       "id": "2",
       "name": "Apple iPhone 12 Mini, 256GB, Blue",
       "data": null
    },
    {
       "id": "3",
       "name": "Apple iPhone 12 Pro Max",
       "data": {
          "color": "Cloudy White",
          "capacity GB": 512
       }
    },
    {
       "id": "4",
       "name": "Apple iPhone 11, 64GB",
       "data": {
          "price": 389.99,
          "color": "Purple"
       }
    },
    {
       "id": "5",
       "name": "Samsung Galaxy Z Fold2",
       "data": {
          "price": 689.99,
          "color": "Brown"
       }
    },
    {
       "id": "6",
       "name": "Apple AirPods",
       "data": {
          "generation": "3rd",
          "price": 120
       }
    },
    {
       "id": "7",
       "name": "Apple MacBook Pro 16",
       "data": {
          "year": 2019,
          "price": 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB"
       }
    },
    {
       "id": "8",
       "name": "Apple Watch Series 8",
       "data": {
          "Strap Colour": "Elderberry",
          "Case Size": "41mm"
       }
    },
    {
       "id": "9",
       "name": "Beats Studio3 Wireless",
       "data": {
          "Color": "Red",
          "Description": "High-performance wireless noise cancelling headphones"
       }
    },
    {
       "id": "10",
       "name": "Apple iPad Mini 5th Gen",
       "data": {
          "Capacity": "64 GB",
          "Screen size": 7.9
       }
    },
    {
       "id": "11",
       "name": "Apple iPad Mini 5th Gen",
       "data": {
          "Capacity": "254 GB",
          "Screen size": 7.9
       }
    },
 ] ; 

  constructor(private http:HttpClient) { }

  addProduct (product: any){
    this.ProductsList = [...this.ProductsList, product.product];
    console.log(product.product)
    return of(product)
  } 
  getProduct(){
   // return  this.http.get(this.api)
   return of(this.ProductsList)
  }
}
