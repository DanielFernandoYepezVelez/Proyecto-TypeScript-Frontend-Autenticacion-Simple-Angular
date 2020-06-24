import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUserRegister, IUserSession } from '../models/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  private setUrl(query: string) {
    const url = `http://localhost:4000/api/${query}`;
    return url;
  }

  signUp(user: IUserRegister) {
    return this.http.post(this.setUrl('createUser'), user);
  }

  signIn(user: IUserSession) {
    return this.http.post(this.setUrl('verifyUser'), user);
  }

  loggedIn(): boolean {
    /* Si existe Un Token Me Devuelve Un True, Sino Existe Me Devuelve Un False */
    return !!localStorage.getItem('token');
  }

  /* Obtener El Token Para Implementarlo En La Cabecera De Token - Interceptor */
  getToken(): string {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
