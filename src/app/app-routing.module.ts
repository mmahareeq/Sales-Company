import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from '././components/product/list-product/list-product.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
const routes: Routes = [
  {
    path: 'product',
    component:  ListProductComponent,
  },
  {
    path: 'product/add',
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
