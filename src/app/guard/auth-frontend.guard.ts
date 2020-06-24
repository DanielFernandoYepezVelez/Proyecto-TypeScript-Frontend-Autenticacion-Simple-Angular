import { Injectable } from '@angular/core';
import {
  CanActivate,
  /* ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree, */
} from '@angular/router';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';

/* Services */
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthFrontendGuard implements CanActivate {
  /* Creando El Constructor Para Intanciar Y/O Inicializar La Clase De Los Servicios */
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authenticationService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }

  /* Se Debe Retirar */
  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  } */
}
