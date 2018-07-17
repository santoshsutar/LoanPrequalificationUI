import { Component, OnInit } from '@angular/core';
import { LoanApplicationRepositoryService } from '../LoanApplicationRepository/loan-application-repository.service';

@Component({
  selector: 'app-loan-application-index',
  templateUrl: './loan-application-index.component.html',
  styleUrls: ['./loan-application-index.component.css']
})
export class LoanApplicationIndexComponent implements OnInit {

  
  constructor(private repository: LoanApplicationRepositoryService) { }

  ngOnInit() {
  }

}
