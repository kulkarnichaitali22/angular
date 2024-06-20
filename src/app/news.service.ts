import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { }

  newsapi="https://newsapi.org/v2/everything?q=tesla&from=2024-05-06&sortBy=publishedAt&apiKey=8bf9265466e94a7d80870d50694c0542"

  todoapi="https://jsonplaceholder.typicode.com/todos"

  postapi="https://jsonplaceholder.typicode.com/posts"

  getnews():Observable<any>
  {
    return this.http.get(this.newsapi)
  }

  getTodo():Observable<any>
  {
    return this.http.get(this.todoapi)
  }
  
  getPost():Observable<any>
  {
    return this.http.get(this.postapi)
  }

}
