import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';
import { LoginService } from '../../services/auth/login-service';

@Component({
  selector: 'app-login-status',
  imports: [],
  templateUrl: './login-status.html',
  styleUrl: './login-status.css',
})
export class LoginStatus {
    authService = inject(AuthService)
    // loginService = inject(LoginService);

    logout() {
        this.authService.logout().subscribe(reponse => {
            
        })
        console.log("logging out");
    }
}
