import { Component, OnInit } from '@angular/core';
import {  FormsModule,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})

export class LoginformComponent implements OnInit {

  data:LoginComponent;

  Error:boolean;
  Error1:boolean; 
  userName: string;
  password: string;

  constructor(private router:Router) { }


  onSubmit(f: NgForm): void {
    
    this.Error=this.data.validateUserName(this.userName);
    this.Error1=this.data.validatePassword(this.password);
    if(this.Error==false && this.Error1==false){
      this.router.navigate(['/contactus']);
    }
  }



  ngOnInit(): void {
  }

}
