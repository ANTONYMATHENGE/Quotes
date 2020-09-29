import {Directive, ElementRef, Input} from '@angular/core';
import {Quote} from './quote';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() likes: Quote;


  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="#834c69"
   }

}

