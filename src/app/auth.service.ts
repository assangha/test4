import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

import {User} from './data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  public getToken(): string {
    return localStorage.getItem('access_token');
  }

  public readToken(): any{
    const token = localStorage.getItem('access_token');
    return helper.decodeToken(token);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');

    // to see if the token is expired

    if (token) {
      console.log('token exists');
      return true;
    } else {
      console.log('no token');
      return false;
    }
  }

  login(user: User): Observable<any> {
    // Attempt to login
    return this.http.post<any>('http://localhost:4200/login', user);
  }
}
