import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() teste: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.teste = this.formbuilder.group({
      name: [],
      email: [''],
      password: [''],
      replayPassword: [''],
      state: ['']
    });
  }
  enviar(evento) {
    if (evento) {
      this.teste.controls['state'].patchValue(evento);
      console.log(this.teste.value);
    }
  }
}
