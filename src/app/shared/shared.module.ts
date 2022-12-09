import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BaseModule } from '../base/base.module';
import { UtilModule } from '../util/util.module';



@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BaseModule,
    UtilModule
  ]
})
export class SharedModule { }
