import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostModule } from './post/post.module';
import { LoginComponent } from './usuario/login/login.component';
import { LoginService } from './usuario/login/login.service';
import { registerService } from './usuario/register/register.service';
import { UsuarioModule } from './usuario/usuario.module';
import {ToastModule} from 'primeng/toast';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    UsuarioModule,
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule


  ],
  providers: [registerService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
