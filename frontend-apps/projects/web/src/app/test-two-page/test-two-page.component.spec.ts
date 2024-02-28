import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTwoPageComponent } from './test-two-page.component';

describe('TestTwoPageComponent', () => {
  let component: TestTwoPageComponent;
  let fixture: ComponentFixture<TestTwoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTwoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
