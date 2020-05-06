import { LoginService } from './login.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() formLogin: FormGroup =
    this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(0)]],
    })

  constructor(private formbuilder: FormBuilder, private service: LoginService) { }

  ngOnInit() {
  }

  logar() {
    let email = this.formLogin.controls['email'].value;
    let password = this.formLogin.controls['password'].value;

    let retorno = this.service.logar(email, password).subscribe(sucesso =>
      console.log(sucesso),
      error => console.log(error),
    );
    console.log(retorno);

  }

}
