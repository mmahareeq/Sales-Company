import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent  implements OnInit{
 
   productForm !: FormGroup;

  constructor(){
   
  }
  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl(''),
      capacity: new FormControl(0)
    })
  }
  
  onSubmit(){
    console.log(this.productForm.value);
  }

  onCancel(){
    
  }
}
