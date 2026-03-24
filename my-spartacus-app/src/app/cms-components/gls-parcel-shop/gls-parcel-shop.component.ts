import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { TranslatePipe } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { GlsParcelShop } from './gls-parcel-shop.model';
import { GlsParcelShopService } from './gls-parcel-shop.service';

@Component({
  selector: 'app-gls-parcel-shop',
  standalone: true,
  imports: [NgIf, AsyncPipe, TranslatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gls-parcel-shop.component.html',
  styleUrl: './gls-parcel-shop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlsParcelShopComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('glsWidget', { static: true }) private glsWidgetRef!: ElementRef;

  selectedShop$!: Observable<GlsParcelShop | null>;
  isOpen = false;

  private sub = new Subscription();

  constructor(
    public glsService: GlsParcelShopService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.selectedShop$ = this.glsService.getSelectedShop();
  }

  ngAfterViewInit(): void {
    const el = this.glsWidgetRef.nativeElement;

    this.sub.add(
      this.glsService.getDeliveryCountry().pipe(take(1)).subscribe((isoCode) => {
        el.setAttribute('country', this.glsService.resolveCountryCode(isoCode));
        this.cdr.markForCheck();
      })
    );

    el.addEventListener('change', (e: Event) => {
      const detail = (e as CustomEvent<GlsParcelShop>).detail;
      if (detail) {
        this.glsService.selectShop(detail);
        this.close();
      }
    });
  }

  open(): void {
    this.isOpen = true;
    this.cdr.markForCheck();
  }

  close(): void {
    this.isOpen = false;
    this.cdr.markForCheck();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('gls-drawer-backdrop')) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen) this.close();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
