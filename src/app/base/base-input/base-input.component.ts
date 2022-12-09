import { Component, Input, Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.css']
})
export class BaseInputComponent {
  @Input() fLabel = "" ;
  @Input() fType = "text" ;
  @Input() fValue = "";

  @Output() fValueChange = new EventEmitter();
}
