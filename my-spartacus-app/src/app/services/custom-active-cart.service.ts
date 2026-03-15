import { Injectable, OnDestroy } from "@angular/core";
import { ActiveCartService, getCartIdByUserId } from "@spartacus/cart/base/core";
import { ActiveCartFacade, MultiCartFacade, OrderEntry } from "@spartacus/cart/base/root";
import { UserIdService, WindowRef } from "@spartacus/core";
import { take, withLatestFrom } from "rxjs";

@Injectable({ providedIn: 'root' })

export class CustomActiveCartService extends ActiveCartService implements ActiveCartFacade, OnDestroy {



    constructor(
        protected override multiCartFacade: MultiCartFacade,
        protected override userIdService: UserIdService,
        protected override winRef: WindowRef
    ) {
        super(multiCartFacade, userIdService, winRef);
        this.initActiveCart();
        this.detectUserChange();
    }


    override addEntry(productCode: string, quantity: number, pickupStore?: string): void {
        console.log('Custom Active Cart Service '+productCode+" "+quantity);
    this.requireLoadedCart()
      .pipe(withLatestFrom(this.userIdService.getUserId()))
      .subscribe(([cart, userId]) => {
        this.multiCartFacade.addEntry(
          userId,
          getCartIdByUserId(cart, userId),
          productCode,
          quantity,
          pickupStore
        );
      });
  }
  override removeEntry(entry: OrderEntry): void {
    alert("this cart entry is removed "+ entry);
    this.activeCartId$
      .pipe(withLatestFrom(this.userIdService.getUserId()), take(1))
      .subscribe(([cartId, userId]) => {
        this.multiCartFacade.removeEntry(
          userId,
          cartId,
          entry.entryNumber as number
        );
      });
      
  }



    override ngOnDestroy(): void {
    }
}