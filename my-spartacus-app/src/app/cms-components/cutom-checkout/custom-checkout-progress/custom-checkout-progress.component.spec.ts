import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckoutProgress } from './custom-checkout-progress.component';

describe('CustomCheckoutProgress', () => {
  let component: CustomCheckoutProgress;
  let fixture: ComponentFixture<CustomCheckoutProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCheckoutProgress],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCheckoutProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
