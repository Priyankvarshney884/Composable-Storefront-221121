import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '@spartacus/core';
import { FakestoreProductService } from '../facade/fakestore-product.service';

@Component({
  selector: 'app-fakestore-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fakestore-product.component.html',
  styleUrl: './fakestore-product.component.scss',
})
export class FakestoreProductComponent implements OnInit {
  productId = '1';
  currentId = '1';

  product$: Observable<Product | null> | undefined;
  loading$: Observable<boolean> | undefined;
  error$: Observable<any> | undefined;

  constructor(private fakestoreService: FakestoreProductService) {}

  ngOnInit(): void {
    // Seed the screen with a real product on first load.
    this.loadProduct();
  }

  loadProduct(): void {
    const id = String(this.productId).trim();
    if (!id) {
      return;
    }

    this.currentId = id;
    // Command + query: trigger load, then bind to state streams.
    this.fakestoreService.load(id);
    this.product$ = this.fakestoreService.get(id);
    this.loading$ = this.fakestoreService.isLoading(id);
    this.error$ = this.fakestoreService.getError(id);
  }

  getImageUrl(product: Product): string | undefined {
    const images = product.images as any;
    if (!images) {
      return undefined;
    }

    // Spartacus Images can be ImageGroup or ImageGroup[]; normalize to one Image.
    const primaryGroup = images.PRIMARY ?? images.primary ?? images['PRIMARY'];
    const group = Array.isArray(primaryGroup) ? primaryGroup[0] : primaryGroup;
    if (!group) {
      return undefined;
    }

    const image = group.product ?? group.zoom ?? Object.values(group)[0];
    return image?.url;
  }
}
