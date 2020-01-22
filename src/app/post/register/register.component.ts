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
  u: user;
  @Input() teste: FormGroup;
  constructor(private formbuilder: FormBuilder, private service: registerService) { }

  ngOnInit() {
    this.teste = this.formbuilder.group({
      name: [, Validators.required],
      email: [, [Validators.required]],
      password: [, Validators.required],
      replayPassword: ['', Validators.required],
      state: []
    });


  }
  enviar(evento) {
    if (evento) {
      this.teste.controls['state'].patchValue(evento);
      console.log(this.teste);
      this.service.save(this.teste.value);
    }
  }
  checkReplayPassword(event) {
    var password = this.teste.controls['password'].value
    var replayPassword = this.teste.controls['replayPassword'].value
    if (!(password === replayPassword)) {

    }

  }
}
