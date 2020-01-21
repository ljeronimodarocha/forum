import { registerService } from './register.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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


      this.u.name =  this.teste.controls["name"].value;
      this.u.email = this.teste.controls["email"].value;
      this.u.password = this.teste.controls["password"].value;
      this.u.state = this.teste.controls["state"].value;


      
     
      console.log(this.u);
      // this.service.save(this.u);
    }
  }
}
