import { Component } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import { Router } from '@angular/router';
import { SnackbarComponent } from '../../../../shared/components/snackbar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  messageSuccessful: string = 'Sesión iniciada';
  errorMessage: string = 'Datos incompletos';
  registerData: any = {};

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _alertComponent: SnackbarComponent
  ) {}

  register() {
    if (
      !this.registerData.name || 
      !this.registerData.email ||
      !this.registerData.password
    ) {
      this._alertComponent.openSnackBarError(this.errorMessage);
    } else {
      this._userService.registerUser(this.registerData).subscribe({
        next: (v) => {
          localStorage.setItem('token', v.CLTOKEN23);
          this._router.navigate(['/createTask']);
          console.log(v);
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
