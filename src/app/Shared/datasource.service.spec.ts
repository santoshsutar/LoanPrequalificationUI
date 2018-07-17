import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { DatasourceService } from './datasource.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductView } from '../Models/product-view';

describe('DatasourceService', () => {
  let injector: TestBed;
  let service: DatasourceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatasourceService]
    });
    injector = getTestBed();
    service = injector.get(DatasourceService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    httpMock = null;
    service = null;
  });

  it('should ...', inject([DatasourceService], (service: DatasourceService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<ProductView[]>',
    () => {
      let mockResponse = new ProductView();
      mockResponse.Id = "10";
      mockResponse.InterestRate = 10;
      mockResponse.MaximumLoan = 10;
      mockResponse.MaximumLoanTerm = 3;
      mockResponse.MaximumLTV = 12;
      mockResponse.Name = "ss";
      let responses = [mockResponse, mockResponse];
      service.GetItems<ProductView>("api/Product/index").subscribe(
        (data) => {
          expect(data).toBeDefined();
          //console.log("xxx"+data as ProductView[]);
          expect(data[0].Id).toEqual("10");
          expect(data[0].InterestRate).toEqual(10);
          expect(data[0].Name).toEqual("ss");
          expect(data[0].MaximumLoan).toEqual(10);
          expect(data[0].MaximumLoanTerm).toEqual(3);
          expect(data[0].MaximumLTV).toEqual(12);
          expect(data[0].InterestRate).toEqual(10);
        });

      const req = httpMock.expectOne(service.baseUrl + "api/Product/index");
      expect(req.request.method).toBe("GET");
      req.flush(responses);
    });

    it('should return an Observable<ProductView>',
    () => {
      let mockResponse = new ProductView();
      mockResponse.Id = "10";
      mockResponse.InterestRate = 10;
      mockResponse.MaximumLoan = 10;
      mockResponse.MaximumLoanTerm = 3;
      mockResponse.MaximumLTV = 12;
      mockResponse.Name = "ss";
      service.GetItem<ProductView>("api/Product/details?id="+mockResponse.Id).subscribe(
        (data) => {
          expect(data).toBeDefined();
          //console.log(data);
          
          //console.log("xxx"+data as ProductView[]);
          expect(data.Id).toEqual("10");
          expect(data.InterestRate).toEqual(10);
          expect(data.Name).toEqual("ss");
          expect(data.MaximumLoan).toEqual(10);
          expect(data.MaximumLoanTerm).toEqual(3);
          expect(data.MaximumLTV).toEqual(12);
          expect(data.InterestRate).toEqual(10);
        });

      const req = httpMock.expectOne(service.baseUrl + "api/Product/details?id="+mockResponse.Id);
      expect(req.request.method).toBe("GET");
      req.flush(mockResponse);
    });

    it('should create new product',
    () => {
      let mockResponse = new ProductView();
      mockResponse.Id = "10";
      mockResponse.InterestRate = 10;
      mockResponse.MaximumLoan = 10;
      mockResponse.MaximumLoanTerm = 3;
      mockResponse.MaximumLTV = 12;
      mockResponse.Name = "ss";
      service.postData<ProductView>("api/Product/Create",mockResponse).subscribe(
        (data) => {
          expect(data).toBeDefined();
         // console.log(data);
          
          //console.log("xxx"+data as ProductView[]);
          expect(data.Id).toEqual("10");
          expect(data.InterestRate).toEqual(10);
          expect(data.Name).toEqual("ss");
          expect(data.MaximumLoan).toEqual(10);
          expect(data.MaximumLoanTerm).toEqual(3);
          expect(data.MaximumLTV).toEqual(12);
          expect(data.InterestRate).toEqual(10);
        });

      const req = httpMock.expectOne(service.baseUrl + "api/Product/Create");
      expect(req.request.method).toBe("POST");
      req.flush(mockResponse);
    });


});
