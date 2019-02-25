import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  // inputs:['nomeCurso:nome'] 

  // @Input('nome') nomeCurso: string = ''; abaixo é igual inputs:['nomeCurso:nome'] que poderia ser colocado acima
})
export class InputPropertyComponent implements OnInit {

  // com o @Input, essa variavel é exposta ao selector app-curso, podendo ser usada quando chamar ele 
  // Internamente a variavel é conhecida como nomeCurso, e externamente ela é conhecida por nome
  //isso se chama decorator  
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
