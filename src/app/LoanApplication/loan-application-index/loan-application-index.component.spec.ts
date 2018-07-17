import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationIndexComponent } from './loan-application-index.component';
import { LoanApplicationRepositoryService } from '../LoanApplicationRepository/loan-application-repository.service';
import { Observable } from 'rxjs/Observable';
import { LoanApplicationSummaryView } from '../../Models/loan-application-summary-view';

describe('LoanApplicationIndexComponent', () => {
  let component: LoanApplicationIndexComponent;
  let fixture: ComponentFixture<LoanApplicationIndexComponent>;
  let mockRepository = {
    GetLoanApplications(): Observable<LoanApplicationSummaryView[]> {
      let mockResponse = new LoanApplicationSummaryView();
      mockResponse.Id = "10";
      mockResponse.LoanAmount = 10;
      mockResponse.Status = "Approved";
      mockResponse.HasOffer = false;
      let responses = [mockResponse, mockResponse];

      return new Observable<LoanApplicationSummaryView[]>(
        data => {
          // setTimeout(() => data, 1000);
          data.next(responses);
        }
      );
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanApplicationIndexComponent ],
      providers: [{ provide: LoanApplicationRepositoryService, useValue: mockRepository }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
