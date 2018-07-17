import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoanApplicationIndexComponent } from './loan-application-index/loan-application-index.component';
export const routes: Routes = [
  { path: 'LoanApplication/Index', component: LoanApplicationIndexComponent },
];
@NgModule({
  imports: [
    CommonModule,       
    RouterModule.forChild(routes)
  ],
  declarations: [LoanApplicationIndexComponent]
})
export class LoanApplicationModule { }
