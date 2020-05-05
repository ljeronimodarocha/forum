import { user } from './user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';


import { confirmPasswordValidator, checkExistsEmail } from './../../core/share/confirmPassword.validator';
import { registerService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() N: string;
  @Input() teste: FormGroup =
    this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(0)]],
      replayPassword: ['', [Validators.required, Validators.minLength(0)]],
      state: ['', Validators.required]
    }, { validator: confirmPasswordValidator() });;
  debounce: Subject<string> = new Subject<string>();
  constructor(private formbuilder: FormBuilder, private service: registerService) { }





  registerUser(t) {
    this.service.save(this.teste.value);
    console.log(t);

    //this.teste.reset();

  }
  enviar(evento) {
    if (evento) {
      this.teste.controls['state'].setValue(evento);
    }
  }
  checkExistsEmail(string: any) {
    console.log(string);

    if (!(this.teste.controls['email'].value === '')) {
      let u = this.service.checkEmail(this.teste.controls['email'].value);
      u.subscribe(res => {
        if (!(res === null)) {
          console.log(res);
        } else {
          this.teste.controls['email'].setErrors(null);

          console.log(this.teste.controls['email'].hasError);
        }
      }
      )
    }
  }
}
