import { CheckoutConfig, CheckoutStepType, DeliveryModePreferences } from "@spartacus/checkout/base/root";

// Custom step type for GLS ParcelShop selection
export const GLS_PARCEL_SHOP_STEP_TYPE = 'glsParcelShop' as unknown as CheckoutStepType;

export const CustomCheckoutSteps : CheckoutConfig = {
    checkout: {
    steps: [
      {
        id: 'deliveryAddress',
        name: 'checkoutProgress.deliveryAddress',
        routeName: 'checkoutDeliveryAddress',
        type: [CheckoutStepType.DELIVERY_ADDRESS],
      },
      {
        id: 'deliveryMode',
        name: 'checkoutProgress.deliveryMode',
        routeName: 'checkoutDeliveryMode',
        type: [CheckoutStepType.DELIVERY_MODE],
      },
      // {
      //   id: 'glsParcelShop',
      //   name: 'GLS ParcelShop',
      //   routeName: 'checkoutGlsParcelShop',
      //   type: [GLS_PARCEL_SHOP_STEP_TYPE],
      // },
      {
        id: 'paymentDetails',
        name: 'checkoutProgress.paymentDetails',
        routeName: 'checkoutPaymentDetails',
        type: [CheckoutStepType.PAYMENT_DETAILS],
      },
    //   {
    //     id: 'reviewOrder',
    //     name: 'checkoutProgress.reviewOrder',
    //     routeName: 'checkoutReviewOrder',
    //     type: [CheckoutStepType.REVIEW_ORDER],
    //   },
    ],
    express: false,
    defaultDeliveryMode: [DeliveryModePreferences.FREE],
    guest: true,
  },
}