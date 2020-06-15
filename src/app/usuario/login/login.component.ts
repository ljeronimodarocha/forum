import { LoginService } from './login.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  @Input() formLogin: FormGroup =
    this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(0)]],
    })
  constructor(private formbuilder: FormBuilder, private service: LoginService, private messageService: MessageService,
    private router :Router) {
  }
  logar() {
    let email = this.formLogin.controls['email'].value;
    let password = this.formLogin.controls['password'].value;
    this.service.logar(email, password).subscribe(sucesso => {
      this.messageService.add({ severity: 'success', summary: "Logado com sucesso" })
      localStorage.setItem('authorization', sucesso.headers.get('authorization'));
      this.router.navigate(['home'])
    },
      error => this.messageService.add({
        severity: 'error',
        summary: error.error.message, detail: "Email ou senha incorreto!"
        
      })
    );
    this.formLogin.reset();
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('authorization');
  }

}
