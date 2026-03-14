import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBanner } from './custom-banner.component';
import { CmsConfig, FeaturesConfigModule, provideConfig } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { GenericLinkModule, MediaModule, LcpContextDirectiveModule } from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule,
    GenericLinkModule,
    MediaModule,
    FeaturesConfigModule,
    LcpContextDirectiveModule,
    CustomBanner],
  exports:[CustomBanner],
  providers:[
    // Map CMS component type to our custom banner implementation.
    provideConfig(<CmsConfig>{
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBanner,
        },

      },
    
    })
  ]
})
export class CustomBannerModule {

}
