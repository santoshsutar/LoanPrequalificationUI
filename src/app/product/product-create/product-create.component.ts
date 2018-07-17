import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductRepositoryService } from '../ProductRepository/product-repository.service';
import { ProductView } from '../../Models/product-view';
import { Router } from '@angular/router';
import { BrokenBusinessRule } from '../../Models/broken-business-rule';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  public productForm: FormGroup = new FormGroup({
    Name: new FormControl(),
    InterestRate: new FormControl(),
    MaximumLTV: new FormControl(),
    MaximumLoan: new FormControl(),
    MaximumLoanTerm: new FormControl()
  });
  public showErrorMessage(): boolean {
    return this.brokenRules.length > 0 ? true : false;
  }
  constructor(private router: Router, public repository: ProductRepositoryService) { }

  ngOnInit() {
  }
  public brokenRules: BrokenBusinessRule[];
  public Save() {

    let prod: ProductView = this.productForm.value as ProductView;
    let realprod = new ProductView();
    realprod.Id = prod.Id;
    realprod.InterestRate = prod.InterestRate;
    realprod.MaximumLoan = prod.MaximumLoan;
    realprod.MaximumLoanTerm = prod.MaximumLoanTerm;
    realprod.MaximumLTV = prod.MaximumLTV;
    realprod.Name = prod.Name;
    let rules = realprod.GetBrokenRules();
    if (rules.length > 0) {
      this.brokenRules = rules;
      return;
    }
    this.repository.CreateProduct(realprod).subscribe(
      data => {
        realprod = data;
        this.router.navigateByUrl('/Products');
        return;
      }
    );
    return;
  }
}
