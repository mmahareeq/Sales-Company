import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProductAction  from '../../../ngrx-store/product/product.action';
import {ProductService } from '../product.service'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent  implements OnInit{
 
   productForm !: FormGroup;
 
  constructor(private router: Router,
    private store: Store,
    private productService: ProductService){
  }
  
  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl(''),
      capacity: new FormControl(0),
      price: new FormControl(0),
      year: new FormControl(),
    })
  }
  
  onSubmit(){
    console.log(this.productForm.value);
    const values = this.productForm.value;
    const id = +this.productService.ProductsList.slice(-1)[0]?.id + 1; 

    this.store.dispatch(ProductAction.addProduct({
      product: {
        name: values.name,
        data: {
          color: values.color,
          capacity: values.capacity,
          price: values.price,
          year: values.year
        }
      }
    }))
  }

  onCancel(){
    this.router.navigate(['product']);
  }
}
