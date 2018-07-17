import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductIndexComponent } from './product-index.component';
import { ProductRepositoryService } from '../ProductRepository/product-repository.service';
import { ProductView } from '../../Models/product-view';
import { Observable } from 'rxjs/Observable';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from '../product.module';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Location } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductCreateComponent } from '../product-create/product-create.component';

describe('ProductIndexComponent', () => {
  let component: ProductIndexComponent;
  let fixture: ComponentFixture<ProductIndexComponent>;
  let debugElement: DebugElement;
  let bindingElement: HTMLTableElement;
  let location: Location;
  let router: Router;


  let mockRepository = {
    GetProducts(): Observable<ProductView[]> {
      let mockResponse = new ProductView();
      mockResponse.Id = "10";
      mockResponse.InterestRate = 10;
      mockResponse.MaximumLoan = 10;
      mockResponse.MaximumLoanTerm = 3;
      mockResponse.MaximumLTV = 12;
      mockResponse.Name = "ss";
      let responses = [mockResponse, mockResponse];

      return new Observable<ProductView[]>(
        data => {
          // setTimeout(() => data, 1000);
          data.next(responses);
        }
      );
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductIndexComponent, ProductDetailsComponent,ProductCreateComponent],
      providers: [{ provide: ProductRepositoryService, useValue: mockRepository }],
      imports: [
        FormsModule,ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes)]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ProductIndexComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    //console.log(debugElement);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    bindingElement = (debugElement.childNodes as DebugElement[]).filter(f => f.name == "table")[0].nativeElement;
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {

    let path = '/Products/Details/123';
    router.navigate([path]);
    tick(50);
    expect(location.path()).toBe(path);
  }));

  it("shoud create bindings", () => {
    expect(component).toBeTruthy();
    expect(component.product).toBeDefined();
    component.product.subscribe(data => {
      expect(data.length).toEqual(2);
    });

    fixture.detectChanges();

    expect(bindingElement.textContent).toContain("ss");

    expect(bindingElement.rows.length).toEqual(3);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("shoud product views", () => {
    expect(component).toBeTruthy();
    expect(component.product).toBeDefined();
    component.product.subscribe(data => {
      expect(data[0].Id).toEqual("10");
      expect(data[0].InterestRate).toEqual(10);
      expect(data[0].Name).toEqual("ss");
      expect(data[0].MaximumLoan).toEqual(10);
      expect(data[0].MaximumLoanTerm).toEqual(3);
      expect(data[0].MaximumLTV).toEqual(12);
      expect(data[0].InterestRate).toEqual(10);
    });
  });
});
