import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBanner } from './custom-banner.component';

describe('CustomBanner', () => {
  let component: CustomBanner;
  let fixture: ComponentFixture<CustomBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
