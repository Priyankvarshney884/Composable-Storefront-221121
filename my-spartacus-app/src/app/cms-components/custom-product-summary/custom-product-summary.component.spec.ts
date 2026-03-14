import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductSummary } from './custom-product-summary.component';

describe('CustomProductSummary', () => {
  let component: CustomProductSummary;
  let fixture: ComponentFixture<CustomProductSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomProductSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomProductSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
