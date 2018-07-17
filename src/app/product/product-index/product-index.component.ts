import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from '../ProductRepository/product-repository.service';
import { ProductView } from '../../Models/product-view';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {
  public product: Observable<ProductView[]>;
  constructor(private repository: ProductRepositoryService) {
    this.product=this.repository.GetProducts()
  }

  ngOnInit() {
  }

}
