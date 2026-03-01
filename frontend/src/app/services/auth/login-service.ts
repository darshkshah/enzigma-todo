import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { AuthService } from './auth-service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    // constructor(private http:HttpClient) {}

    // private router = inject(Router);

    // loginApiUrl:string = "/api/token/web/";
    // logoutApiUrl:string = "/api/logout/";
    // authService = inject(AuthService)

    // cookieLogin() {
    //     const body = {
    //         "username": "darshshah",
    //         "password": "password123"
    //     };
    //     return this.http.post(this.loginApiUrl, body, {observe: 'response'}).pipe(
    //         tap(response=> {
    //             console.log(response.status)
    //             if (response.status === 200) {
    //                 this.authService.loggedIn.set(true);
    //                 this.router.navigate(['/']);
    //             }
    //         }),
    //         catchError((error) => {
    //             console.log(error)
    //             return of(null);
    //         })
    //     );
    // }

    // cookieLogout() {
    //     console.log("Logging out 1")
    //     return this.http.post(this.logoutApiUrl, {}, {observe: 'response'}).pipe(
    //         tap(response=> {
    //             console.log("i got response")
    //             if (response.status === 200) {
    //                 console.log(response.body);
    //                 this.authService.cookieLogoutUser()
    //             }
    //         }),
    //         catchError((error) => {
    //             this.authService.cookieLogoutUser()
    //             return of(null);
    //         })
    //     )
    // }
}
