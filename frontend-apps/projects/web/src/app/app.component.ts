import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    private readonly authService = inject(AuthService);
    title = 'web';
    isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
    isAdmin$: Observable<boolean> = this.authService.isAdmin$;
}
