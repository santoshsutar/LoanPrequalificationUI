import { Injectable } from '@angular/core';
import { DatasourceService } from '../../Shared/datasource.service';
import { LoanApplicationSummaryView } from '../../Models/loan-application-summary-view';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoanApplicationRepositoryService {

  constructor(private datasource: DatasourceService) {
  }
  public GetLoanApplications(): Observable<LoanApplicationSummaryView[]> {
    return this.datasource.GetItems<LoanApplicationSummaryView>("api/LoanApplication/index");
  }
}
