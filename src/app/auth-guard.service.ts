import {Injectable} from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    // flag to check if login was already allowed and avoid calling API multiple times
    isLoggedIn = false;

    constructor(private authService: AuthService, private router: Router, private http: HttpClient) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        if (!this.isLoggedIn) {
            return this.authService.login()
                .pipe(
                    map(response => {
                        this.isLoggedIn = response.success;
                        // allow this route, sice API has been successfully returned
                        return this.isLoggedIn;
                    }),
                    // do not allow this route, if there was any error while calling API
                    catchError(error => of(false))
                );
        } else {
            return of(this.isLoggedIn);
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }

}
