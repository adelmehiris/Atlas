import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from './base-button/base-button.component';
import { BaseInputComponent } from './base-input/base-input.component';
import { BaseImageComponent } from './base-image/base-image.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BaseButtonComponent,
    BaseInputComponent,
    BaseImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BaseButtonComponent,
    BaseInputComponent,
    BaseImageComponent
  ]
})
export class BaseModule { }
