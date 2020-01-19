import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postForm:FormGroup;
  constructor(private fb:FormBuilder) { }
  ngOnInit() {
    this.postForm = this.fb.group({
      id:[""],
      titulo:[""],
      conteudo:[""]
    })
  }

}
