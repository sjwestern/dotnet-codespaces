import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestPageComponent } from './admin-test-page.component';

describe('AdminTestPageComponent', () => {
  let component: AdminTestPageComponent;
  let fixture: ComponentFixture<AdminTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTestPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
