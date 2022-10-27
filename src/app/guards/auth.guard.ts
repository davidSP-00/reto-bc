import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = localStorage.getItem('token');
    if (token) {
      let parseToken = JSON.parse(token);
      if (parseToken.exp < Math.floor(new Date().getTime() / 1000)) {
        return this.noAuth()
      }
      return true
    }
    return this.noAuth()
  }

  noAuth() {
    this.router.navigateByUrl('/landing');
    localStorage.removeItem('token')
    return false;
  }
}
