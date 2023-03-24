import { Component } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerData: any = {};

  constructor(private _userService: UserService, private _router: Router) {}

  register() {
    this._userService.registerUser(this.registerData).subscribe({
      next: (v) => {
        localStorage.setItem('token', v.CLTOKEN23);
        this._router.navigate(['/createTask'])
        console.log(v);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
