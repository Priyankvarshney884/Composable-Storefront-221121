import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomCheckout } from './cutom-checkout.component';

describe('CutomCheckout', () => {
  let component: CutomCheckout;
  let fixture: ComponentFixture<CutomCheckout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutomCheckout],
    }).compileComponents();

    fixture = TestBed.createComponent(CutomCheckout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
