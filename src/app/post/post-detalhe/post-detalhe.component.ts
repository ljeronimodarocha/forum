import { PostDetalheService } from './post-detalhe.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-detalhe',
  templateUrl: './post-detalhe.component.html',
  styleUrls: ['./post-detalhe.component.css']
})
export class PostDetalhe implements OnInit {

  @Input() FormComentario: FormGroup =
    this.formbuilder.group({
      comentario: ['', [Validators.required]]
    })
  private post;
  private id: any;
  constructor(private route: ActivatedRoute, private service: PostDetalheService, private formbuilder: FormBuilder) { }

  async ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['codigo'];
      }
    )
    await this.service.buscaPostsDetalhe(this.id).subscribe(res => {
      console.log(res)
      this.post = res
    },
      error => console.log(error)
    );
  }
  adicionarComentario(){
    console.log("teste + " + this.FormComentario.controls['comentario'].value);
    
  }

}
