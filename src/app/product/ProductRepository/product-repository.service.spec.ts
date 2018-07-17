import { TestBed, inject, async } from '@angular/core/testing';

import { ProductRepositoryService } from './product-repository.service';
import { DatasourceService } from '../../Shared/datasource.service';
import { ProductView } from '../../Models/product-view';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


describe('ProductRepositoryService', () => {
  let service: ProductRepositoryService;
  let datasource: DatasourceService;
  beforeEach(() => {
    datasource = new DatasourceService(null);
    service = new ProductRepositoryService(datasource);
  });
  afterEach(() => {
    service = null;
    datasource = null;
  });
  it('should ...',
    () => {
      expect(service).toBeDefined();
    });
  it('should return productview[]',
    () => {
      let mockResponse = new ProductView();
      mockResponse.Id = "10";
      mockResponse.InterestRate = 10;
      mockResponse.MaximumLoan = 10;
      mockResponse.MaximumLoanTerm = 3;
      mockResponse.MaximumLTV = 12;
      mockResponse.Name = "ss";
      let responses = [mockResponse, mockResponse];
      let responses1 = new Observable<ProductView[]>(
        data => {
          // setTimeout(() => data, 1000);
          data.next(responses);
        }
      );
      let spy = spyOn(datasource, 'GetItems').and.returnValues(responses1);
      service.GetProducts().subscribe((data) => {
        expect(data).toBeDefined();
        expect(data[0].Id).toEqual("10");
        expect(data[0].InterestRate).toEqual(10);
        expect(data[0].Name).toEqual("ss");
        expect(data[0].MaximumLoan).toEqual(10);
        expect(data[0].MaximumLoanTerm).toEqual(3);
        expect(data[0].MaximumLTV).toEqual(12);
        expect(data[0].InterestRate).toEqual(10);
      });
    });
    
  it('should return productview',
  () => {
    let mockResponse = new ProductView();
    mockResponse.Id = "10";
    mockResponse.InterestRate = 10;
    mockResponse.MaximumLoan = 10;
    mockResponse.MaximumLoanTerm = 3;
    mockResponse.MaximumLTV = 12;
    mockResponse.Name = "ss";
    let responses1 = new Observable<ProductView>(
      data => {
        // setTimeout(() => data, 1000);
        data.next(mockResponse);
      }
    );
    let spy = spyOn(datasource, 'GetItem').and.returnValues(responses1);
    service.GetProduct(mockResponse.Id).subscribe((data) => {
      expect(data).toBeDefined();
      //console.log(data[0].Id);
      expect(data.Id).toEqual("10");
      expect(data.InterestRate).toEqual(10);
      expect(data.Name).toEqual("ss");
      expect(data.MaximumLoan).toEqual(10);
      expect(data.MaximumLoanTerm).toEqual(3);
      expect(data.MaximumLTV).toEqual(12);
      expect(data.InterestRate).toEqual(10);
    });
  });

  
  it('should create product',
  () => {
    let mockResponse = new ProductView();
    mockResponse.Id = "10";
    mockResponse.InterestRate = 10;
    mockResponse.MaximumLoan = 10;
    mockResponse.MaximumLoanTerm = 3;
    mockResponse.MaximumLTV = 12;
    mockResponse.Name = "ss";
    let responses1 = new Observable<ProductView>(
      data => {
        // setTimeout(() => data, 1000);
        data.next(mockResponse);
      }
    );
    let spy = spyOn(datasource, 'postData').and.returnValues(responses1);
    service.CreateProduct(mockResponse).subscribe((data) => {
      expect(data).toBeDefined();
      //console.log(data[0].Id);
      expect(data.Id).toEqual("10");
      expect(data.InterestRate).toEqual(10);
      expect(data.Name).toEqual("ss");
      expect(data.MaximumLoan).toEqual(10);
      expect(data.MaximumLoanTerm).toEqual(3);
      expect(data.MaximumLTV).toEqual(12);
      expect(data.InterestRate).toEqual(10);
    });
  });

});
