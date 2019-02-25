import { Directive, HostListener, 
  ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  //esse evento "escuta" o que acontece com a classe hospedeira dessa diretiva
  @HostListener('mouseenter') onmouseover(){

  }

  constructor(private ElementRef) { }

}
