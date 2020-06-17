import { LoadPostsService } from './load.posts.service';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private posts :any=  [];

  constructor(private postsService : LoadPostsService, public elementRef:ElementRef) { }

  ngOnInit() {
    this.postsService.buscaPosts().subscribe( res => {
      this.posts = res
      console.log(this.posts);
      
    },
      error => console.log(error)
      
    )
  }
  @HostListener("mouseover") teste(event){
    console.log(event);
  }
  teste2(event){
    console.log("tira");
    
  }
  

}
