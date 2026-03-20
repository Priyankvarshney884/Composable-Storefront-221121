import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { CheckoutDeliveryAddressComponent, CheckoutStepService } from '@spartacus/checkout/base/components';
import { CheckoutDeliveryAddressFacade, CheckoutDeliveryModesFacade } from '@spartacus/checkout/base/root';
import { Address, GlobalMessageService, TranslatePipe, TranslationService, UserAddressService } from '@spartacus/core';
import { CardComponent, SpinnerComponent } from '@spartacus/storefront';
import { AddressFormComponent } from '@spartacus/user/profile/components';
import { CustomAddressForm } from './custom-address-form/custom-address-form.component';

@Component({
  selector: 'app-cutom-checkout',
  imports: [
    NgIf,
    NgFor,
    CardComponent,
    AddressFormComponent,
    SpinnerComponent,
    AsyncPipe,
    TranslatePipe,
    CustomAddressForm
  ],
  templateUrl: './cutom-checkout.component.html',
  styleUrl: './cutom-checkout.component.scss',
})
export class CutomCheckout extends CheckoutDeliveryAddressComponent implements OnInit {
  constructor(
    protected override userAddressService: UserAddressService,
    protected override checkoutDeliveryAddressFacade: CheckoutDeliveryAddressFacade,
    protected override activatedRoute: ActivatedRoute,
    protected override translationService: TranslationService,
    protected override activeCartFacade: ActiveCartFacade,
    protected override checkoutStepService: CheckoutStepService,
    protected override checkoutDeliveryModesFacade: CheckoutDeliveryModesFacade,
    protected override globalMessageService: GlobalMessageService
  ){
    super(userAddressService,checkoutDeliveryAddressFacade,activatedRoute, translationService, activeCartFacade, checkoutStepService, checkoutDeliveryModesFacade,globalMessageService)
  }
  addressData: Address | undefined
}
