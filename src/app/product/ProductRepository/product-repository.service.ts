import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductView } from '../../Models/product-view';
import { DatasourceService } from '../../Shared/datasource.service';

@Injectable()
export class ProductRepositoryService {

  constructor(private datasource: DatasourceService) { }

  public GetProducts(): Observable<ProductView[]> {
    return this.datasource.GetItems<ProductView>("api/Product/index");
  }

  public GetProduct(productId: string): Observable<ProductView> {
    return this.datasource.GetItem<ProductView>("api/Product/details?id=" + productId);
  }
  public CreateProduct(product: ProductView): Observable<ProductView> {
    return this.datasource.postData<ProductView>("api/Product/Create",product);
  }
}
