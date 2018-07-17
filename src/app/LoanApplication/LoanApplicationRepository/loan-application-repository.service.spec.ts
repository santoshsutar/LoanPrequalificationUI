import { TestBed, inject } from '@angular/core/testing';

import { LoanApplicationRepositoryService } from './loan-application-repository.service';
import { DatasourceService } from '../../Shared/datasource.service';
import { LoanApplicationSummaryView } from '../../Models/loan-application-summary-view';
import { Observable } from 'rxjs/Observable';

describe('LoanApplicationRepositoryService', () => {
  let service: LoanApplicationRepositoryService;
  let datasource: DatasourceService;
  beforeEach(() => {
    datasource = new DatasourceService(null);
    service = new LoanApplicationRepositoryService(datasource);
  });
  afterEach(() => {
    service = null;
    datasource = null;
  });
  it('should be created',
    () => {
      expect(service).toBeDefined();
    });
  it('should return LoanApplicationSummaryView[]',
    () => {
      let mockResponse = new LoanApplicationSummaryView();
      mockResponse.Id = "10";
      mockResponse.LoanAmount = 10;
      mockResponse.Status = "Approved";
      mockResponse.HasOffer = false;
     
      let responses = [mockResponse, mockResponse];
      let responses1 = new Observable<LoanApplicationSummaryView[]>(
        data => {
          // setTimeout(() => data, 1000);
          data.next(responses);
        }
      );
      let spy = spyOn(datasource, 'GetItems').and.returnValues(responses1);
      service.GetLoanApplications().subscribe((data) => {
        expect(data).toBeDefined();
        expect(data[0].Id).toEqual("10");
        expect(data[0].HasOffer).toEqual(false);
        expect(data[0].LoanAmount).toEqual(10);
        expect(data[0].Status).toEqual("Approved");        
      });
    });
});
