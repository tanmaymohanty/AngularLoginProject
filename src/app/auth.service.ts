import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<any>(null);
  private tokenExpirationTimer : any;

  constructor(private http:HttpClient,
              private router:Router) { }

  login(email, password){
    return this.http.post<any>(`https://apigateway-staging.allthingsott.com/user-login`,{
      email:email,
      password: password
    })
  }
getToken() {
      return localStorage.getItem('token');
}
isLogin() {
  return !!localStorage.getItem('token');
}

}
