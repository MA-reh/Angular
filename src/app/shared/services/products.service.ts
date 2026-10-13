import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class ProductsService {

  public urlProducts: string = "https://semicode.tech/api/v1/dashboard/products"

  public http = inject(HttpClient);

  public getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.urlProducts);
  }

}
