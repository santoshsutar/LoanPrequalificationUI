import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from "@angular/router";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent]
})
export class HomeModule { }
