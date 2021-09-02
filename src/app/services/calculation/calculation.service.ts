import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { MockUrlEnum } from 'src/app/enums/mocks-url.enum';
import { ProductList } from 'src/app/interfaces/product-list.interface';
import { Observable } from 'rxjs';
import { CalculationList } from 'src/app/interfaces/calculation-list.interface';
import { CalculationInfo } from 'src/app/interfaces/calculation-info.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor(private http: HttpClient) {}

  getProductList(searchedProduct: string): Observable<ProductList[]> {
    let urlRequest = MockUrlEnum.PRODUCT_LIST as string;

    if (environment.production) {
      urlRequest = `${environment.URL_BASE}/recipes`;
    }

    return this.http
      .get<ProductList[]>(urlRequest, { params: { value: searchedProduct } })
      .pipe(take(1));
  }

  getCalculationResult(requestId: string) {
    let urlRequest = MockUrlEnum.CALCULATION_RESULT as string;

    if (environment.production) {
      urlRequest = `${environment.URL_BASE}/calculation/requests/${requestId}`;
    }

    return this.http.get<CalculationInfo>(urlRequest).pipe(take(1));
  }

  getCalculationList() {
    let urlRequest = MockUrlEnum.CALCULATION_LIST as string;

    if (environment.production) {
      urlRequest = `${environment.URL_BASE}/calculation/requests`;
    }

    return this.http.get<CalculationList[]>(urlRequest).pipe(take(1));
  }

  startCalc(
    recipeId: number | null,
    foodName: string,
    searchType: string,
    weightAmount: number
  ) {
    let urlRequest = MockUrlEnum.START_CALC as string;

    if (environment.production) {
      urlRequest = `${environment.URL_BASE}/calculation`;
    }

    return this.http
      .post(urlRequest, {
        foodName,
        type: searchType,
        recipeId: recipeId,
        amount: weightAmount,
      })
      .pipe(take(1));
  }
}
