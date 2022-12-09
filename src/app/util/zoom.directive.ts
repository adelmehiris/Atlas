import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  @HostBinding('style.transform') transform = 'scale(1)';
  @HostBinding('style.transition') transition = 'transform .6s ease';

  constructor() {
    console.log('ZoomDerective')
  }

  @HostListener('mouseenter')
  zoomIn(){
    this.transform = 'scale(1.1)';
  }

  @HostListener('mouseleave')
  zoomOut(){
    this.transform = 'scale(1)';
  }

}
