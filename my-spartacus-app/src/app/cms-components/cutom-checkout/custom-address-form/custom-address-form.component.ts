import { NgIf, AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { UserAddressService, GlobalMessageService, TranslationService, TranslatePipe } from '@spartacus/core';
import { FormErrorsComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, LaunchDialogService, NgSelectA11yDirective } from '@spartacus/storefront';
import { AddressFormComponent } from '@spartacus/user/profile/components';
import { UserProfileFacade } from '@spartacus/user/profile/root';

@Component({
  selector: 'app-custom-address-form',
  imports: [
     FormRequiredLegendComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    FormRequiredAsterisksComponent,
    NgSelectComponent,
    NgSelectA11yDirective,
    FormErrorsComponent,
    AsyncPipe,
    TranslatePipe,
  ],
  templateUrl: './custom-address-form.component.html',
  styleUrl: './custom-address-form.component.scss',
})
export class CustomAddressForm extends AddressFormComponent implements OnInit, OnDestroy {

  constructor(
    protected override fb: UntypedFormBuilder,
    protected override userAddressService: UserAddressService,
    protected override globalMessageService: GlobalMessageService,
    protected override translation: TranslationService,
    protected override launchDialogService: LaunchDialogService,
    protected override userProfileFacade: UserProfileFacade
  ){
    super(fb, userAddressService, globalMessageService, translation, launchDialogService ,userProfileFacade)
  }
}
