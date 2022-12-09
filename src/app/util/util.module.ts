import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMessagesPipe } from './filter-messages.pipe';
import { ZoomDirective } from './zoom.directive';
import { ServicesModule } from '../core/services/services.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [
    FilterMessagesPipe,
    ZoomDirective
  ],
  declarations: [
    FilterMessagesPipe,
    ZoomDirective
  ],
  imports: [
    CommonModule,
    ServicesModule,
    FormsModule
  ]
})
export class UtilModule { }
