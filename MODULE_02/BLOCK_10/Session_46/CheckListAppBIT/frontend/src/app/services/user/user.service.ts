import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private APP: string;

  constructor(private _http: HttpClient, private _router: Router) {
    this.APP = environment.APP;
  }

  registerUser(user: any) {
    return this._http.post<any>(this.APP + 'user/register', user);
  }

  login(user: any) {
    return this._http.post<any>(this.APP + 'auth/login', user);
  }

  isLogged() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
