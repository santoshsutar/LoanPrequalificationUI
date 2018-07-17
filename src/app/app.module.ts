import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { SiteMasterComponent } from './site-master/site-master.component';
import { HomeModule } from './home/home.module';
import { IndexComponent } from './home/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { LoanApplicationModule } from './LoanApplication/loan-application.module';
const routes: Routes = [
  { path: '**', component: IndexComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SiteMasterComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    HttpClientModule,
    ProductModule,
    LoanApplicationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [SiteMasterComponent]
})
export class AppModule { }
