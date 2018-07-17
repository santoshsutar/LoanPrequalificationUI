import { Component, OnInit } from '@angular/core';
import { ProductView } from '../../Models/product-view';
import { ProductRepositoryService } from '../ProductRepository/product-repository.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product: ProductView;
  constructor(private repository: ProductRepositoryService,
    private activatedRoute: ActivatedRoute) {
    this.product = new ProductView();
    const productID = this.activatedRoute.snapshot.params['Id'];
    this.repository.GetProduct(productID).subscribe(data => {
      this.product = data;

    });
  }
  ngOnInit() {
  }

}
