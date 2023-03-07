import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  //templateUrl: './app/common.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  //binding Data,Event,properties.
  message = "";
  heading:String = "LOGIN PAGE";
  loginBtn:boolean = true;
  constructor(){
    setTimeout(() => {
      this.loginBtn = false;
    }, 3000);
  }
  putMessage(){
    this.message = "login";
  }
}