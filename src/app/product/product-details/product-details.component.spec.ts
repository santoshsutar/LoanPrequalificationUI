import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { ProductView } from '../../Models/product-view';
import { Observable } from 'rxjs/Observable';
import { ProductRepositoryService } from '../ProductRepository/product-repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DebugElement, DebugNode } from '@angular/core';
import { Location } from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../product.module';
import { ProductIndexComponent } from '../product-index/product-index.component';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let activatedRoute: ActivatedRoute;
  let debugElement: DebugElement;
  let h2bindingElement: HTMLTableElement;
  let fbindingElement: HTMLFieldSetElement;
  let pbindingElement: HTMLParagraphElement;

  let location: Location;
  let router: Router;

  let mockRepository = {
    GetProduct(): Observable<ProductView> {
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
      declarations: [ProductIndexComponent, ProductDetailsComponent,ProductCreateComponent],
      imports: [
        FormsModule,ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: ProductRepositoryService, useValue: mockRepository },
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: { params: [{ "Id": 10 }] }
        }
      }],
      
    })
      .compileComponents();
    // let spy = spyOn(ActivatedRoute, 'GetItems').and.returnValues(responses1);
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();

    h2bindingElement = (debugElement.childNodes as DebugElement[])
      .filter(f => f.name == "h2")[0].nativeElement;
    fbindingElement = (debugElement.childNodes as DebugElement[])[4].nativeNode
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  }));

  it('navigate to "" redirects you to /products', fakeAsync(() => {

    let path = '/Products';
    router.navigate([path]);
    tick(50);
    expect(location.path()).toBe(path);
  }));

  it("shoud create bindings", () => {
    //console.log(h2bindingElement.textContent);
    expect(fbindingElement.textContent).toContain("ss");
    expect(h2bindingElement.textContent).toContain("ss");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.product).toBeTruthy();
    expect(component.product).toBeDefined();
    expect(component.product.Id).toEqual("10");
    expect(component.product.InterestRate).toEqual(10);
    expect(component.product.Name).toEqual("ss");
    expect(component.product.MaximumLoan).toEqual(10);
    expect(component.product.MaximumLoanTerm).toEqual(3);
    expect(component.product.MaximumLTV).toEqual(12);
    expect(component.product.InterestRate).toEqual(10);
  });

});
