import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Data1, User} from './../data'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  Error:boolean;
  Error1:boolean;
  public user:Data1;
  public data:User;
  public warning:string;

  constructor(private auth:AuthService, private router:Router) { }
  //constructor() { }

  onSubmit(f: NgForm): void {
    
    this.Error=this.validateUserName(this.user.userName);
    this.Error1=this.validatePassword(this.user.password);
    if(this.Error==false && this.Error1==false){
      this.auth.login(this.user).subscribe(
        (success) => {
          
          localStorage.setItem('access_token',success.token);
          
          this.router.navigate(['/contactus']);
        },
        (err) => {
          this.warning = err.error.message;
        }
      );
    }else{
      this.warning = "Username or password is invalid";
    }
  }

  validateUserName(name):boolean{
    if(name==this.data.userName){
      return true;
    }else{
      return false;
    }
  }
  validatePassword(pass):boolean{
    if(pass==this.data.password){
      return true;
    }else{
      return false;
    }
  }

  ngOnInit() {
    this.user = new Data1();
  }

}
