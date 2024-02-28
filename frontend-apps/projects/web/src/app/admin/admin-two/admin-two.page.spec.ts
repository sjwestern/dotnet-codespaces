import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTwoPage } from './admin-two.page';

describe('AdminTwoPage', () => {
  let component: AdminTwoPage;
  let fixture: ComponentFixture<AdminTwoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTwoPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
