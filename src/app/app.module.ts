import { registerService } from './post/register/register.service';
import { PostModule } from './post/post.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too
    
  ],
  providers: [ registerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
