import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

/* Components */
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PublicTaskComponent } from './components/public-task/public-task.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';

/* Rutas */
import { AppRoutingModule } from './app-routing.module';

/* Guard */
import { AuthFrontendGuard } from './guard/auth-frontend.guard';

/* Services DE HTTP_INTERCEPTORS */
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    PublicTaskComponent,
    PrivateTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthFrontendGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
