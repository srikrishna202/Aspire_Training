import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  //templateUrl: './app/common.html',
  styleUrls: ['./login-page.component.css'],
  //encapsulation: ViewEncapsulation.None

  
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginPageComponent {
  //binding Data,Event,properties.
  username = "";
  nameMessage = "";
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
 
  //event Binding $Event
  updateData(event : Event){
    this.username = (<HTMLInputElement>event.target).value;

    if(this.username.length >= 8)
    {
      this.nameMessage = "storng";
    }
    else{
      this.nameMessage = "week"
    }
  }
}