import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [RouterOutlet, NavComponent]
})
export class LayoutComponent {

    constructor(private router: Router){}

    get isAdminRoute(): boolean {
        return this.router.isActive(this.router.createUrlTree(['/admin']), {paths: 'subset', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored'});
    }
}
