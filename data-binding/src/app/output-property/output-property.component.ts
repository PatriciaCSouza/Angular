import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // outputs: ['mudouValor'] pode ser usado ao inves do @Output ao lado da variavel
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    // this.mudouValor.emit("novoValor", this.valor);
  }

  decrementa() {
    this.valor--;
    // era para ser assim, mas nao funciona
    // this.mudouValor.emit({ novoValor: this.valor });
  }

  constructor() { }

  ngOnInit() {
  }

}
