import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit ,OnDestroy{
  
  isLogin !: boolean;
  private subscription!: Subscription;

  constructor(private loginService: LoginService,
    private router: Router){

    this.subscription = this.loginService.loggedIn$.subscribe((loggedIn) => {
      this.isLogin = loggedIn;
    });
  }
  ngOnInit(): void {
    const user = this.loginService.isLoggedIn();
    if(user){
      this.isLogin = true;
    }else 
      this.isLogin = false;
  }

  onLogout(){
    this.loginService.logout();
    this.isLogin = false;
    this.router.navigate(['/login']);
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
