import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { MockUrlEnum } from 'src/app/enums/mocks-url.enum';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor(private http: HttpClient) {}

  getProductList(searchedProduct: string) {
    let urlRequest = MockUrlEnum.PRODUCT_LIST as string;

    if (environment.production) {
      urlRequest = `${environment.URL_BASE}/recipes`;
    }

    return this.http
      .get(urlRequest, { params: { value: searchedProduct } })
      .pipe(take(1));
  }

  sendInfosToCalculate() {}
}
