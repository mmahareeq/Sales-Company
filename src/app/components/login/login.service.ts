import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../models/login.interface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  login(data: Login){
      localStorage.setItem('user', JSON.stringify(data));
      return true
  }

  logout(){
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('user');
  }
}
