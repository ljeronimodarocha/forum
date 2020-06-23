import { registerService } from '../usuario/register/register.service';
import { StatesComponent } from './../core/states/states.component';
import { RegisterComponent } from '../usuario/register/register.component';
import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostDetalhe } from './post-detalhe/post-detalhe.component'



@NgModule({
  declarations: [PostComponent, RegisterComponent, StatesComponent, PostDetalhe],
  imports: [
    CommonModule,
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too
    HttpClientModule
    
  ],
  exports: [ ],
  
})
export class PostModule { }
