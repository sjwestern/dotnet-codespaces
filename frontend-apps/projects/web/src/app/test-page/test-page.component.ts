import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
    selector: 'app-test-page',
    standalone: true,
    templateUrl: './test-page.component.html',
    styleUrl: './test-page.component.scss',
    imports: [NavComponent]
})
export default class TestPageComponent {
someProp: string = '';
}
