import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUserSession } from '../../models/IUser';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user: IUserSession = { email: '', password: '' };

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signIn(e) {
    e.preventDefault();

    this.authenticationService.signIn(this.user).subscribe(
      (res: any) => {
        console.log(res);

        if (res.ok) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/privateTasks']);
        }
      },
      (err) => console.log(err)
    );
  }
}
