import { NgIf, AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CmsBannerComponent, SemanticPathService, CmsService } from '@spartacus/core';
import { BannerComponent, CmsComponentData, GenericLinkComponent, LcpContextDirective, MediaComponent } from '@spartacus/storefront';

// Custom CMS banner mapped to Spartacus SimpleResponsiveBannerComponent.
@Component({
  selector: 'app-custom-banner',
  imports: [LcpContextDirective,
    NgIf,
    GenericLinkComponent,
    MediaComponent,
    AsyncPipe,],
  templateUrl: './custom-banner.component.html',
  styleUrl: './custom-banner.component.scss',
})
export class CustomBanner extends BannerComponent {
  constructor(protected override component: CmsComponentData<CmsBannerComponent>,
    protected override urlService: SemanticPathService,
    protected override cmsService: CmsService)
  {
    super(component, urlService, cmsService);
  }
}
