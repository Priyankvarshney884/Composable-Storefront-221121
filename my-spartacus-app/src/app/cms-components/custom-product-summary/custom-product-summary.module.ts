import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideConfig, CmsConfig, FeaturesConfigModule, I18nModule } from '@spartacus/core';
import { CustomProductSummary } from './custom-product-summary.component';
import { MediaModule, OutletModule, PromotionsModule } from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [CommonModule,
    OutletModule,
    I18nModule,
    PromotionsModule,
    FeaturesConfigModule,
    CustomProductSummary,
     MediaModule,
  ],
   providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductSummaryComponent: {
          component: CustomProductSummary,
        },
      },
    }),
  ],
})
export class CustomProductSummaryModule {}
