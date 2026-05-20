import { Component } from '@angular/core';

@Component({
    selector: 'app-test-page',
    templateUrl: './test-page.component.html',
    styleUrl: './test-page.component.scss',
    imports: [],
})
export default class TestPageComponent {
    someProp: string = '';
}
