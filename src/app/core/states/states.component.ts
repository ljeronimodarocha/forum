import { Component, OnInit, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  @Output() teste2 = new EventEmitter();
  @Input() valor;
  enviar() {
    this.teste2.emit(this.valor)
  }
  constructor(private formbuilder: FormBuilder) { }
  @Output() states;
  ngOnInit() {
    this.states = [
      { name: 'Acre', abbrev: 'AC' },
      { name: 'Alagoas', abbrev: 'AL' },
      { name: 'Colorado', abbrev: 'CO' },
      { name: 'Amapá', abbrev: 'AP' },
      { name: 'Amazonas', abbrev: 'AM' },
      { name: 'Bahia', abbrev: 'BA' },
      { name: 'Ceará', abbrev: 'CE' },
      { name: 'Distrito Federal', abbrev: 'DF' },
      { name: 'Espírito Santo', abbrev: 'ES' },
      { name: 'Goiás', abbrev: 'GO' },
      { name: 'Maranhão', abbrev: 'MA' },
      { name: 'Mato Grosso', abbrev: 'MT' },
      { name: 'Mato Grosso do Sul', abbrev: 'MS' },
      { name: 'Minas Gerais', abbrev: 'MG' },
      { name: 'Pará', abbrev: 'PA' },
      { name: 'Paraíba', abbrev: 'PB' },
      { name: 'Paraná', abbrev: 'PR' },
      { name: 'Pernambuco', abbrev: 'PE' },
      { name: 'Piauí', abbrev: 'PI' },
      { name: 'Rio de Janeiro', abbrev: 'RJ' },
      { name: 'Rio Grande do Norte', abbrev: 'RN' },
      { name: 'Rio Grande do Sul', abbrev: 'RS' },
      { name: 'Rondônia', abbrev: 'RO' },
      { name: 'Roraima', abbrev: 'RR' },
      { name: 'Santa Catarina', abbrev: 'SC' },
      { name: 'São Paulo', abbrev: 'SP' },
      { name: 'Sergipe', abbrev: 'SE' },
      { name: 'Tocantins', abbrev: 'TO' },
    ];
  }
  addEstado(v) {
    this.valor = v;
  }

}
