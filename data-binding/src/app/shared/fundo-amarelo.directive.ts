import { element } from 'protractor';
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]' //será aplicado somente para elemento p (paragrafo)
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow'; //não é uma boa pratica
    this._renderer.setElementStyle(this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

}
