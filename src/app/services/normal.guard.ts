import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class NormalGuard implements CanActivate {
  constructor(private login: StorageService, private router: Router) {}
  private roles: string[] = [];
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = this.login.getUser();
    this.roles = user.roles;
    if (this.login.isLoggedIn() && this.roles.includes('ROLE_USER')) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
