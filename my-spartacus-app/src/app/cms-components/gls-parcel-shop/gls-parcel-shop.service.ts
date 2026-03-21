import { Injectable } from '@angular/core';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { GLS_SUPPORTED_COUNTRIES, GlsParcelShop } from './gls-parcel-shop.model';

@Injectable({ providedIn: 'root' })
export class GlsParcelShopService {
  private selectedShop$ = new BehaviorSubject<GlsParcelShop | null>(null);

  constructor(private activeCartFacade: ActiveCartFacade) {}

  getSelectedShop(): Observable<GlsParcelShop | null> {
    return this.selectedShop$.asObservable();
  }

  selectShop(shop: GlsParcelShop): void {
    this.selectedShop$.next(shop);
  }

  clearShop(): void {
    this.selectedShop$.next(null);
  }

  /** Returns the lowercase country code for the gls-dpm-dialog `country` attribute. */
  resolveCountryCode(isoCode: string): string {
    const upper = isoCode?.toUpperCase();
    return (upper in GLS_SUPPORTED_COUNTRIES ? upper : 'HR').toLowerCase();
  }

  getDeliveryCountry(): Observable<string> {
    return this.activeCartFacade.getActive().pipe(
      map((cart) => cart?.deliveryAddress?.country?.isocode ?? 'HR')
    );
  }

  isCountrySupported(isoCode: string): boolean {
    return isoCode?.toUpperCase() in GLS_SUPPORTED_COUNTRIES;
  }
}
