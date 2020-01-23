import { confirmPasswordValidator } from './../../core/share/confirmPassword.validator';
import { registerService } from './register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { user } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() teste: FormGroup;
  constructor(private formbuilder: FormBuilder, private service: registerService) { }
  ngOnInit() {
    this.teste = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      replayPassword: ['', [Validators.required]],
      state: ['', Validators.required]
    }, { validator: confirmPasswordValidator() });
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
