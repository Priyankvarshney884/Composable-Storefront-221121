import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CheckoutStepService } from "@spartacus/checkout/base/components";
import { CheckoutConfig } from "@spartacus/checkout/base/root";
import { RoutingService, RoutingConfigService } from "@spartacus/core";

@Injectable({ providedIn: 'root' })

export class CustomCheckoutSteps extends CheckoutStepService {
    constructor(
    protected override routingService: RoutingService,
    protected override checkoutConfig: CheckoutConfig,
    protected override routingConfigService: RoutingConfigService
  ) {
    super(routingService, checkoutConfig, routingConfigService);
    this.resetSteps();
  }

  override getCurrentStepIndex(activatedRoute: ActivatedRoute): number | null {
    const currentStepUrl = this.getStepUrlFromActivatedRouteSafe(activatedRoute);

    const stepIndex = this.allSteps.findIndex(
      (step) =>
        currentStepUrl === `/${this.getStepUrlFromStepRouteSafe(step.routeName)}`
    );
    return stepIndex === -1 ? null : stepIndex;
  }

  private getStepUrlFromActivatedRouteSafe(
    activatedRoute: ActivatedRoute
  ): string | null {
    console.log("custom checkout steps ")
    return activatedRoute &&
      activatedRoute.snapshot &&
      activatedRoute.snapshot.url
      ? `/${activatedRoute.snapshot.url.join('/')}`
      : null;
  }

  private getStepUrlFromStepRouteSafe(stepRoute: string): string | null {
    return (
      this.routingConfigService.getRouteConfig(stepRoute)?.paths?.[0] ?? null
    );
  }


}
