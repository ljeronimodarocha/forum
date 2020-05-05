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
    name: ['', Validators.required],
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(0)]],
  })

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
  }

}
