import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {ProductService } from './components/product/product.service';
import { LoginService } from './components/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{

  isLogin !: boolean;
  private subscription!: Subscription;

  constructor(private productService: ProductService,
    private loginService: LoginService){
 
      this.subscription = this.loginService.loggedIn$.subscribe((loggedIn) => {
        this.isLogin = loggedIn;
      });
  }

  ngOnInit(){
    const user = this.loginService.isLoggedIn();
    if(user){
      this.isLogin = true;
    }else 
      this.isLogin = false;
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
