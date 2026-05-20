import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AdminNavComponent } from './admin-nav.component';

describe('AdminNavComponent', () => {
    let component: AdminNavComponent;
    let fixture: ComponentFixture<AdminNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AdminNavComponent],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(AdminNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
