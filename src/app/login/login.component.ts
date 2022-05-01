import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService  } from '../auth.service';
import {map} from "rxjs/operators";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  token = null;
  // isLogin = false;
  constructor(private http : HttpClient , private _authService:AuthService,private _router:Router) { }

  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      'userDetails' : new FormGroup({
        'email' : new FormControl("muvisep27@yopmail.com" , [Validators.required , Validators.email]),
        'password' : new FormControl("muvi1234" , [Validators.required])
      }),
    })

  }
  onSubmit() {
    console.log(this.loginForm.value.userDetails.email);
      this._authService.login(this.loginForm.value.userDetails.email, this.loginForm.value.userDetails.password).subscribe(res=>{
      if (res["code"]=== 200 ) { 
        this.token = res.response.access_token;
        localStorage.setItem('token', JSON.stringify(this.token));
        this._router.navigate(['/dashboard']);
      } else {
        this._router.navigate(['']);    
      }
    });

  }

}
