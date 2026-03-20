import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CheckoutProgressComponent, CheckoutStepService } from '@spartacus/checkout/base/components';
import { TranslatePipe } from '@spartacus/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CurrentStepInfo {
  name: string;
  stepNumber: number;
  totalSteps: number;
}

@Component({
  selector: 'app-custom-checkout-progress',
  imports: [AsyncPipe, TranslatePipe, NgIf],
  templateUrl: './custom-checkout-progress.component.html',
  styleUrl: './custom-checkout-progress.component.scss',
})
export class CustomCheckoutProgress extends CheckoutProgressComponent implements OnInit {
  constructor(protected override checkoutStepService: CheckoutStepService) {
    super(checkoutStepService);
  }

  currentStepInfo$!: Observable<CurrentStepInfo>;

 override ngOnInit(): void {
    this.currentStepInfo$ = combineLatest([
      this.steps$,
      this.activeStepIndex$,
    ]).pipe(
      map(([steps, activeIndex]) => ({
        name: steps[activeIndex]?.name ?? '',
        stepNumber: activeIndex + 1,
        totalSteps: steps.length,
      }))
    );
  }
}
