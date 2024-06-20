import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  t:any

  constructor(private todo: NewsService){}

  ngOnInit()
  {
    this.todo.getTodo().subscribe((data)=>{
      console.log(data)
      this.t=data
    })
  }

}
