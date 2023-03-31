import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: UserService, private _router: Router) {}

  canActivate(): boolean {
    if (!this._authService.isLogged()) {
      this._router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
