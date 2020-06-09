import { LoginService } from './login.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  @Input() formLogin: FormGroup =
    this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(0)]],
    })
  constructor(private formbuilder: FormBuilder, private service: LoginService) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('authorization')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  logar() {
    let email = this.formLogin.controls['email'].value;
    let password = this.formLogin.controls['password'].value;
    this.service.logar(email, password).subscribe(sucesso => {
      console.log(sucesso.headers.get('authorization'));
      localStorage.setItem('authorization', sucesso.headers.get('authorization'));
    },
      error => console.log(error),
    );
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('authorization');
    this.currentUserSubject.next(null);
  }

}
