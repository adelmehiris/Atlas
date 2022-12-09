import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-image',
  templateUrl: './base-image.component.html',
  styleUrls: ['./base-image.component.css']
})
export class BaseImageComponent {

  @Input() source = "";

}
