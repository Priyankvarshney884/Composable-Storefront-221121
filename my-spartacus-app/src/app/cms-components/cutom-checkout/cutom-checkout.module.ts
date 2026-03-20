import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { CutomCheckout } from './cutom-checkout.component';

@NgModule({
  declarations: [],
  imports: [CommonModule,
    CutomCheckout,
  ],
   providers: [
      provideConfig(<CmsConfig>{
        cmsComponents: {
          CheckoutDeliveryAddress: {
            component: CutomCheckout,
          },
        },
      }),
    ],
})
export class CutomCheckoutModule { }
