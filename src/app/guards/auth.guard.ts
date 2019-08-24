import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService} from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private loginService: LoginService, private route: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.checkAuth()) {
      return true;
    } else {
      // navigate to login page
      this.route.navigate(['/login']);
      // you can save redirect url so after authing we can move them back to the page they requested
      return false;
    }
  }
}


