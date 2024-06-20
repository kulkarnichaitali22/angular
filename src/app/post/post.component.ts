import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private p : NewsService){}

  info:any

  ngOnInit()
  {
    this.p.getPost().subscribe((data)=>
    {
      this.info=data
    })
  }

}
