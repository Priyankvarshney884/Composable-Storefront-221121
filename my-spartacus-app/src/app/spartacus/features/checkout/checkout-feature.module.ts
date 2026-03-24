import { NgModule } from '@angular/core';
import {
  checkoutTranslationChunksConfig,
  checkoutTranslationsEn,
} from '@spartacus/checkout/base/assets';
import { CHECKOUT_FEATURE, CheckoutRootModule } from '@spartacus/checkout/base/root';
import { CmsConfig, I18nConfig, provideConfig, RoutingConfig } from '@spartacus/core';
import { GlsParcelShopComponent } from '../../../cms-components/gls-parcel-shop/gls-parcel-shop.component';

@NgModule({
  declarations: [],
  imports: [CheckoutRootModule],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        [CHECKOUT_FEATURE]: {
          module: () => import('@spartacus/checkout/base').then((m) => m.CheckoutModule),
        },
      },
      cmsComponents: {
        GlsParcelShopComponent: {
          component: GlsParcelShopComponent,
        },
      },
    }),
    provideConfig(<RoutingConfig>{
      routing: {
        routes: {
          checkoutGlsParcelShop: {
            paths: ['checkout/gls-parcel-shop'],
          },
        },
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: { en: checkoutTranslationsEn },
        chunks: checkoutTranslationChunksConfig,
      },
    }),
  ],
})
export class CheckoutFeatureModule {}
