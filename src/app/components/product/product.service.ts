import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api: string = 'https://api.restful-api.dev/objects';

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get(this.api);
  }
}
