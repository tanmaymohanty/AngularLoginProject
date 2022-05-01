import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../app/auth.service';
import {map} from "rxjs/operators";
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginForm:FormGroup;
  credientials ={
    email:"muvisep27@yopmail.com",
    password:"muvi1234"
  };
  token = null;
  // isLogin = false;
  constructor(private http : HttpClient , private _authService:AuthService,) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'userDetails' : new FormGroup({
        'email' : new FormControl("muvisep27@yopmail.com" , [Validators.required , Validators.email]),
        'password' : new FormControl("muvi1234" , [Validators.required])
      }),
    })

  }
  onSubmit() {
    console.log(this.loginForm.value.userDetails);
      this._authService.login(this.loginForm.value.userDetails.email, this.loginForm.value.userDetails.password).subscribe(res=>{
      if (res["code"]=== 200 ) { 
        this.token = res.response.access_token;
        localStorage.setItem('token', JSON.stringify(this.token));
      }
      // this._authService.user.next(this.token);
      // this.isLogin = true;
      // this._authService.user.subscribe(token => {
      //   this.token = token;
      // });
    });

  }

}
