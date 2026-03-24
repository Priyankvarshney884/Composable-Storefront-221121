import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCheckoutProgress } from './custom-checkout-progress.component';
import { CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard } from '@spartacus/checkout/base/components';
import { provideConfig, CmsConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        CheckoutProgress: {
          component: CustomCheckoutProgress,
          guards: [CheckoutAuthGuard, CartNotEmptyGuard, CheckoutStepsSetGuard],
        },
      },
    }),
  ],
})
export class CustomCheckoutProgressModule {}
