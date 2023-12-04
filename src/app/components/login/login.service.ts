import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../models/login.interface';
import {  Observable, Subject ,Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedInSubject: Subject<boolean> = new Subject<boolean>();
  loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  constructor(private http:HttpClient) { }
  
  login(data: Login){
      localStorage.setItem('user', JSON.stringify(data));
      this.loggedInSubject.next(true);
  }

  logout(){
    localStorage.clear();
    this.loggedInSubject.next(false);
  }

  isLoggedIn() {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data): null;
  }
}
