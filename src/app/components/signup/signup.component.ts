import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUserRegister } from '../../models/IUser';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: IUserRegister = { name: '', email: '', password: '' };

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signUp(e) {
    e.preventDefault();

    this.authenticationService.signUp(this.user).subscribe(
      (res: any) => {
        console.log(res);

        if (res.ok) {
          this.router.navigate(['/signin']);
        }
      },
      (err) => console.log(err)
    );
  }
}
