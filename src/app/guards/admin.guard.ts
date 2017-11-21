import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import decode from 'jwt-decode';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');
    const payload = decode(token);

    if (!this.auth.loggedIn() || !payload.isAdmin) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
