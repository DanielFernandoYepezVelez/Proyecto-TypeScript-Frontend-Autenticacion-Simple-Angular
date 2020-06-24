import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authenticateService: AuthenticationService) {}

  intercept(req, next) {
    /* El Metodo clone Me Permite Establecer Mas Cabeceras */
    const tokenizeReq = req.clone({
      /* Agrego Una Nueva Cabecera Llamada Authorization En Cada Petición Que Se Haga */
      setHeaders: {
        Authorization: `Bearer ${this.authenticateService.getToken()}`,
      },
    });
    return next.handle(tokenizeReq);
  }
}
