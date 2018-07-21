import { Component, OnInit } from '@angular/core';
import { LoanApplicationRepositoryService } from '../LoanApplicationRepository/loan-application-repository.service';
import { LoanApplicationSummaryView } from '../../Models/loan-application-summary-view';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-loan-application-index',
  templateUrl: './loan-application-index.component.html',
  styleUrls: ['./loan-application-index.component.css']
})
export class LoanApplicationIndexComponent implements OnInit {

  public LoanApplications: Observable<LoanApplicationSummaryView[]>;
  constructor(private repository: LoanApplicationRepositoryService) {
    this.LoanApplications = this.repository.GetLoanApplications();
  }

  ngOnInit() {
  }

}
