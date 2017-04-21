import { Directive, ElementRef } from '@angular/core';
import $ from './lib/jquery';

@Directive({
  selector: '[gc]'
})
export class GcDirective {
  constructor(el: ElementRef) {
    console.log(el);
    console.log($(el.nativeElement));
  }
}
