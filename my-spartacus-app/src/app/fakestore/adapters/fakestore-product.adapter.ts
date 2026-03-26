import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '@spartacus/core';

@Injectable({ providedIn: 'root' })
export class FakestoreProductAdapter {
  private readonly baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  load(id: string): Observable<Product> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(
      map((item) => this.normalize(item))
    );
  }

  // Normalize FakeStore API response into Spartacus Product shape.
  private normalize(item: any): Product {
    return {
      code: String(item.id),
      name: item.title,
      description: item.description,
      price: {
        value: item.price,
        currencyIso: 'USD',
        formattedValue: `$${item.price}`,
      },
      categories: [{ name: item.category }],
      // Match Spartacus Images contract: ImageType -> ImageGroup (format -> Image)
      images: {
        PRIMARY: {
          product: {
            url: item.image,
            altText: item.title,
            format: 'product',
          },
        },
      },
    };
  }
}
