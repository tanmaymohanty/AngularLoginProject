import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService:AuthService){}

  intercept(req:HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
      let headerReq = req.clone({
          setHeaders:{
              Authorization: `Bearer ${this._authService.getToken()}`
          }
      });
    return next.handle(headerReq);
      
  }
}
