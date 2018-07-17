import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductCreateComponent } from './product-create.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ProductView } from '../../Models/product-view';
import { Observable } from 'rxjs/Observable';
import { ProductRepositoryService } from '../ProductRepository/product-repository.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../product.module';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductIndexComponent } from '../product-index/product-index.component';


describe('ProductCreateComponent', () => {
  let component: ProductCreateComponent;
  let fixture: ComponentFixture<ProductCreateComponent>;
  let createButtonElement: DebugElement;
  let router: Router;
  let mockRepository = {
    CreateProduct(): Observable<ProductView> {
      let mockResponse = new ProductView();
      mockResponse.Id = "10";
      mockResponse.InterestRate = 10;
      mockResponse.MaximumLoan = 10;
      mockResponse.MaximumLoanTerm = 3;
      mockResponse.MaximumLTV = 12;
      mockResponse.Name = "ss";
      return new Observable<ProductView>(
        data => {
          // setTimeout(() => data, 1000);
          data.next(mockResponse);
        }
      );
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCreateComponent, ProductDetailsComponent, ProductIndexComponent],
      imports: [FormsModule, ReactiveFormsModule,

        RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: ProductRepositoryService, useValue: mockRepository }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreateComponent);
    component = fixture.componentInstance;
    createButtonElement = fixture.debugElement.query(By.css('input[type=submit]'));
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  it('should create product', () => {
    expect(component).toBeTruthy();
    // This sync emits the event and the subscribe callback gets executed above
    // createButtonElement.triggerEventHandler('click', null);
    mockRepository.CreateProduct().subscribe(
      data => {
        component.productForm.setValue({
          Name: data.Name, InterestRate: data.InterestRate,
          MaximumLoan: data.MaximumLoan, MaximumLoanTerm: data.MaximumLoanTerm,
          MaximumLTV: data.MaximumLTV
        });
      }
    );
    component.Save();
    let product = component.productForm.value as ProductView;
    expect(product).toBeTruthy();
    expect(product).toBeDefined();
    expect(product.InterestRate).toEqual(10);
    expect(product.Name).toEqual("ss");
    expect(product.MaximumLoan).toEqual(10);
    expect(product.MaximumLoanTerm).toEqual(3);
    expect(product.MaximumLTV).toEqual(12);
    expect(product.InterestRate).toEqual(10);

  });

});
