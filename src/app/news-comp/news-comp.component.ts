import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-comp',
  templateUrl: './news-comp.component.html',
  styleUrls: ['./news-comp.component.css']
})
export class NewsCompComponent {
  
  constructor(private service: NewsService){}

  article:any
  ngOnInit()
  {
    this.service.getnews().subscribe((data)=>{
      console.log(data)
      this.article=data.articles
    })
  }

}
