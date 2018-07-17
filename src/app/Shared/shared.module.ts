import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasourceService } from './datasource.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DatasourceService ],
 // declarations: [DatasourceService]
 // exports:[DatasourceService]
  
})
export class SharedModule { }
