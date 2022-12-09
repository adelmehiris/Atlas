import { NgModule } from '@angular/core';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageMessageComponent } from './page-message/page-message.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  exports: [
    PageHomeComponent,
    PageLoginComponent,
    PageMessageComponent
  ],
  declarations: [
    PageHomeComponent,
    PageLoginComponent,
    PageMessageComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PageModule { }
