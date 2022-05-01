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
    }).pipe(
      tap(res=>{
        console.log(this.user);
        // this.LoggedInUser(res.data.email, res.data.user_uuid, res.response.access_token, res.response.refresh_token)
      })
    )
  }

  private LoggedInUser(email, userId, access_token, refresh_token){
    // const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
    // const user = new User(email, userId, token, expirationDate);
    // console.log('user =>', user);
    // this.user.next(user); // Storing Data in User Subject
    // this.autoSignOut(expiresIn*1000);
    // localStorage.setItem('UserData', JSON.stringify(user));
    // this.getUserData(token);
  }

}
