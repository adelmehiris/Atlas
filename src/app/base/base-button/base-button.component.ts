import { Component, Input, Attribute } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.css']
})
export class BaseButtonComponent {

  @Input() disabled = false ;
  @Input() color = "primary";

  constructor(@Attribute("danger") danger : string){
    if(danger !== null) this.color = "danger";
  }

}
