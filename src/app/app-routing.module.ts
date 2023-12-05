import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: 'product',
    component:  ListProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'product/add',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '',   redirectTo: '/product', pathMatch: 'full'},

  {
    path: '**',
    component: ListProductComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
