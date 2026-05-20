import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [RouterOutlet, NavComponent],
})
export class LayoutComponent {
    constructor(private router: Router) {}

    get isAdminRoute(): boolean {
        return this.router.isActive(this.router.createUrlTree(['/admin']), {
            paths: 'subset',
            queryParams: 'ignored',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });
    }
}
