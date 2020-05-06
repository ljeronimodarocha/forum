import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './usuario/login/login.service';
import { UsuarioModule } from './usuario/usuario.module';
import { registerService } from './usuario/register/register.service';
import { PostModule } from './post/post.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './usuario/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    UsuarioModule,
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too
    HttpClientModule
  ],
  providers: [ registerService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
