import { StatesComponent } from './../core/states/states.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PostComponent, RegisterComponent, StatesComponent],
  imports: [
    CommonModule,
    FormsModule,    //added here too
    ReactiveFormsModule //added here too
  ],
  exports: [ ]
})
export class PostModule { }
