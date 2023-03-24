import { Component } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData: any = {};

  constructor(private _userService: UserService, private _router: Router) {}

  login() {
    this._userService.login(this.loginData).subscribe({
      next: (v) => {
        localStorage.setItem('token', v.CLTOKEN23);
        console.log(v);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

}
