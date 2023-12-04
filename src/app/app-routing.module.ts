import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from '././components/product/list-product/list-product.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {
    path: 'product',
    component:  ListProductComponent,
  },
  {
    path: 'product/add',
    component: AddProductComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
