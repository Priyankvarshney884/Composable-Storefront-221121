import { NgModule } from '@angular/core';
import { translationChunksConfig, translationsEn } from '@spartacus/assets';
import {
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  provideConfigFactory,
  SiteContextConfig,
} from '@spartacus/core';
import {
  defaultCmsContentProviders,
  layoutConfigFactory,
  mediaConfig,
} from '@spartacus/storefront';
import { CustomLayoutConfig } from '../config/custom-layout';
import { customProductOccConfig } from '../config/custom-product-occ-config';
import { ActiveCartService } from '@spartacus/cart/base/core';
import { CustomActiveCartService } from '../services/custom-active-cart.service';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { CustomCheckoutSteps } from '../config/custom-checkout-steps-config';
import { customTranslations } from '../../assets/custom-translation';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfigFactory(layoutConfigFactory),
    {
      // overridin the active cart service with custom active cart service to spartacus app level 
      provide: ActiveCartService,
      useClass:CustomActiveCartService
    },
    {
      // overridin the active cart service with custom active cart service to spartacus app level 
      provide: ActiveCartFacade,
      useClass:CustomActiveCartService
    },
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://composable-storefront-demo.eastus.cloudapp.azure.com:8443',         
        }
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {},
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: { en: translationsEn },
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: customTranslations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '221121.7',
      },
    }),
    provideConfig(CustomLayoutConfig),
    provideConfig(customProductOccConfig),
    provideConfig(CustomCheckoutSteps),
  ],
})
export class SpartacusConfigurationModule {}
