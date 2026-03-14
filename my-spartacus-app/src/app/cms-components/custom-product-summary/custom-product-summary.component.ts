import { NgIf, AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CmsBannerComponent, CmsService, OccEndpointsService, Product, ProductService, TranslatePipe, Image, ImageGroup } from '@spartacus/core';
import { Media, PromotionsComponent, OutletDirective, CurrentProductService, ProductSummaryComponent, MediaComponent } from '@spartacus/storefront';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-custom-product-summary',
  imports: [NgIf,
    PromotionsComponent,
    MediaComponent,
    OutletDirective,
    AsyncPipe,
    TranslatePipe],
  templateUrl: './custom-product-summary.component.html',
  styleUrl: './custom-product-summary.component.scss',
})
export class CustomProductSummary extends ProductSummaryComponent implements OnInit {
  constructor(
    protected override currentProductService: CurrentProductService,
    protected productService: ProductService,
    protected cmsService: CmsService,
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService
  ) {
    super(currentProductService);
  }

  newProductData$!: Observable<Product | undefined>;
  banner$!: Observable<CmsBannerComponent | null>;
  showBanner = false;
  inputBannerRef = false;
  BannerName: string = "ElectronicsHompageSplashBannerComponent";


  ngOnInit(): void {
    this.banner$ = this.cmsService.getComponentData(this.BannerName);
  }

  findDescription(value: string) {
    this.newProductData$ = this.productService.get(value);
  }

  loadBanner(value: any): void {
    this.showBanner = true;
  }

  loadNewBanner(value: any) {
    this.BannerName = value;
    this.showBanner = true;
    this.banner$ = this.cmsService.getComponentData(this.BannerName);

  }

  clearBanner(): void {
    this.showBanner = false;
    this.BannerName='';
  }

  clearDescription(input: HTMLInputElement) {
    this.newProductData$ = of(undefined);
    input.value = '';
  }

  getImage(data: CmsBannerComponent): Image | ImageGroup | undefined {
    if (data.media) {
      if ('url' in data.media) {
        return data.media as Image;
      } else {
        return data.media as ImageGroup;
      }
    }
    return undefined;
  }
}
