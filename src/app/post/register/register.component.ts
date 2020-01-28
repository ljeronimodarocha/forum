import { user } from './user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { confirmPasswordValidator, checkExistsEmail } from './../../core/share/confirmPassword.validator';
import { registerService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() teste: FormGroup;
  debounce: Subject<string> = new Subject<string>();
  constructor(private formbuilder: FormBuilder, private service: registerService) { }
  ngOnInit() {
    this.teste = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      replayPassword: ['', [Validators.required, Validators.minLength(6)]],
      state: ['', Validators.required]
    }, { validator: confirmPasswordValidator(), validators: checkExistsEmail(this.service) });

  }
  registerUser() {
    this.service.save(this.teste.value);
  }
  enviar(evento) {
    if (evento) {
      this.teste.controls['state'].patchValue(evento);
    }
  }
}
