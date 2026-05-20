import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrl: './admin-layout.component.scss',
    imports: [RouterOutlet, AdminNavComponent],
})
export class AdminLayoutComponent {}
