import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAddressForm } from './custom-address-form.component';

describe('CustomAddressForm', () => {
  let component: CustomAddressForm;
  let fixture: ComponentFixture<CustomAddressForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAddressForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomAddressForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
