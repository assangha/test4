import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../data';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {

  contact:Contact;

  public warning:string;
  

  constructor(private router:Router) { }

  onSubmit(f: NgForm): void {
    if(this.contact.Name&&this.contact.Email&&this.contact.Message){
      this.router.navigate(['/login']);
    }else{
      this.warning="Something is wrong";
    }
  }

  ngOnInit(): void {
  }

}
